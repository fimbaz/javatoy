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
    for(i=10;items_so_far < constant_pool_count - 1;i += struct_size)
    {
	var item = {};
	switch(bytes[i]){
	case CONSTANT_Class:
	    item.type			= "CONSTANT_Class_info";
	    item.name_index		= bytes.Int16(i+1);
	    struct_size = 3;
	    break;
	case CONSTANT_Fieldref:
	    item.type			= "CONSTANT_Fieldref_info";
	    item.class_index		= bytes.Int16(i+1);
	    item.name_and_type_index	= bytes.Int16(i+3);
	    struct_size = 5;
	    break;
	case CONSTANT_Methodref:
	    item.type			= "CONSTANT_Methodref_info";
	    item.class_index		= bytes.Int16(i+1);
	    item.name_and_type_index	= bytes.Int16(i+3);
	    struct_size = 5;
	    break;
	case CONSTANT_InterfaceMethodref:
	    item.type = "CONSTANT_InterfaceMethodref_info";
	    item.class_index = bytes.Int16(i+1);
	    item.name_and_type_index = bytes.Int16(i+3);
	    struct_size = 5;
	    break;
	case CONSTANT_String:
	    item.type = "CONSTANT_String_info";
	    item.string_index = bytes.Int16(i+1);
	    struct_size = 3;
	    break;
	case CONSTANT_Integer:
	    item.type = "CONSTANT_Integer_info";
	    item.bytes = bytes.Int32(i+1)
	    struct_size = 5;
	    break;
	case CONSTANT_Float:
	    item.type = "CONSTANT_Float_info";
	    item.bytes = bytes.Int32(i+1);
	    struct_size = 5;
	    break;
	case CONSTANT_Long:
	    item.type = "CONSTANT_Long_info";
	    item.high_bytes = bytes.Int32(i+1);
	    item.low_bytes  = bytes.Int32(i+5);
	    struct_size = 9;
	    break;
	case CONSTANT_Double:
	    item.type = "CONSTANT_Double_info";
	    item.bytes = bytes.Int32(i+1);
	    struct_size = 9;
	    break;
	case CONSTANT_NameAndType:
	    item.type = "CONSTANT_NameAndType_info"
	    item.name_index = bytes.Int16(i+1);
	    item.descriptor_index = bytes.Int16(i+3);
	    struct_size = 5;
	    break;
	case CONSTANT_Utf8:
	    item.type = "CONSTANT_Utf8_info";
	    item.length = bytes.Int16(i+1);
	    item.bytes = String.fromCharCode.apply(this,bytes.slice(i+3,i+3+item.length));
	    struct_size = item.length + 3;
	    //note that this thoroughly mangles 16 bit characters.  Some of us just aren't ready
	    //for internationalization...
	    break;

	default:
	    alert("Invalid constant pool entry!");

	}
	items_so_far++;
	constant_pool.push(item);
    }
    return constant_pool;
}