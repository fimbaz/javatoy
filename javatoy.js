var CONSTANT_Class		= 7;
var CONSTANT_Fieldref		= 9;
var CONSTANT_Methodref		= 10;
var CONSTANT_InterfaceMethodref = 11;
var CONSTANT_String		= 8;
var CONSTANT_Integer		= 3;
var CONSTANT_Float		= 4;
var CONSTANT_Long		= 5;
var CONSTANT_Double		= 6;
var CONSTANT_NameAndType	= 12;
var CONSTANT_Utf8		= 1;

var RETURN = null;
var NO_RETURN = 3533;

var ACC_PUBLIC    = 0x01;
var ACC_FINAL     = 0x10;
var ACC_SUPER     = 0x20;
var ACC_INTERFACE = 0x200;
var ACC_ABSTRACT  = 0x400;

function parseMethodDescriptor(d)
{
	
    var ret = false;
    var array_dimension = 0;
    var args = [];
    var i = 1; //all method descriptors begin with '('
   
    //I'm not going to apologize for this.  In fact, I wish Javascript had GOTO statements, so I could
    //make it even uglier.
    for(var i = 0; i<d.length; i++){
	var arg = {};
	switch(d[i]){

	case "[":
	    array_dimension++;
	    break;
	case "B":
	    arg.array_dimension = array_dimension;
	    array_dimension     = 0;
	    arg.type = "byte";
	    ret?args.return_value = arg:args.push(arg);
	    break;
	case "C":
	    arg.array_dimension = array_dimension;
	    array_dimension     = 0;
	    arg.type = "char";
	    ret?args.return_value = arg:args.push(arg);
	    break;
	case "D":
	    arg.array_dimension = array_dimension;
	    array_dimension     = 0;
	    arg.type = "double";
	    ret?args.return_value = arg:args.push(arg);
	    break;
	case "F":
	    arg.array_dimension = array_dimension;
	    array_dimension     = 0;
	    arg.type = "float";
	    ret?args.return_value = arg:args.push(arg);
	    break;
	case "I":
	    arg.array_dimension = array_dimension;
	    array_dimension     = 0;
	    arg.type = "int";
	    ret?args.return_value = arg:args.push(arg);
	    break;
	case "J":
	    arg.array_dimension = array_dimension;
	    array_dimension     = 0;
	    arg.type = "long";
	    ret?args.return_value = arg:args.push(arg);
	    break;
	case "L":
	    arg.array_dimension = array_dimension;
	    array_dimension     = 0;
	    arg.type = "reference";
	    arg.object = /L(.+?);/.exec(d.substr(i))[1];
	    i += arg.object.length+1;
	    ret?args.return_value = arg:args.push(arg);
	    break;
	case ")":	    
	    ret = true;
	    break;
	}
    }
    return args;
}

function getByteArray(filename_or_bytearray)
{
    var bytearray;
    if(filename_or_bytearray.type == "byteArray"){
	bytearray = filename_or_bytearray;
    } else{
	bytearray = [];

	var request = new XMLHttpRequest();
	request.overrideMimeType('text/plain; charset=x-user-defined'); // MIME voodoo from StackOverflow
	request.open("GET",filename_or_bytearray,false); //request is synchronous, i.e. blocking.
	request.send();
	
	for(i = 0; i < request.response.length; i++){
	    var byte = request.response.charCodeAt(i) & 0xFF;
	    bytearray.push(byte);
	}
    }

    bytearray.type = "byteArray";
    bytearray.i = 0;

    bytearray.readInt16 = function(){
	var int16 =  (this[this.i] << 8) + this[this.i+1];
	this.i+=2;
	return int16;
    }
    bytearray.readInt32 = function(){
	var int32 =  (this[this.i] << 24) + (this[this.i+1] << 16) + (this[this.i+2] << 8) + this[this.i+3];
	this.i+=4;
	return int32;
    }
    bytearray.readBytes = function(length){
	var slice = this.slice(this.i,this.i+length);
	slice.type = "byteArray";
	var bytearray = getByteArray(slice);
	this.i +=length;
	return bytearray;
    }

    bytearray.readByte = function(){
	var byte = this[this.i];
	this.i++;
	return byte;
    }
    bytearray.readString = function(){
	var length = this.readInt16();
	var string = String.fromCharCode.apply(this,this.slice(this.i,this.i+length));
	this.i += length;
	return string;
    }
    bytearray.setCursor = function(i){
	this.i = i;
    }
    return bytearray;
}




