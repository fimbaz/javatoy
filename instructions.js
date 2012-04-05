﻿var x = {};
for(var i = 0x0;i<0xFF;i++){
    x[i] = {};
}

x[0x32].opcode = "aaload" //		arrayref, index → value	load onto the stack a reference from an array
x[0x32].instr = function(jvm,pool,code,frame)
{
    var index = frame.pop()
    var array_ref = frame.pop();
    var item = array_ref.values[index];
    if(item == undefined){
	throw "Array index out of bounds -- aaload";
    }else{
	array_ref
    }
}

x[0x53].opcode = "aastore" //		arrayref, index, value →	store into a reference in an array
x[0x53].instr = function(jvm,pool,code,frame)
{
    throw this.opcode + " is not yet defined";
}

x[0x01].opcode = "aconst_null" //		→ null	push a null reference onto the stack
x[0x01].instr = function(jvm,pool,code,frame)
{
    throw this.opcode + " is not yet defined";
}

x[0x19].operands = 1;
x[0x19].opcode = "aload" //	1: index	→ objectref	load a reference onto the stack from a local variable #index
x[0x19].instr = function(jvm,pool,code,frame)
{
    throw this.opcode + " is not yet defined";
}

x[0x2a].opcode = "aload_0" //		→ objectref	load a reference onto the stack from local variable 0
x[0x2a].instr = function(jvm,pool,code,frame)
{
    throw this.opcode + " is not yet defined";
}

x[0x2b].opcode = "aload_1" //		→ objectref	load a reference onto the stack from local variable 1
x[0x2b].instr = function(jvm,pool,code,frame)
{
    throw this.opcode + " is not yet defined";
}

x[0x2c].opcode = "aload_2" //		→ objectref	load a reference onto the stack from local variable 2
x[0x2c].instr = function(jvm,pool,code,frame)
{
    throw this.opcode + " is not yet defined";
}

x[0x2d].opcode = "aload_3" //		→ objectref	load a reference onto the stack from local variable 3
x[0x2d].instr = function(jvm,pool,code,frame)
{
    throw this.opcode + " is not yet defined";
}

x[0xbd].operands = 2;
x[0xbd].opcode = "anewarray" //	2: indexbyte1, indexbyte2	count → arrayref	create a new array of references of length count and component type identified by the class reference index (indexbyte1 << 8 + indexbyte2) in the constant pool
x[0xbd].instr = function(jvm,pool,code,frame)
{
    throw this.opcode + " is not yet defined";

}
x[0xb0].opcode = "areturn" //		objectref → [empty]	return a reference from a method
x[0xb0].instr = function(jvm,pool,code,frame)
{
    throw this.opcode + " is not yet defined";

}
x[0xbe].opcode = "arraylength" //		arrayref → length	get the length of an array
x[0xbe].instr = function(jvm,pool,code,frame)
{
    throw this.opcode + " is not yet defined";

}

