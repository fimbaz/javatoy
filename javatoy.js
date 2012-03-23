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
    bytearray.Int16 = function(i){
	return (this[i] << 8) + this[i+1];
    }
    bytearray.Int32 = function(i){
	return (this[i] << 24) + (this[i+1] << 16) + (this[i+2] << 8) + this[i+3];
    }

    for(i = 0; i < request.response.length; i++){
	var byte = request.response.charCodeAt(i) & 0xFF;
	bytearray.push(byte);
    }
    return bytearray;
}




function loadConstantPool(bytes)
{
    var constant_pool_count = bytes.Int16(8);
    var constant_pool = [];
    var items_so_far = 0;
    var struct_size = 0;
    var i;
    for(i=10;items_so_far < constant_pool_count - 1;i += struct_size)
    {
	var item = {};
	switch(bytes[i]){

	case CONSTANT_Class:
	    item.type			= "CONSTANT_Class_info";
	    item.name_index		= bytes.Int16(i+1);
	    struct_size			= 3;
	    break;
	case CONSTANT_Fieldref:
	    item.type			= "CONSTANT_Fieldref_info";
	    item.class_index		= bytes.Int16(i+1);
	    item.name_and_type_index	= bytes.Int16(i+3);
	    struct_size			= 5;
	    break;
	case CONSTANT_Methodref:
	    item.type			= "CONSTANT_Methodref_info";
	    item.class_index		= bytes.Int16(i+1);
	    item.name_and_type_index	= bytes.Int16(i+3);
	    struct_size			= 5;
	    break;
	case CONSTANT_InterfaceMethodref:
	    item.type			= "CONSTANT_InterfaceMethodref_info";
	    item.class_index		= bytes.Int16(i+1);
	    item.name_and_type_index	= bytes.Int16(i+3);
	    struct_size			= 5;
	    break;
	case CONSTANT_String:
	    item.type			= "CONSTANT_String_info";
	    item.string_index		= bytes.Int16(i+1);
	    struct_size			= 3;
	    break;
	case CONSTANT_Integer:
	    item.type			= "CONSTANT_Integer_info";
	    item.bytes			= bytes.Int32(i+1)
	    struct_size			= 5;
	    break;
	case CONSTANT_Float:
	    item.type			= "CONSTANT_Float_info";
	    item.bytes			= bytes.Int32(i+1);
	    struct_size			= 5;
	    break;
	case CONSTANT_Long:
	    item.type			= "CONSTANT_Long_info";
	    item.high_bytes		= bytes.Int32(i+1);
	    item.low_bytes		= bytes.Int32(i+5);
	    struct_size			= 9;
	    break;
	case CONSTANT_Double:
	    item.type			= "CONSTANT_Double_info";
	    item.bytes			= bytes.Int32(i+1);
	    struct_size			= 9;
	    break;
	case CONSTANT_NameAndType:
	    item.type			= "CONSTANT_NameAndType_info"
	    item.name_index		= bytes.Int16(i+1);
	    item.descriptor_index	= bytes.Int16(i+3);
	    struct_size			= 5;
	    break;
	case CONSTANT_Utf8:
	    item.type			= "CONSTANT_Utf8_info";
	    item.length			= bytes.Int16(i+1);
	    item.bytes			= String.fromCharCode.apply(this,bytes.slice(i+3,i+3+item.length));
	    struct_size			= item.length + 3;
	    //note that this thoroughly mangles 16 bit characters.  Some of us just aren't ready
	    //for internationalization...
	    break;

	default:
	    alert("Invalid constant pool entry!");

	}
	items_so_far++;
	constant_pool.push(item);
    }
    constant_pool.method_area_start = i;
    return constant_pool;
}

function loadMethods(bytes,method_area_start)
{
    var method_area_info = {};
    var i = method_area_start;

    method_area_info.access_flags = bytes.Int16(i); i+=2
    method_area_info.this_class   = bytes.Int16(i); i+=2
    method_area_info.super_class  = bytes.Int16(i); i+=2

    method_area_info.interfaces_count = bytes.Int16(method_area_start+6); i+=2;

    
    method_area_info.interfaces = []
    var interfaces_so_far = 0;
    for(;interfaces_so_far != method_area_info.interfaces_count;i+=2){
	method_area_info.interfaces.push(bytes.Int16(i));
    }
    
    function loadAttributes(attributes_count)
    {
	attributes = [];
	attributes.size = 0; //size in bytes of the entire attribute entry.
	var attributes_so_far = 0;
	for(;
	    attributes_so_far != attributes_count;){
	    var attribute_size = 0;
	    var attribute = {};
	    attribute.attribute_name_index	= bytes.Int16(i); i+=2;
	    attribute.attribute_length    	= bytes.Int32(i); i+=4; //size in bytes of the attribute itself.
	    attribute.info			= bytes.slice(i,i+attribute.attribute_length); i += attribute.attribute_length;

	    attribute.size = attribute.attribute_length + 6;
	    attributes.push(attribute);
	    attributes_so_far++;

	}

	return attributes;

    }

    method_area_info.fields_count = bytes.Int16(i); i +=2;
    method_area_info.fields = []
    var fields_so_far = 0;
    var field_size = 0;
    for(;fields_so_far != method_area_info.fields_count;i+=field_size){
	var field = {};
	field.access_flags	= bytes.Int16(i);
	field.name_index	= bytes.Int16(i+2);
	field.descriptor_index	= bytes.Int16(i+4);
	field.attributes_count	= bytes.Int16(i+8);
	field.attributes        = loadAttributes(field.attributes_count);

    }
    method_area_info.methods_count = bytes.Int16(i); i +=2;
    method_area_info.methods = []
    var methods_so_far = 0;
    for(;methods_so_far != method_area_info.methods_count;){
	var method = {};
	method.access_flags	= bytes.Int16(i); i+=2;
	method.name_index	= bytes.Int16(i); i+=2;
	method.descriptor_index	= bytes.Int16(i); i+=2;
	method.attributes_count	= bytes.Int16(i); i+=2;
	method.attributes       = loadAttributes(method.attributes_count);

	methods_so_far++;
	method_area_info.methods.push(method);
    }

    method_area_info.attributes_count = bytes.Int16(i); i+=2;
    method_area_info.attributes = loadAttributes(method_area_info.attributes_count);
    
    return method_area_info;
}