function loadConstantPool(bytes)
{
    bytes.setCursor(8)
    var constant_pool_count = bytes.readInt16();
    var constant_pool = [];
    var items_so_far = 0;
    var struct_size = 0;
    var i;
    constant_pool.push(null);
    for(;items_so_far < constant_pool_count - 1;items_so_far++)
    {
	var item = {};
	switch(bytes.readByte()){

	case CONSTANT_Class:
	    item.type			= "CONSTANT_Class_info";
	    item.name_index		= bytes.readInt16();
	    break;
	case CONSTANT_Fieldref:
	    item.type			= "CONSTANT_Fieldref_info";
	    item.class_index		= bytes.readInt16()
	    item.name_and_type_index	= bytes.readInt16();
	    struct_size			= 5;
	    break;
	case CONSTANT_Methodref:
	    item.type			= "CONSTANT_Methodref_info";
	    item.class_index		= bytes.readInt16();
	    item.name_and_type_index	= bytes.readInt16();
	    struct_size			= 5;
	    break;
	case CONSTANT_InterfaceMethodref:
	    item.type			= "CONSTANT_InterfaceMethodref_info";
	    item.class_index		= bytes.readInt16();
	    item.name_and_type_index	= bytes.readInt16();

	    break;
	case CONSTANT_String:
	    item.type			= "CONSTANT_String_info";
	    item.string_index		= bytes.readInt16();
	    break;
	case CONSTANT_Integer:
	    item.type			= "CONSTANT_Integer_info";
	    item.bytes			= bytes.readInt32()
	    break;
	case CONSTANT_Float:
	    item.type			= "CONSTANT_Float_info";
	    item.bytes			= bytes.readInt32();
	    break;
	case CONSTANT_Long:
	    item.type			= "CONSTANT_Long_info";
	    item.high_bytes		= bytes.readInt32();
	    item.low_bytes		= bytes.readInt32();
	    break;
	case CONSTANT_Double:
	    item.type			= "CONSTANT_Double_info";
	    item.bytes			= bytes.readInt32();
	    break;
	case CONSTANT_NameAndType:
	    item.type			= "CONSTANT_NameAndType_info"
	    item.name_index		= bytes.readInt16();
	    item.descriptor_index	= bytes.readInt16();
	    break;
	case CONSTANT_Utf8:
	    item.type			= "CONSTANT_Utf8_info";
	    item.bytes			= bytes.readString()
	    //note that this thoroughly mangles 16 bit characters.  Some of us just aren't ready
	    //for internationalization...
	    break;

	default:
	    alert("Invalid constant pool entry!");

	}
	constant_pool.push(item);
    }
    return constant_pool;
}

