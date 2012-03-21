function getByteArray(filename)
{
    var request = new XMLHttpRequest();
    request.overrideMimeType('text/plain; charset=x-user-defined'); // MIME voodoo from StackOverflow
    request.open("GET",filename,false); //request is synchronous, i.e. blocking.
    request.send();

    var bytearray = [];
    for(i = 0; i < request.response.length; i++){
	var byte = request.response.charCodeAt(i) & 0xFF;
	bytearray.push(byte);
    }
    return bytearray;
}