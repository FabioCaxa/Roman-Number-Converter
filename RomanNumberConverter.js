function convertToRoman(num) {
    //Create an array for the Roman Numbers index
    let romans = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];
    //Create an array for Arabic Numbers index
    let arabics = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
    //Create an empty variable to return later
    let converted = "";

    //Loop through the Arabic numbers, one at a time
    for(let i = 0; i < arabics.length; i++){
        //While the number argument is greater or equal to the Arabic number
        while(num >= arabics[i]){
            //Add a Roman number index to the converted variable
            converted += romans[i];
            //For each Roman number added, subtract its Arabic correspondent value
            num -= arabics[i];
        }
    }
    //Return the reassigned converted variable
    return converted;
}

//Function calls
convertToRoman(16);
convertToRoman(29);
convertToRoman(36);
convertToRoman(649);
convertToRoman(798);
convertToRoman(1023);
convertToRoman(3999);