function loadAttributeArea(bytes,constant_pool)
{
    var attribute_area_info = {};

    attribute_area_info.access_flags = bytes.readInt16();
    attribute_area_info.this_class   = bytes.readInt16();
    attribute_area_info.super_class  = bytes.readInt16();

    attribute_area_info.interfaces_count = bytes.readInt16();

    
    attribute_area_info.interfaces = []
    var interfaces_so_far = 0;
    for(;interfaces_so_far != attribute_area_info.interfaces_count;){
	attribute_area_info.interfaces.push(bytes.readInt16());
    }
    
    function loadAttributes(bytes,attributes_count)
    {
	attributes = [];
	attributes.size = 0; //size in bytes of the entire attribute entry.
	var attributes_so_far = 0;
	while(attributes_so_far != attributes_count){
	    var attribute_size = 0;
	    var attribute = {};
	    attribute.attribute_name_index	= bytes.readInt16();
	    attribute.attribute_length    	= bytes.readInt32(); //size in bytes of the attribute itself.
	    attribute.info			= bytes.readBytes(attribute.attribute_length);

	    attribute.size = attribute.attribute_length + 6;
	    attributes.push(attribute);
	    attributes_so_far++;

	}

	return attributes;

    }
    function loadCodeAttribute(bytes){
	function loadExceptionTable(bytes,length){
	    var exception_table = [];
	    for(var i=0;i<length;i++){
		var exception = {};
		exception.start_pc	= bytes.readInt16();
		exception.end_pc	= bytes.readInt16();
		exception.handler_pc	= bytes.readInt16();
		exception.catch_type	= bytes.readInt16();

		exception_table.push(exception);
	    }
	    return exception_table;
	}

	var Code_attribute = {};
	//attribute_name_index has already been parsed
	Code_attribute.max_stack		= bytes.readInt16();
	Code_attribute.max_locals		= bytes.readInt16();
	Code_attribute.code_length		= bytes.readInt32();
	Code_attribute.code			= bytes.readBytes(Code_attribute.code_length);
	Code_attribute.exception_table_length	= bytes.readInt16();
	Code_attribute.exception_table		= loadExceptionTable(bytes,length);
	Code_attribute.attributes_count		= bytes.readInt16();
	Code_attribute.attributes		= loadAttributes(bytes,Code_attribute.attributes_count);
	return Code_attribute;
    }

    attribute_area_info.fields_count = bytes.readInt16(i); i +=2;
    attribute_area_info.fields = []
    var fields_so_far = 0;
    var field_size = 0;
    while(fields_so_far != attribute_area_info.fields_count){
	var field = {};
	field.access_flags	= bytes.readInt16();
	field.name_index	= bytes.readInt16();
	field.descriptor_index	= bytes.readInt16();
	field.attributes_count	= bytes.readInt16();
	field.attributes        = loadAttributes(bytes,field.attributes_count);

    }
    attribute_area_info.methods_count = bytes.readInt16(i); 
    var methods_so_far = 0;
    var methods = [];
    while(methods_so_far != attribute_area_info.methods_count){
	var method = {};
	method.access_flags	= bytes.readInt16();
	method.name_index	= bytes.readInt16();
	method.descriptor_index	= bytes.readInt16();
	method.attributes_count	= bytes.readInt16();
	method.attributes       = loadAttributes(bytes,method.attributes_count);
	methods_so_far++;
	methods.push(method);
    }
    for(var i =0; i< methods.length;i++){
	for(var j=0;j< methods[i].attributes.length;j++){
	    var attribute_name_index = methods[i].attributes[j].attribute_name_index;
	    var attribute_name = constant_pool[attribute_name_index].bytes;
	    if(attribute_name == "Code"){
		methods[i].attributes[j].info =	loadCodeAttribute(methods[i].attributes[j].info);
		methods[i].code = methods[i].attributes[j].info //for convenience
	    }
	}		
    }
    attribute_area_info.methods = methods;

    attribute_area_info.attributes_count = bytes.readInt16();
    attribute_area_info.attributes = loadAttributes(bytes,attribute_area_info.attributes_count);
    
    return attribute_area_info;
}


var invokespecial = 0xB7;
var invokevirtual = 0xB6;
var getstatic     = 0xB2;
var _return       = 0xB1;
var aload_0       = 0x2A;
var ldc           = 0x12;
var instructions = {};

