/*----------------------------------------------------------
JavaScript Prototype: Method
Every object in JavaScript has a built-in property called "prototype." 
The prototype constructor is used to add new methods (functions) and properties to a JavaScript object. 
- If a method is constructed, then it will be available for the object. 
- If a property is constructed, then the object will be given the property and its value, as default.

In this Assignment, we use the prototype constructor to add new methods to the Array() object.
----------------------------------------------------------*/

// MAP //
Array.prototype.myMap = function(callbackFn) {
	let out_array = [];
	for (let i = 0; i < this.length; i++)
		out_array.push(callbackFn(this[i], i, this));
	return out_array;
};

// FILTER //
Array.prototype.myFilter = function(callbackFn) {
	let out_array = [];
	for (let i = 0; i < this.length; i++) {
		if (callbackFn(this[i], i, this))
			out_array.push(this[i]);
	}
	return out_array
};

// SOME //
Array.prototype.mySome = function(callbackFn) {
	for (let i = 0; i < this.length; i++)
		if (callbackFn(this[i], i, this))
			return true;
	return false;
};

// EVERY //
Array.prototype.myEvery = function(callbackFn) {
	for (let i = 0; i < this.length; i++)
		if (!callbackFn(this[i], i, this))
			return false;
	return true;
};

// REDUCE //
Array.prototype.myReduce = function(callbackFn) {
	try 
	{
		null.callbackFn(); //Check for empty array and empty values
	} 
	catch (e)
	{
		console.log(`${e.name}: "${e.message}"`);
	}

	let final_result = null;
	for (let i = 0; i < this.length ; i++)
		final_result = callbackFn(final_result, this[i], i, this)

	return final_result;
};

// INCLUDES //
Array.prototype.myIncludes = function(searchElement) {
	for (let i = 0; i < this.length; i++)
		if (this[i] === searchElement)
			return true;
	return false;
};

// INDEXOF //
Array.prototype.myIndexOf = function(searchElement) {
	for (let i = 0; i < this.length; i++)
		if (this[i] === searchElement)
			return i;
	return -1;
};

// LASTINDEXOF //
Array.prototype.myLastIndexOf = function(searchElement) {
	let last_index = -1;
	for (let i = 0; i < this.length; i++)
		if (this[i] === searchElement)
			last_index = i;
	return last_index;
};

// KEYS //
Object.myKeys = function(object) {
  // Place your code here.
};

// VALUES //
Object.myValues = function(object) {
  // Place your code here.
};
