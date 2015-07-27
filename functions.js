// project 1, req. 2-d

var isVowel = function(ch) {
	var vowels = /[aeiou]/i ; 
	return vowels.test(ch) ;
}



// project 1, req. 2-e

var isConsonant = function(ch) {
	var vowels = /[^aeiou]/i ; 
	return vowels.test(ch) ;
}



// project 1, req. 2-a

var pluralizer = function(noun) {
	result="";
	//alert(noun[noun.length-1]);
	if(noun[noun.length-1]=="s" || noun[noun.length-1]== "x"){
		result=result+noun+"es";
		return result;
	}

	else if(noun[noun.length-1]=="y"){
		//alert("entered");
		noun=noun.slice(0,noun.length-1);
		result=result+noun+"ies"; 
		return result
	}

	else{
		result=result+noun+"s" ; 
		return result ; 
	}
}


// project 1, req 2-c

function reverseWords(string) {
	var result = string.split(' ');
	result = result.reverse();
	result = result.join(' ');
	return result;
	
}

// project 1, req 2-b

var countDivBy3 = function(n){ 
	var count = 0;
	for(var i = 1 ; i<n; i++){
		if(i % 3 == 0) 
			count++;
	}
		return count ;
		//i % 3; increasing the count when remainder is 0 
}

// project 1, req 2-f 
var countVowelPrefixWords = function(string) {
	var array = string.split(' ');
	var count = 0;
	for(var i = 0; i<array.length ; i++) {
		if(isVowel(array[i].charAt(0)) == true && isVowel(array[i].charAt(1)) == true)
			count++;
	}
	return count;
}










