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



function getByteArray(filename)
{
    var request = new XMLHttpRequest();
    request.overrideMimeType('text/plain; charset=x-user-defined'); // MIME voodoo from StackOverflow
    request.open("GET",filename,false); //request is synchronous, i.e. blocking.
    request.send();

    var bytearray = [];
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
	var bytearray =  this.slice(this.i,this.i+length);
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
    for(i = 0; i < request.response.length; i++){
	var byte = request.response.charCodeAt(i) & 0xFF;
	bytearray.push(byte);
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
    constant_pool.method_area_start = i;
    return constant_pool;
}

function loadMethods(bytes,method_area_start)
{
    var method_area_info = {};
    var i = method_area_start;

    method_area_info.access_flags = bytes.readInt16();
    method_area_info.this_class   = bytes.readInt16(i); i+=2
    method_area_info.super_class  = bytes.readInt16(i); i+=2

    method_area_info.interfaces_count = bytes.readInt16(method_area_start+6); i+=2;

    
    method_area_info.interfaces = []
    var interfaces_so_far = 0;
    for(;interfaces_so_far != method_area_info.interfaces_count;i+=2){
	method_area_info.interfaces.push(bytes.readInt16(i));
    }
    
    function loadAttributes(attributes_count)
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

    method_area_info.fields_count = bytes.readInt16(i); i +=2;
    method_area_info.fields = []
    var fields_so_far = 0;
    var field_size = 0;
    while(fields_so_far != method_area_info.fields_count){
	var field = {};
	field.access_flags	= bytes.readInt16();
	field.name_index	= bytes.readInt16();
	field.descriptor_index	= bytes.readInt16();
	field.attributes_count	= bytes.readInt16();
	field.attributes        = loadAttributes(field.attributes_count);

    }
    method_area_info.methods_count = bytes.readInt16(i); 
    method_area_info.methods = []
    var methods_so_far = 0;
    while(methods_so_far != method_area_info.methods_count){
	var method = {};
	method.access_flags	= bytes.readInt16();
	method.name_index	= bytes.readInt16();
	method.descriptor_index	= bytes.readInt16();
	method.attributes_count	= bytes.readInt16();
	method.attributes       = loadAttributes(method.attributes_count);

	methods_so_far++;
	method_area_info.methods.push(method);
    }

    method_area_info.attributes_count = bytes.readInt16();
    method_area_info.attributes = loadAttributes(method_area_info.attributes_count);
    
    return method_area_info;
}