x[0x3a].operands = 1;
x[0x3a].opcode = "astore" //	1: index	objectref →	store a reference into a local variable #index
x[0x3a].instr = function(jvm,pool,code,frame)
{
    throw this.opcode + " is not yet defined";

}
x[0x4b].opcode = "astore_0" //		objectref →	store a reference into local variable 0
x[0x4b].instr = function(jvm,pool,code,frame)
{
    throw this.opcode + " is not yet defined";

}
x[0x4c].opcode = "astore_1" //		objectref →	store a reference into local variable 1
x[0x4c].instr = function(jvm,pool,code,frame)
{
    throw this.opcode + " is not yet defined";

}
x[0x4d].opcode = "astore_2" //		objectref →	store a reference into local variable 2
x[0x4d].instr = function(jvm,pool,code,frame)
{
    throw this.opcode + " is not yet defined";

}
x[0x4e].opcode = "astore_3" //		objectref →	store a reference into local variable 3
x[0x4e].instr = function(jvm,pool,code,frame)
{
    throw this.opcode + " is not yet defined";

}
x[0xbf].opcode = "athrow" //		objectref → [empty], objectref	throws an error or exception (notice that the rest of the stack is cleared, leaving only a reference to the Throwable)
x[0xbf].instr = function(jvm,pool,code,frame)
{
    throw this.opcode + " is not yet defined";

}
x[0x33].opcode = "baload" //		arrayref, index → value	load a byte or Boolean value from an array
x[0x33].instr = function(jvm,pool,code,frame)
{
    throw this.opcode + " is not yet defined";

}
x[0x54].opcode = "bastore" //		arrayref, index, value →	store a byte or Boolean value into an array
x[0x54].instr = function(jvm,pool,code,frame)
{
    throw this.opcode + " is not yet defined";

}
x[0x10].operands = 1;
x[0x10].opcode = "bipush" //	1: byte	→ value	push a byte onto the stack as an integer value
x[0x10].instr = function(jvm,pool,code,frame)
{
    throw this.opcode + " is not yet defined";

}
x[0x34].opcode = "caload" //		arrayref, index → value	load a char from an array
x[0x34].instr = function(jvm,pool,code,frame)
{
    throw this.opcode + " is not yet defined";

}
x[0x55].opcode = "castore" //		arrayref, index, value →	store a char into an array
x[0x55].instr = function(jvm,pool,code,frame)
{
    throw this.opcode + " is not yet defined";

}
x[0xc0].operands = 2;
x[0xc0].opcode = "checkcast" //	2: indexbyte1, indexbyte2	objectref → objectref	checks whether an objectref is of a certain type, the class reference of which is in the constant pool at index (indexbyte1 << 8 + indexbyte2)
x[0xc0].instr = function(jvm,pool,code,frame)
{
    throw this.opcode + " is not yet defined";

}
x[0x90].opcode = "d2f" //		value → result	convert a double to a float
x[0x90].instr = function(jvm,pool,code,frame)
{
    throw this.opcode + " is not yet defined";

}
x[0x8e].opcode = "d2i" //		value → result	convert a double to an int
x[0x8e].instr = function(jvm,pool,code,frame)
{
    throw this.opcode + " is not yet defined";

}
x[0x8f].opcode = "d2l" //		value → result	convert a double to a long
x[0x8f].instr = function(jvm,pool,code,frame)
{
    throw this.opcode + " is not yet defined";

}
x[0x63].opcode = "dadd" //		value1, value2 → result	add two doubles
x[0x63].instr = function(jvm,pool,code,frame)
{
    throw this.opcode + " is not yet defined";

}
x[0x31].opcode = "daload" //		arrayref, index → value	load a double from an array
x[0x31].instr = function(jvm,pool,code,frame)
{
    throw this.opcode + " is not yet defined";

}
x[0x52].opcode = "dastore" //		arrayref, index, value →	store a double into an array
x[0x52].instr = function(jvm,pool,code,frame)
{
    throw this.opcode + " is not yet defined";

}
x[0x98].opcode = "dcmpg" //		value1, value2 → result	compare two doubles
x[0x98].instr = function(jvm,pool,code,frame)
{
    throw this.opcode + " is not yet defined";

}
x[0x97].opcode = "dcmpl" //		value1, value2 → result	compare two doubles
x[0x97].instr = function(jvm,pool,code,frame)
{
    throw this.opcode + " is not yet defined";

}
x[0x0e].opcode = "dconst_0" //		→ 0.0	push the constant 0.0 onto the stack
x[0x0e].instr = function(jvm,pool,code,frame)
{
    throw this.opcode + " is not yet defined";

}
x[0x0f].opcode = "dconst_1" //		→ 1.0	push the constant 1.0 onto the stack
x[0x0f].instr = function(jvm,pool,code,frame)
{
    throw this.opcode + " is not yet defined";
}
x[0x6f].opcode = "ddiv" //		value1, value2 → result	divide two doubles
x[0x6f].instr = function(jvm,pool,code,frame)
{
    throw this.opcode + " is not yet defined";
}
x[0x18].operands = 1;
x[0x18].opcode = "dload" //	1: index	→ value	load a double value from a local variable #index
x[0x18].instr = function(jvm,pool,code,frame)
{
    throw this.opcode + " is not yet defined";

}
x[0x26].opcode = "dload_0" //		→ value	load a double from local variable 0
x[0x26].instr = function(jvm,pool,code,frame)
{
    throw this.opcode + " is not yet defined";

}
x[0x27].opcode = "dload_1" //		→ value	load a double from local variable 1
x[0x27].instr = function(jvm,pool,code,frame)
{
    throw this.opcode + " is not yet defined";

}
x[0x28].opcode = "dload_2" //		→ value	load a double from local variable 2
x[0x28].instr = function(jvm,pool,code,frame)
{
    throw this.opcode + " is not yet defined";
}
x[0x29].opcode = "dload_3" //		→ value	load a double from local variable 3
x[0x29].instr = function(jvm,pool,code,frame)
{
    throw this.opcode + " is not yet defined";

}
x[0x6b].opcode = "dmul" //		value1, value2 → result	multiply two doubles
x[0x6b].instr = function(jvm,pool,code,frame)
{
    throw this.opcode + " is not yet defined";

}
x[0x77].opcode = "dneg" //		value → result	negate a double
x[0x77].instr = function(jvm,pool,code,frame)
{
    throw this.opcode + " is not yet defined";

}
x[0x73].opcode = "drem" //		value1, value2 → result	get the remainder from a division between two doubles
x[0x73].instr = function(jvm,pool,code,frame)
{
    throw this.opcode + " is not yet defined";

}
x[0xaf].opcode = "dreturn" //		value → [empty]	return a double from a method
x[0xaf].instr = function(jvm,pool,code,frame)
{
    throw this.opcode + " is not yet defined";

}
x[0x39].operands = 1;
x[0x39].opcode = "dstore" //	1: index	value →	store a double value into a local variable #index
x[0x39].instr = function(jvm,pool,code,frame)
{
    throw this.opcode + " is not yet defined";

}
x[0x47].opcode = "dstore_0" //		value →	store a double into local variable 0
x[0x47].instr = function(jvm,pool,code,frame)
{
    throw this.opcode + " is not yet defined";

}
x[0x48].opcode = "dstore_1" //		value →	store a double into local variable 1
x[0x48].instr = function(jvm,pool,code,frame)
{
    throw this.opcode + " is not yet defined";

}
x[0x49].opcode = "dstore_2" //		value →	store a double into local variable 2
x[0x49].instr = function(jvm,pool,code,frame)
{
    throw this.opcode + " is not yet defined";

}
x[0x4a].opcode = "dstore_3" //		value →	store a double into local variable 3
x[0x4a].instr = function(jvm,pool,code,frame)
{
    throw this.opcode + " is not yet defined";

}
x[0x67].opcode = "dsub" //		value1, value2 → result	subtract a double from another
x[0x67].instr = function(jvm,pool,code,frame)
{
    throw this.opcode + " is not yet defined";

}
x[0x59].opcode = "dup" //		value → value, value	duplicate the value on top of the stack
x[0x59].instr = function(jvm,pool,code,frame)
{
    throw this.opcode + " is not yet defined";
}
x[0x5a].opcode = "dup_x1" //		value2, value1 → value1, value2, value1	insert a copy of the top value into the stack two values from the top. value1 and value2 must not be of the type double or long.
x[0x5a].instr = function(jvm,pool,code,frame)
{
    throw this.opcode + " is not yet defined";
}
x[0x5b].opcode = "dup_x2" //		value3, value2, value1 → value1, value3, value2, value1	insert a copy of the top value into the stack two (if value2 is double or long it takes up the entry of value3, too) or three values (if value2 is neither double nor long) from the top
x[0x5b].instr = function(jvm,pool,code,frame)
{

    throw this.opcode + " is not yet defined";
}
x[0x5c].opcode = "dup2" //		{value2, value1} → {value2, value1}, {value2, value1}	duplicate top two stack words (two values, if value1 is not double nor long; a single value, if value1 is double or long)
x[0x5c].instr = function(jvm,pool,code,frame)
{

    throw this.opcode + " is not yet defined";
}
x[0x5d].opcode = "dup2_x1" //		value3, {value2, value1} → {value2, value1}, value3, {value2, value1}	duplicate two words and insert beneath third word (see explanation above)
x[0x5d].instr = function(jvm,pool,code,frame)
{

    throw this.opcode + " is not yet defined";
}
x[0x5e].opcode = "dup2_x2" //		{value4, value3}, {value2, value1} → {value2, value1}, {value4, value3}, {value2, value1}	duplicate two words and insert beneath fourth word
x[0x5e].instr = function(jvm,pool,code,frame)
{
    throw this.opcode + " is not yet defined";
}
x[0x8d].opcode = "f2d" //		value → result	convert a float to a double
x[0x8d].instr = function(jvm,pool,code,frame)
{
    throw this.opcode + " is not yet defined";
}
x[0x8b].opcode = "f2i" //		value → result	convert a float to an int
x[0x8b].instr = function(jvm,pool,code,frame)
{

    throw this.opcode + " is not yet defined";
}
x[0x8c].opcode = "f2l" //		value → result	convert a float to a long
x[0x8c].instr = function(jvm,pool,code,frame)
{

    throw this.opcode + " is not yet defined";
}
x[0x62].opcode = "fadd" //		value1, value2 → result	add two floats
x[0x62].instr = function(jvm,pool,code,frame)
{

    throw this.opcode + " is not yet defined";
}
x[0x30].opcode = "faload" //		arrayref, index → value	load a float from an array
x[0x30].instr = function(jvm,pool,code,frame)
{

    throw this.opcode + " is not yet defined";
}
x[0x51].opcode = "fastore" //		arrayref, index, value →	store a float in an array
x[0x51].instr = function(jvm,pool,code,frame)
{

    throw this.opcode + " is not yet defined";
}
x[0x96].opcode = "fcmpg" //		value1, value2 → result	compare two floats
x[0x96].instr = function(jvm,pool,code,frame)
{

    throw this.opcode + " is not yet defined";
}
x[0x95].opcode = "fcmpl" //		value1, value2 → result	compare two floats
x[0x95].instr = function(jvm,pool,code,frame)
{

    throw this.opcode + " is not yet defined";
}
x[0x0b].opcode = "fconst_0" //		→ 0.0f	push 0.0f on the stack
x[0x0b].instr = function(jvm,pool,code,frame)
{

    throw this.opcode + " is not yet defined";
}
x[0x0c].opcode = "fconst_1" //		→ 1.0f	push 1.0f on the stack
x[0x0c].instr = function(jvm,pool,code,frame)
{

    throw this.opcode + " is not yet defined";
}
x[0x0d].opcode = "fconst_2" //		→ 2.0f	push 2.0f on the stack
x[0x0d].instr = function(jvm,pool,code,frame)
{

    throw this.opcode + " is not yet defined";
}
x[0x6e].opcode = "fdiv" //		value1, value2 → result	divide two floats
x[0x6e].instr = function(jvm,pool,code,frame)
{

    throw this.opcode + " is not yet defined";
}
x[0x17].operands = 1;
x[0x17].opcode = "fload" //	1: index	→ value	load a float value from a local variable #index
x[0x17].instr = function(jvm,pool,code,frame)
{

    throw this.opcode + " is not yet defined";
}
x[0x22].opcode = "fload_0" //		→ value	load a float value from local variable 0
x[0x22].instr = function(jvm,pool,code,frame)
{

    throw this.opcode + " is not yet defined";
}
x[0x23].opcode = "fload_1" //		→ value	load a float value from local variable 1
x[0x23].instr = function(jvm,pool,code,frame)
{

    throw this.opcode + " is not yet defined";
}
x[0x24].opcode = "fload_2" //		→ value	load a float value from local variable 2
x[0x24].instr = function(jvm,pool,code,frame)
{

    throw this.opcode + " is not yet defined";
}
x[0x25].opcode = "fload_3" //		→ value	load a float value from local variable 3
x[0x25].instr = function(jvm,pool,code,frame)
{

    throw this.opcode + " is not yet defined";
}
x[0x6a].opcode = "fmul" //		value1, value2 → result	multiply two floats
x[0x6a].instr = function(jvm,pool,code,frame)
{

    throw this.opcode + " is not yet defined";
}
x[0x76].opcode = "fneg" //		value → result	negate a float
x[0x76].instr = function(jvm,pool,code,frame)
{

    throw this.opcode + " is not yet defined";
}
x[0x72].opcode = "frem" //		value1, value2 → result	get the remainder from a division between two floats
x[0x72].instr = function(jvm,pool,code,frame)
{

    throw this.opcode + " is not yet defined";
}
x[0xae].opcode = "freturn" //		value → [empty]	return a float
x[0xae].instr = function(jvm,pool,code,frame)
{

    throw this.opcode + " is not yet defined";
}
x[0x38].operands = 1;
x[0x38].opcode = "fstore" //	1: index	value →	store a float value into a local variable #index
x[0x38].instr = function(jvm,pool,code,frame)
{

    throw this.opcode + " is not yet defined";
}
x[0x43].opcode = "fstore_0" //		value →	store a float value into local variable 0
x[0x43].instr = function(jvm,pool,code,frame)
{

    throw this.opcode + " is not yet defined";
}
x[0x44].opcode = "fstore_1" //		value →	store a float value into local variable 1
x[0x44].instr = function(jvm,pool,code,frame)
{

    throw this.opcode + " is not yet defined";
}
x[0x45].opcode = "fstore_2" //		value →	store a float value into local variable 2
x[0x45].instr = function(jvm,pool,code,frame)
{

    throw this.opcode + " is not yet defined";
}
x[0x46].opcode = "fstore_3" //		value →	store a float value into local variable 3
x[0x46].instr = function(jvm,pool,code,frame)
{

    throw this.opcode + " is not yet defined";
}
x[0x66].opcode = "fsub" //		value1, value2 → result	subtract two floats
x[0x66].instr = function(jvm,pool,code,frame)
{

    throw this.opcode + " is not yet defined";
}
x[0xb4].operands = 2;
x[0xb4].opcode = "getfield" //	2: index1, index2	objectref → value	get a field value of an object objectref, where the field is identified by field reference in the constant pool index (index1 << 8 + index2)
x[0xb4].instr = function(jvm,pool,code,frame)
{

    throw this.opcode + " is not yet defined";
}
x[0xb2].operands = 2;
x[0xb2].opcode = "getstatic" //	2: index1, index2	→ value	get a static field value of a class, where the field is identified by field reference in the constant pool index (index1 << 8 + index2)
x[0xb2].instr = function(jvm,pool,code,frame)
{

    throw this.opcode + " is not yet defined";
}
x[0xa7].operands = 2;
x[0xa7].opcode = "goto" //	2: branchbyte1, branchbyte2	[no change]	goes to another instruction at branchoffset (signed short constructed from unsigned bytes branchbyte1 << 8 + branchbyte2)
x[0xa7].instr = function(jvm,pool,code,frame)
{

    throw this.opcode + " is not yet defined";
}
x[0xc8].operands = 4;
x[0xc8].opcode = "goto_w" //	4: branchbyte1, branchbyte2, branchbyte3, branchbyte4	[no change]	goes to another instruction at branchoffset (signed int constructed from unsigned bytes branchbyte1 << 24 + branchbyte2 << 16 + branchbyte3 << 8 + branchbyte4)
x[0xc8].instr = function(jvm,pool,code,frame)