instructions[ldc] = function(jvm,pool,code,frame)
{
    var index = code.readByte();
    var constant = pool[index];
    if(constant.type == "CONSTANT_Integer_info" || constant.type == "CONSTANT_Float_info"){
	frame.push(constant.bytes);
    }
    else if(constant.type == "CONSTANT_String_info"){
	stringClass.methods["_pushStaticString"](pool,index,frame)
	//String is not fully implemented yet! 03/25/12
    }else{
	throw "invalid ldc operand " + constant;
    }
    return NO_RETURN;
}
instructions[_return] = function(jvm,pool,code,frame)
{
    return RETURN;
}
instructions[getstatic] = function(jvm,pool,code,frame)
{
    var operand = code.readInt16();
    var owning_class = pool[pool[pool[operand].class_index].name_index].bytes
    var field_name  = pool[pool[pool[operand].name_and_type_index].name_index].bytes;
    var field = jvm.classes[owning_class].static_fields[field_name];
    frame.push(field);

    return NO_RETURN;
}
instructions[invokespecial] = function(jvm,pool,code,frame)
{
    var instruction = instructions[invokevirtual]
    return instruction(jvm,pool,code,frame); //I *hope* this works...
}
instructions[aload_0] = function(jvm,pool,code,frame)
{
    frame.push(frame.locals[0]);
    return NO_RETURN;
}
instructions[invokevirtual] = function(jvm,pool,code,frame){
    var operand = code.readInt16();
    var class_name = pool[pool[pool[operand].class_index].name_index].bytes;
    var method_name = pool[pool[pool[operand].name_and_type_index].name_index].bytes;

    var new_frame = [];
    new_frame.locals = [];
    var args_format = jvm.classes[class_name].methods[method_name].method_descriptor //dicey-- needs testing!

    for(var i=0;i<args_format.length;i++){
	if((args_format[i].type == "long" || args_format[i].type == "double") && args_format[i].array_dimension == 0){
	    new_frame.locals.push(frame.pop());
	}
	new_frame.locals.push(frame.pop());
    }
    var reference = frame.pop();
    new_frame.locals.push(reference);
    new_frame.locals.reverse();
    var returned_value = jvm.invoke(reference.class_name,method_name,new_frame);
    if(returned_value != undefined)
	frame.push(returned_value);
    return NO_RETURN;
}

var jvm = {
    classes:{},
    loadClass:function(constant_pool,attr)
    {
	var a_class = {};
	
	a_class.pool = constant_pool;
	a_class.instances = [];	
	a_class.methods   = {};
	for(var i=0;i<attr.methods_count;i++){
	    var method			= {}
	    var method_name		= constant_pool[attr.methods[i].name_index].bytes;
	    var raw_method_descriptor	= constant_pool[attr.methods[i].descriptor_index].bytes;
	    method.method_descriptor    = parseMethodDescriptor(raw_method_descriptor);
	    method.code			= attr.methods[i].code.code;
	    a_class.methods[method_name]= method;
	}
	
	var class_name = constant_pool[constant_pool[attr.this_class].name_index].bytes;
	this.classes[class_name] = a_class;
	this.classes[class_name].this_class = class_name;
	this.classes[class_name].super_class = constant_pool[constant_pool[attr.super_class].name_index].bytes;
	this.classes[class_name].access_flags = attr.access_flags;
	this.classes[class_name].static_fields = {}; //fields are created when class is initialized.
    },
    loadNativeClass:function(the_class)
    {
	var class_name = the_class.class_name;
	this.classes[class_name] = the_class;
    },
    invoke:function(class_name,method_name,frame)
    {
	var the_class = this.classes[class_name];
	if(the_class.is_native){
	    the_class.methods[method_name](this,null,null,frame);
	    return;
	}

	var the_method = the_class.methods[method_name];

	var status = NO_RETURN;
	while(status == NO_RETURN){
	    var instruction = instructions[the_method.code.readByte()]
	    status = instruction(this,the_class.pool,the_method.code,frame);
	}
	
    }
}
    