{
    throw this.opcode + " is not yet defined";
}
x[0x91].opcode = "i2b" //		value → result	convert an int into a byte
x[0x91].instr = function(jvm,pool,code,frame)

{
    throw this.opcode + " is not yet defined";
}
x[0x92].opcode = "i2c" //		value → result	convert an int into a character
x[0x92].instr = function(jvm,pool,code,frame)

{
    throw this.opcode + " is not yet defined";
}
x[0x87].opcode = "i2d" //		value → result	convert an int into a double
x[0x87].instr = function(jvm,pool,code,frame)

{
    throw this.opcode + " is not yet defined";
}
x[0x86].opcode = "i2f" //		value → result	convert an int into a float
x[0x86].instr = function(jvm,pool,code,frame)

{
    throw this.opcode + " is not yet defined";
}
x[0x85].opcode = "i2l" //		value → result	convert an int into a long
x[0x85].instr = function(jvm,pool,code,frame)

{
    throw this.opcode + " is not yet defined";
}
x[0x93].opcode = "i2s" //		value → result	convert an int into a short
x[0x93].instr = function(jvm,pool,code,frame)

{
    throw this.opcode + " is not yet defined";
}
x[0x60].opcode = "iadd" //		value1, value2 → result	add two ints
x[0x60].instr = function(jvm,pool,code,frame)

{
    throw this.opcode + " is not yet defined";
}
x[0x2e].opcode = "iaload" //		arrayref, index → value	load an int from an array
x[0x2e].instr = function(jvm,pool,code,frame)

{
    throw this.opcode + " is not yet defined";
}
x[0x7e].opcode = "iand" //		value1, value2 → result	perform a bitwise and on two integers
x[0x7e].instr = function(jvm,pool,code,frame)

{
    throw this.opcode + " is not yet defined";
}
x[0x4f].opcode = "iastore" //		arrayref, index, value →	store an int into an array
x[0x4f].instr = function(jvm,pool,code,frame)

{
    throw this.opcode + " is not yet defined";
}
x[0x02].opcode = "iconst_m1" //		→ -1	load the int value -1 onto the stack
x[0x02].instr = function(jvm,pool,code,frame)

{
    throw this.opcode + " is not yet defined";
}
x[0x03].opcode = "iconst_0" //		→ 0	load the int value 0 onto the stack
x[0x03].instr = function(jvm,pool,code,frame)

{
    throw this.opcode + " is not yet defined";
}
x[0x04].opcode = "iconst_1" //		→ 1	load the int value 1 onto the stack
x[0x04].instr = function(jvm,pool,code,frame)

{
    throw this.opcode + " is not yet defined";
}
x[0x05].opcode = "iconst_2" //		→ 2	load the int value 2 onto the stack
x[0x05].instr = function(jvm,pool,code,frame)

{
    throw this.opcode + " is not yet defined";
}
x[0x06].opcode = "iconst_3" //		→ 3	load the int value 3 onto the stack
x[0x06].instr = function(jvm,pool,code,frame)

{
    throw this.opcode + " is not yet defined";
}
x[0x07].opcode = "iconst_4" //		→ 4	load the int value 4 onto the stack
x[0x07].instr = function(jvm,pool,code,frame)

{
    throw this.opcode + " is not yet defined";
}
x[0x08].opcode = "iconst_5" //		→ 5	load the int value 5 onto the stack
x[0x08].instr = function(jvm,pool,code,frame)

{
    throw this.opcode + " is not yet defined";
}
x[0x6c].opcode = "idiv" //		value1, value2 → result	divide two integers
x[0x6c].instr = function(jvm,pool,code,frame)

{
    throw this.opcode + " is not yet defined";
}
x[0xa5].operands = 2;
x[0xa5].opcode = "if_acmpeq" //	2: branchbyte1, branchbyte2	value1, value2 →	if references are equal, branch to instruction at branchoffset (signed short constructed from unsigned bytes branchbyte1 << 8 + branchbyte2)
x[0xa5].instr = function(jvm,pool,code,frame)