var objectClass = { 
    is_native:true,
    class_name:"java/lang/Object",
    methods:{},
    instances:Array(),
    static_fields:Array(),
    _init:function()
    {
	this.methods["<init>"] = function(jvm,pool,code,frame)
	{
	    //check if static fields are initialized-- if not, initialize them.
	    return;
	}
	this.methods["<init>"].method_descriptor = []; //()V
	this.methods["new"] = function(jvm,pool,code,frame){
	    var new_instance = {class_name:"java/lang/Object",instance:objectClass.instances.length};
	    objectClass.instances.push(new_instance);
	    return new_instance;
	}
    }
}
objectClass._init();

  
var  stringClass = {
    strings:{},
    methods:{},
    is_native:true,
    _init:function(){
	//must be declared in a method because of special character constraints
	/*
	this.methods["new"] = function(jvm,pool,code,frame)
	{
	    var new_instance = {class_name:"java/lang/String",instance:stringClass.instances.length}
	    stringClass.instances.push(new_instance)
	};
	*///blowing my mind a bit here, gonna keep it simple.
	this.methods["_pushStaticString"] = function(pool,index,frame)
	//methods beginning with '_' are called only by the runtime itself,and may be all wonky and stupid.
	{
	    var the_string = pool[pool[index].string_index].bytes;
	    if(stringClass.strings[the_string] != undefined){
		frame.push(stringClass.strings[the_string]);
	    }else{
		var new_string_ref = {class_name:"java/lang/String",
				      instance:stringClass.instances.length,
				      value:the_string};
		stringClass.strings[the_string] = new_string_ref;
		stringClass.instances.push(new_string_ref);
		frame.push(new_string_ref);
	    }
	    
	};
/*
	this.methods.["<init>"] = function (jvm,pool,code,frame)
	{
	    var string_ref = frame.pop();
	    if(strings[string_ref.instance] != undefined){
		var old_string_ref = stringClass.instances[stringClass.strings[string_ref.instance]]
		frame.push(old_string_ref);
	    }
	    else{
		var new_string_ref = {class_name:"java/lang/String",instance:stringClass.instances.length}
		stringClass.instances.push();
		stringClass.strings[new_string_ref.instance] = true;
		frame.push(new_string_ref);
	    }
	    return;
	};
*/
    },
    class_name:"java/lang/String",
    instances: [],
    static_fields:[],
    
    methods:{},

}
stringClass._init()


var systemClass = {
    is_native:true,
    static_fields:Array(),
    class_name:"java/lang/System",
    methods:{},
    _init:function()
    {
	this.methods["new"] = function(jvm,pool,code,frame)
	{
	    throw "java/lang/System cannot be instantiated!";
	}
	this.methods["<init>"] = function(jvm,pool,code,frame)
	{
	    throw "java/lang/System does not need initialization-- <init> should never be called!"
	}
	this.methods["println"] = function(jvm,pool,code,frame)
	{
	    var string_ref = frame.pop();
	    var string = stringClass.instances[string_ref.instance];
	}
	this.static_fields["out"] = {class_name:"java/io/PrintStream",instance:0}; //meaningless for our purposes, since only one output sink exists.
    },
    
}
systemClass._init();

var printClass = {
    is_native:true,
    static_fields:Array(),
    class_name:"java/io/PrintStream",
    methods:{},
    _init:function()
    {
	this.methods["new"] = function(jvm,pool,code,frame)
	{
	    throw "java/io/PrintStream cannot be instantiated!";
	}
	this.methods["<init>"] = function(jvm,pool,code,frame)
	{
	    throw "java/io/PrintStream does not need initialization-- <init> should never be called!"
	}
	this.methods["println"] = function(jvm,pool,code,frame)
	{
	    var string_ref = frame.locals[1];
	    alert(string_ref.value);
	}
	this.methods["println"].method_descriptor = parseMethodDescriptor("(Ljava/lang/String;)V");
	this.static_fields["out"] = null; //meaningless for our purposes, since only one output sink exists.
    },
    
}
printClass._init();

function main()
{
    var bytes = getByteArray("HelloWorld.class")
    var helloworld_pool = loadConstantPool(bytes)
    var helloworld_attr = loadAttributeArea(bytes,helloworld_pool);
    jvm.loadClass(helloworld_pool,helloworld_attr);
    jvm.loadNativeClass(objectClass);
    jvm.loadNativeClass(stringClass);
    jvm.loadNativeClass(systemClass);
    jvm.loadNativeClass(printClass);
    var frame = [];
    frame.locals = [];
    var object_ref = objectClass.methods["new"]();
    frame.locals.push(object_ref);
    jvm.invoke("HelloWorld","<init>",frame);
    frame.locals.push(object_ref); //<init> calls invokespecial, which pops object_ref
    jvm.invoke("HelloWorld","main",frame);
}