{
    throw this.opcode + " is not yet defined";
}
x[0xa6].operands = 2;
x[0xa6].opcode = "if_acmpne" //	2: branchbyte1, branchbyte2	value1, value2 →	if references are not equal, branch to instruction at branchoffset (signed short constructed from unsigned bytes branchbyte1 << 8 + branchbyte2)
x[0xa6].instr = function(jvm,pool,code,frame)
{
    throw this.opcode + " is not yet defined";
}
x[0x9f].operands = 2;
x[0x9f].opcode = "if_icmpeq" //	2: branchbyte1, branchbyte2	value1, value2 →	if ints are equal, branch to instruction at branchoffset (signed short constructed from unsigned bytes branchbyte1 << 8 + branchbyte2)
x[0x9f].instr = function(jvm,pool,code,frame)
{
    throw this.opcode + " is not yet defined";
}
x[0xa0].operands = 2;
x[0xa0].opcode = "if_icmpne" //	2: branchbyte1, branchbyte2	value1, value2 →	if ints are not equal, branch to instruction at branchoffset (signed short constructed from unsigned bytes branchbyte1 << 8 + branchbyte2)
x[0xa0].instr = function(jvm,pool,code,frame)
{
    throw this.opcode + " is not yet defined";
}
x[0xa1].operands = 2;
x[0xa1].opcode = "if_icmplt" //	2: branchbyte1, branchbyte2	value1, value2 →	if value1 is less than value2, branch to instruction at branchoffset (signed short constructed from unsigned bytes branchbyte1 << 8 + branchbyte2)
x[0xa1].instr = function(jvm,pool,code,frame)
{
    throw this.opcode + " is not yet defined";
}
x[0xa2].operands = 2;
x[0xa2].opcode = "if_icmpge" //	2: branchbyte1, branchbyte2	value1, value2 →	if value1 is greater than or equal to value2, branch to instruction at branchoffset (signed short constructed from unsigned bytes branchbyte1 << 8 + branchbyte2)
x[0xa2].instr = function(jvm,pool,code,frame)
{
    throw this.opcode + " is not yet defined";
}
x[0xa3].operands = 2;
x[0xa3].opcode = "if_icmpgt" //	2: branchbyte1, branchbyte2	value1, value2 →	if value1 is greater than value2, branch to instruction at branchoffset (signed short constructed from unsigned bytes branchbyte1 << 8 + branchbyte2)
x[0xa3].instr = function(jvm,pool,code,frame)
{
    throw this.opcode + " is not yet defined";
}
x[0xa4].operands = 2;
x[0xa4].opcode = "if_icmple" //	2: branchbyte1, branchbyte2	value1, value2 →	if value1 is less than or equal to value2, branch to instruction at branchoffset (signed short constructed from unsigned bytes branchbyte1 << 8 + branchbyte2)
x[0xa4].instr = function(jvm,pool,code,frame)
{
    throw this.opcode + " is not yet defined";
}
x[0x99].operands = 2;
x[0x99].opcode = "ifeq" //	2: branchbyte1, branchbyte2	value →	if value is 0, branch to instruction at branchoffset (signed short constructed from unsigned bytes branchbyte1 << 8 + branchbyte2)
x[0x99].instr = function(jvm,pool,code,frame)
{
    throw this.opcode + " is not yet defined";
}
x[0x9a].operands = 2;
x[0x9a].opcode = "ifne" //	2: branchbyte1, branchbyte2	value →	if value is not 0, branch to instruction at branchoffset (signed short constructed from unsigned bytes branchbyte1 << 8 + branchbyte2)
x[0x9a].instr = function(jvm,pool,code,frame)
{
    throw this.opcode + " is not yet defined";
}
x[0x9b].operands = 2;
x[0x9b].opcode = "iflt" //	2: branchbyte1, branchbyte2	value →	if value is less than 0, branch to instruction at branchoffset (signed short constructed from unsigned bytes branchbyte1 << 8 + branchbyte2)
x[0x9b].instr = function(jvm,pool,code,frame)
{
    throw this.opcode + " is not yet defined";
}
x[0x9c].operands = 2;
x[0x9c].opcode = "ifge" //	2: branchbyte1, branchbyte2	value →	if value is greater than or equal to 0, branch to instruction at branchoffset (signed short constructed from unsigned bytes branchbyte1 << 8 + branchbyte2)
x[0x9c].instr = function(jvm,pool,code,frame)
{
    throw this.opcode + " is not yet defined";
}
x[0x9d].operands = 2;
x[0x9d].opcode = "ifgt" //	2: branchbyte1, branchbyte2	value →	if value is greater than 0, branch to instruction at branchoffset (signed short constructed from unsigned bytes branchbyte1 << 8 + branchbyte2)
x[0x9d].instr = function(jvm,pool,code,frame)
{
    throw this.opcode + " is not yet defined";
}
x[0x9e].operands = 2;
x[0x9e].opcode = "ifle" //	2: branchbyte1, branchbyte2	value →	if value is less than or equal to 0, branch to instruction at branchoffset (signed short constructed from unsigned bytes branchbyte1 << 8 + branchbyte2)
x[0x9e].instr = function(jvm,pool,code,frame)
{
    throw this.opcode + " is not yet defined";
}
x[0xc7].operands = 2;
x[0xc7].opcode = "ifnonnull" //	2: branchbyte1, branchbyte2	value →	if value is not null, branch to instruction at branchoffset (signed short constructed from unsigned bytes branchbyte1 << 8 + branchbyte2)
x[0xc7].instr = function(jvm,pool,code,frame)
{
    throw this.opcode + " is not yet defined";
}
x[0xc6].operands = 2;
x[0xc6].opcode = "ifnull" //	2: branchbyte1, branchbyte2	value →	if value is null, branch to instruction at branchoffset (signed short constructed from unsigned bytes branchbyte1 << 8 + branchbyte2)
x[0xc6].instr = function(jvm,pool,code,frame)
{
    throw this.opcode + " is not yet defined";
}
x[0x84].operands = 2;
x[0x84].opcode = "iinc" //	2: index, const	[No change]	increment local variable #index by signed byte const
x[0x84].instr = function(jvm,pool,code,frame)
{
    throw this.opcode + " is not yet defined";
}
x[0x15].operands = 1;
x[0x15].opcode = "iload" //	1: index	→ value	load an int value from a local variable #index
x[0x15].instr = function(jvm,pool,code,frame)
{
    throw this.opcode + " is not yet defined";
}
x[0x1a].opcode = "iload_0" //		→ value	load an int value from local variable 0
x[0x1a].instr = function(jvm,pool,code,frame)
{
    throw this.opcode + " is not yet defined";
}
x[0x1b].opcode = "iload_1" //		→ value	load an int value from local variable 1
x[0x1b].instr = function(jvm,pool,code,frame)
{
    throw this.opcode + " is not yet defined";
}
x[0x1c].opcode = "iload_2" //		→ value	load an int value from local variable 2
x[0x1c].instr = function(jvm,pool,code,frame)
{
    throw this.opcode + " is not yet defined";
}
x[0x1d].opcode = "iload_3" //		→ value	load an int value from local variable 3
x[0x1d].instr = function(jvm,pool,code,frame)
{
    throw this.opcode + " is not yet defined";
}
x[0x68].opcode = "imul" //		value1, value2 → result	multiply two integers
x[0x68].instr = function(jvm,pool,code,frame)
{
    throw this.opcode + " is not yet defined";
}
x[0x74].opcode = "ineg" //		value → result	negate int
x[0x74].instr = function(jvm,pool,code,frame)
{
    throw this.opcode + " is not yet defined";
}
x[0xc1].operands = 2;
x[0xc1].opcode = "instanceof" //	2: indexbyte1, indexbyte2	objectref → result	determines if an object objectref is of a given type, identified by class reference index in constant pool (indexbyte1 << 8 + indexbyte2)
x[0xc1].instr = function(jvm,pool,code,frame)
{
    throw this.opcode + " is not yet defined";
}
x[0xba].operands = 4;
x[0xba].opcode = "invokedynamic" //	4: indexbyte1, indexbyte2, 0, 0	[arg1, [arg2 ...]] →	invokes a dynamic method identified by method reference index in constant pool (indexbyte1 << 8 + indexbyte2)
x[0xba].instr = function(jvm,pool,code,frame)
{
    throw this.opcode + " is not yet defined";
}
x[0xb9].operands = 4;
x[0xb9].opcode = "invokeinterface" //	4: indexbyte1, indexbyte2, count, 0	objectref, [arg1, arg2, ...] →	invokes an interface method on object objectref, where the interface method is identified by method reference index in constant pool (indexbyte1 << 8 + indexbyte2)
x[0xb9].instr = function(jvm,pool,code,frame)
{
    throw this.opcode + " is not yet defined";
}
x[0xb7].operands = 2;
x[0xb7].opcode = "invokespecial" //	2: indexbyte1, indexbyte2	objectref, [arg1, arg2, ...] →	invoke instance method on object objectref, where the method is identified by method reference index in constant pool (indexbyte1 << 8 + indexbyte2)
x[0xb7].instr = function(jvm,pool,code,frame)
{
    throw this.opcode + " is not yet defined";
}
x[0xb8].operands = 2;
x[0xb8].opcode = "invokestatic" //	2: indexbyte1, indexbyte2	[arg1, arg2, ...] →	invoke a static method, where the method is identified by method reference index in constant pool (indexbyte1 << 8 + indexbyte2)
x[0xb8].instr = function(jvm,pool,code,frame)
{
    throw this.opcode + " is not yet defined";
}
x[0xb6].operands = 2;
x[0xb6].opcode = "invokevirtual" //	2: indexbyte1, indexbyte2	objectref, [arg1, arg2, ...] →	invoke virtual method on object objectref, where the method is identified by method reference index in constant pool (indexbyte1 << 8 + indexbyte2)
x[0xb6].instr = function(jvm,pool,code,frame)
{
    throw this.opcode + " is not yet defined";
}
x[0x80].opcode = "ior" //		value1, value2 → result	bitwise int or
x[0x80].instr = function(jvm,pool,code,frame)
{
    throw this.opcode + " is not yet defined";
}
x[0x70].opcode = "irem" //		value1, value2 → result	logical int remainder
x[0x70].instr = function(jvm,pool,code,frame)
{
    throw this.opcode + " is not yet defined";
}
x[0xac].opcode = "ireturn" //		value → [empty]	return an integer from a method
x[0xac].instr = function(jvm,pool,code,frame)
{
    throw this.opcode + " is not yet defined";
}
x[0x78].opcode = "ishl" //		value1, value2 → result	int shift left
x[0x78].instr = function(jvm,pool,code,frame)
{
    throw this.opcode + " is not yet defined";
}
x[0x7a].opcode = "ishr" //		value1, value2 → result	int arithmetic shift right
x[0x7a].instr = function(jvm,pool,code,frame)
{
    throw this.opcode + " is not yet defined";
}
x[0x36].operands = 1;
x[0x36].opcode = "istore" //	1: index	value →	store int value into variable #index
x[0x36].instr = function(jvm,pool,code,frame)
{
    throw this.opcode + " is not yet defined";
}
x[0x3b].opcode = "istore_0" //		value →	store int value into variable 0
x[0x3b].instr = function(jvm,pool,code,frame)
{
    throw this.opcode + " is not yet defined";
}
x[0x3c].opcode = "istore_1" //		value →	store int value into variable 1
x[0x3c].instr = function(jvm,pool,code,frame)
{
    throw this.opcode + " is not yet defined";
}
x[0x3d].opcode = "istore_2" //		value →	store int value into variable 2
x[0x3d].instr = function(jvm,pool,code,frame)
{
    throw this.opcode + " is not yet defined";
}
x[0x3e].opcode = "istore_3" //		value →	store int value into variable 3
x[0x3e].instr = function(jvm,pool,code,frame)
{
    throw this.opcode + " is not yet defined";
}
x[0x64].opcode = "isub" //		value1, value2 → result	int subtract
x[0x64].instr = function(jvm,pool,code,frame)
{
    throw this.opcode + " is not yet defined";
}
x[0x7c].opcode = "iushr" //		value1, value2 → result	int logical shift right
x[0x7c].instr = function(jvm,pool,code,frame)
{
    throw this.opcode + " is not yet defined";
}
x[0x82].opcode = "ixor" //		value1, value2 → result	int xor
x[0x82].instr = function(jvm,pool,code,frame)
{
    throw this.opcode + " is not yet defined";
}
x[0xa8].operands = 2;
x[0xa8].opcode = "jsr" //	2: branchbyte1, branchbyte2	→ address	jump to subroutine at branchoffset (signed short constructed from unsigned bytes branchbyte1 << 8 + branchbyte2) and place the return address on the stack
x[0xa8].instr = function(jvm,pool,code,frame)
{
    throw this.opcode + " is not yet defined";
}
x[0xc9].operands = 4;
x[0xc9].opcode = "jsr_w" //	4: branchbyte1, branchbyte2, branchbyte3, branchbyte4	→ address	jump to subroutine at branchoffset (signed int constructed from unsigned bytes branchbyte1 << 24 + branchbyte2 << 16 + branchbyte3 << 8 + branchbyte4) and place the return address on the stack
x[0xc9].instr = function(jvm,pool,code,frame)
{
    throw this.opcode + " is not yet defined";
}
x[0x8a].opcode = "l2d" //		value → result	convert a long to a double
x[0x8a].instr = function(jvm,pool,code,frame)
{
    throw this.opcode + " is not yet defined";
}
x[0x89].opcode = "l2f" //		value → result	convert a long to a float
x[0x89].instr = function(jvm,pool,code,frame)
{
    throw this.opcode + " is not yet defined";
}
x[0x88].opcode = "l2i" //		value → result	convert a long to a int
x[0x88].instr = function(jvm,pool,code,frame)
{
    throw this.opcode + " is not yet defined";
}
x[0x61].opcode = "ladd" //		value1, value2 → result	add two longs
x[0x61].instr = function(jvm,pool,code,frame)
{
    throw this.opcode + " is not yet defined";
}
x[0x2f].opcode = "laload" //		arrayref, index → value	load a long from an array
x[0x2f].instr = function(jvm,pool,code,frame)
{
    throw this.opcode + " is not yet defined";
}
x[0x7f].opcode = "land" //		value1, value2 → result	bitwise and of two longs
x[0x7f].instr = function(jvm,pool,code,frame)
{
    throw this.opcode + " is not yet defined";
}
x[0x50].opcode = "lastore" //		arrayref, index, value →	store a long to an array
x[0x50].instr = function(jvm,pool,code,frame)
{
    throw this.opcode + " is not yet defined";
}
x[0x94].opcode = "lcmp" //		value1, value2 → result	compare two longs values
x[0x94].instr = function(jvm,pool,code,frame)
{
    throw this.opcode + " is not yet defined";
}
x[0x09].opcode = "lconst_0" //		→ 0L	push the long 0 onto the stack
x[0x09].instr = function(jvm,pool,code,frame)
{
    throw this.opcode + " is not yet defined";
}
x[0x0a].opcode = "lconst_1" //		→ 1L	push the long 1 onto the stack
x[0x0a].instr = function(jvm,pool,code,frame)
{
    throw this.opcode + " is not yet defined";
}
x[0x12].operands = 1;
x[0x12].opcode = "ldc" //	1: index	→ value	push a constant #index from a constant pool (String, int or float) onto the stack
x[0x12].instr = function(jvm,pool,code,frame)
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
x[0x13].operands = 2;
x[0x13].opcode = "ldc_w" //	2: indexbyte1, indexbyte2	→ value	push a constant #index from a constant pool (String, int or float) onto the stack (wide index is constructed as indexbyte1 << 8 + indexbyte2)
x[0x13].instr = function(jvm,pool,code,frame)
{
    throw this.opcode + " is not yet defined";
}
x[0x14].operands = 2;
x[0x14].opcode = "ldc2_w" //	2: indexbyte1, indexbyte2	→ value	push a constant #index from a constant pool (double or long) onto the stack (wide index is constructed as indexbyte1 << 8 + indexbyte2)
x[0x14].instr = function(jvm,pool,code,frame)
{
    throw this.opcode + " is not yet defined";
}
x[0x6d].opcode = "ldiv" //		value1, value2 → result	divide two longs
x[0x6d].instr = function(jvm,pool,code,frame)
{
    throw this.opcode + " is not yet defined";
}
x[0x16].operands = 1;
x[0x16].opcode = "lload" //	1: index	→ value	load a long value from a local variable #index
x[0x16].instr = function(jvm,pool,code,frame)
{
    throw this.opcode + " is not yet defined";
}
x[0x1e].opcode = "lload_0" //		→ value	load a long value from a local variable 0
x[0x1e].instr = function(jvm,pool,code,frame)
{
    throw this.opcode + " is not yet defined";
}
x[0x1f].opcode = "lload_1" //		→ value	load a long value from a local variable 1
x[0x1f].instr = function(jvm,pool,code,frame)
{
    throw this.opcode + " is not yet defined";
}
x[0x20].opcode = "lload_2" //		→ value	load a long value from a local variable 2
x[0x20].instr = function(jvm,pool,code,frame)
{
    throw this.opcode + " is not yet defined";
}
x[0x21].opcode = "lload_3" //		→ value	load a long value from a local variable 3
x[0x21].instr = function(jvm,pool,code,frame)
{
    throw this.opcode + " is not yet defined";
}
x[0x69].opcode = "lmul" //		value1, value2 → result	multiply two longs
x[0x69].instr = function(jvm,pool,code,frame)
{
    throw this.opcode + " is not yet defined";
}
x[0x75].opcode = "lneg" //		value → result	negate a long
x[0x75].instr = function(jvm,pool,code,frame)
{
    throw this.opcode + " is not yet defined";
}
x[0xab].operands = "tricky"
x[0xab].opcode = "lookupswitch" //	4+: <0-3 bytes padding>, defaultbyte1, defaultbyte2, defaultbyte3, defaultbyte4, npairs1, npairs2, npairs3, npairs4, match-offset pairs...	key →	a target address is looked up from a table using a key and execution continues from the instruction at that address
x[0xab].instr = function(jvm,pool,code,frame)
{
    throw this.opcode + " is not yet defined";
}
x[0x81].opcode = "lor" //		value1, value2 → result	bitwise or of two longs
x[0x81].instr = function(jvm,pool,code,frame)
{
    throw this.opcode + " is not yet defined";
}
x[0x71].opcode = "lrem" //		value1, value2 → result	remainder of division of two longs
x[0x71].instr = function(jvm,pool,code,frame)
{
    throw this.opcode + " is not yet defined";
}
x[0xad].opcode = "lreturn" //		value → [empty]	return a long value
x[0xad].instr = function(jvm,pool,code,frame)
{
    throw this.opcode + " is not yet defined";
}
x[0x79].opcode = "lshl" //		value1, value2 → result	bitwise shift left of a long value1 by value2 positions
x[0x79].instr = function(jvm,pool,code,frame)
{
    throw this.opcode + " is not yet defined";
}
x[0x7b].opcode = "lshr" //		value1, value2 → result	bitwise shift right of a long value1 by value2 positions
x[0x7b].instr = function(jvm,pool,code,frame)
{
    throw this.opcode + " is not yet defined";
}
x[0x37].operands = 1;
x[0x37].opcode = "lstore" //	1: index	value →	store a long value in a local variable #index
x[0x37].instr = function(jvm,pool,code,frame)
{
    throw this.opcode + " is not yet defined";
}
x[0x3f].opcode = "lstore_0" //		value →	store a long value in a local variable 0
x[0x3f].instr = function(jvm,pool,code,frame)
{
    throw this.opcode + " is not yet defined";
}
x[0x40].opcode = "lstore_1" //		value →	store a long value in a local variable 1
x[0x40].instr = function(jvm,pool,code,frame)
{
    throw this.opcode + " is not yet defined";
}
x[0x41].opcode = "lstore_2" //		value →	store a long value in a local variable 2
x[0x41].instr = function(jvm,pool,code,frame)
{
    throw this.opcode + " is not yet defined";
}
x[0x42].opcode = "lstore_3" //		value →	store a long value in a local variable 3
x[0x42].instr = function(jvm,pool,code,frame)
{
    throw this.opcode + " is not yet defined";
}
x[0x65].opcode = "lsub" //		value1, value2 → result	subtract two longs
x[0x65].instr = function(jvm,pool,code,frame)
{
    throw this.opcode + " is not yet defined";
}
x[0x7d].opcode = "lushr" //		value1, value2 → result	bitwise shift right of a long value1 by value2 positions, unsigned
x[0x7d].instr = function(jvm,pool,code,frame)
{
    throw this.opcode + " is not yet defined";
}
x[0x83].opcode = "lxor" //		value1, value2 → result	bitwise exclusive or of two longs
x[0x83].instr = function(jvm,pool,code,frame)
{
    throw this.opcode + " is not yet defined";
}
x[0xc2].opcode = "monitorenter" //		objectref →	enter monitor for object ("grab the lock" - start of synchronized() section)
x[0xc2].instr = function(jvm,pool,code,frame)
{
    throw this.opcode + " is not yet defined";
}
x[0xc3].opcode = "monitorexit" //		objectref →	exit monitor for object ("release the lock" - end of synchronized() section)
x[0xc3].instr = function(jvm,pool,code,frame)
{
    throw this.opcode + " is not yet defined";
}
x[0xc5].operands = 3;
x[0xc5].opcode = "multianewarray" //	3: indexbyte1, indexbyte2, dimensions	count1, [count2,...] → arrayref	create a new array of dimensions dimensions with elements of type identified by class reference in constant pool index (indexbyte1 << 8 + indexbyte2); the sizes of each dimension is identified by count1, [count2, etc.]
x[0xc5].instr = function(jvm,pool,code,frame)
{
    throw this.opcode + " is not yet defined";
}
x[0xbb].operands = 2;
x[0xbb].opcode = "new" //	2: indexbyte1, indexbyte2	→ objectref	create new object of type identified by class reference in constant pool index (indexbyte1 << 8 + indexbyte2)
x[0xbb].instr = function(jvm,pool,code,frame)
{
    throw this.opcode + " is not yet defined";
}
x[0xbc].operands = 1;
x[0xbc].opcode = "newarray" //	1: atype	count → arrayref	create new array with count elements of primitive type identified by atype
x[0xbc].instr = function(jvm,pool,code,frame)
{
    throw this.opcode + " is not yet defined";
}
x[0x00].opcode = "nop" //		[No change]	perform no operation
x[0x00].instr = function(jvm,pool,code,frame)
{
    throw this.opcode + " is not yet defined";
}
x[0x57].opcode = "pop" //		value →	discard the top value on the stack
x[0x57].instr = function(jvm,pool,code,frame)
{
    throw this.opcode + " is not yet defined";
}
x[0x58].opcode = "pop2" //		{value2, value1} →	discard the top two values on the stack (or one value, if it is a double or long)
x[0x58].instr = function(jvm,pool,code,frame)
{
    throw this.opcode + " is not yet defined";
}
x[0xb5].operands = 2;
x[0xb5].opcode = "putfield" //	2: indexbyte1, indexbyte2	objectref, value →	set field to value in an object objectref, where the field is identified by a field reference index in constant pool (indexbyte1 << 8 + indexbyte2)
x[0xb5].instr = function(jvm,pool,code,frame)
{
    throw this.opcode + " is not yet defined";
}
x[0xb3].operands = 2;
x[0xb3].opcode = "putstatic" //	2: indexbyte1, indexbyte2	value →	set static field to value in a class, where the field is identified by a field reference index in constant pool (indexbyte1 << 8 + indexbyte2)
x[0xb3].instr = function(jvm,pool,code,frame)
{
    throw this.opcode + " is not yet defined";
}
x[0xa9].operands = 1;
x[0xa9].opcode = "ret" //	1: index	[No change]	continue execution from address taken from a local variable #index (the asymmetry with jsr is intentional)
x[0xa9].instr = function(jvm,pool,code,frame)
{
    throw this.opcode + " is not yet defined";
}
x[0xb1].opcode = "return" //		→ [empty]	return void from method
x[0xb1].instr = function(jvm,pool,code,frame)
{
    throw this.opcode + " is not yet defined";
}
x[0x35].opcode = "saload" //		arrayref, index → value	load short from array
x[0x35].instr = function(jvm,pool,code,frame)
{
    throw this.opcode + " is not yet defined";
}
x[0x56].opcode = "sastore" //		arrayref, index, value →	store short to array
x[0x56].instr = function(jvm,pool,code,frame)
{
    throw this.opcode + " is not yet defined";
}
x[0x11].operands = 2;
x[0x11].opcode = "sipush" //	2: byte1, byte2	→ value	push a short onto the stack
x[0x11].instr = function(jvm,pool,code,frame)
{
    throw this.opcode + " is not yet defined";
}
x[0x5f].opcode = "swap" //		value2, value1 → value1, value2	swaps two top words on the stack (note that value1 and value2 must not be double or long)
x[0x5f].instr = function(jvm,pool,code,frame)
{
    throw this.opcode + " is not yet defined";
}
x[0xaa].operands = "tricky";
x[0xaa].opcode = "tableswitch" //	4+: [0-3 bytes padding], defaultbyte1, defaultbyte2, defaultbyte3, defaultbyte4, lowbyte1, lowbyte2, lowbyte3, lowbyte4, highbyte1, highbyte2, highbyte3, highbyte4, jump offsets...	index →	continue execution from an address in the table at offset index
x[0xaa].instr = function(jvm,pool,code,frame)
{
    throw this.opcode + " is not yet defined";
}
x[0xc4].operands = "tricky";
x[0xc4].opcode = "wide" //	3/5: opcode, indexbyte1, indexbyte2
x[0xc4].instr = function(jvm,pool,code,frame)
{
    throw this.opcode + " is not yet defined";
}

x[0x84].opcode = "iinc"
x[0x84].instr = function(jvm,pool,code,frame)
{
    throw this.opcode + " is not yet defined";
}
x[0xca].opcode = "breakpoint" //			reserved for breakpoints in Java debuggers; should not appear in any class file
x[0xca].instr = function(jvm,pool,code,frame)
{
    throw this.opcode + " is not yet defined";
}
x[0xfe].opcode = "impdep1" //			reserved for implementation-dependent operations within debuggers; should not appear in any class file
x[0xfe].instr = function(jvm,pool,code,frame)
{
    throw this.opcode + " is not yet defined";
}
