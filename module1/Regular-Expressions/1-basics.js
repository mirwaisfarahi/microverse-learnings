// Using the Test Method: Regular expressions are used in programming languages to match parts of strings.
// If you want to find the word the in the string The dog chased the cat, you could use the following regular expression: /the/. 
//Notice that quote marks are not required within the regular expression.

//JavaScript has multiple ways to use regexes. One way to test a regex is using the .test() method. 
//The .test() method takes the regex, applies it to a string (which is placed inside the parentheses), and returns true or false if your pattern finds something or not.

const str = 'freecodecamp';
const regExp = /code/;
console.log(regExp.test(str)); // returns true

// Match Literal Strings:
let testStr = "Hello, my name is Kevin.";
let testRegex = /Kevin/;
console.log(testRegex.test(testStr)); // return true

let testRegex2 = /kevin/; // first letter lowercase
console.log(testRegex2.test(testStr)); // return false

// Match a Literal String with Different Possibilities: We can search for multiple patterns using the alternation or OR operator: |.
// Complete the regex petRegex to match the pets dog, cat, bird, or fish.
let petString = "James has a pet cat.";
let petRegex = /dog|cat|bird|fish/;
let result = petRegex.test(petString);

// Ignore Case While Matching: We can ignore case (uppercase and lowercase) while searching for a match in a string. This can be done using i flag.
// An example of using this flag is /ignorecase/i. This regex can match the strings ignorecase, igNoreCase, and IgnoreCase.
let myString = "freeCodeCamp";
let fccRegex = /freecodecamp/i;

// Extract Matches: We an also extract the actual matches you found with the .match() method.
const str2 = 'Hello World!';
const matching = /hello/i;
console.log(str2.match(matching));
//Here the first match would return ["Hello"] and the second would return ["expressions"].

//Find More Than the First Match: To search or extract a pattern more than once, you can use the g flag, called global flag.
let str3 = "Repeat, Repeat, Repeat";
let ourRegex = /Repeat/;
console.log(str3.match(ourRegex)); // return 0th index 'Repeat'

let ourRegex2 = /Repeat/gi;
console.log(str3.match(ourRegex2)); // returns [ 'Repeat', 'Repeat', 'Repeat' ]

// Match Anything with Wildcard Period: When we don't know about the exact character of our string that needs to be searched or it will be hard to find
// the misspelling words. In this case, the wildcard also called dot and period '.' will be used to find all matching words in a string or text.
let humStr = "I'll hum a song";
let hugStr = "Bear hug";
let huRegex = /hu./; //use of wirldcard character
console.log(huRegex.test(humStr)); // return true
console.log(huRegex.test(hugStr)); // return true

// Match Single Character with Multiple Possibilities: // and dot /./ charachter are the extreme of regular expressions where,
// one finds exact matches and the other matches everything. To search for a literal pattern with some flexibility with character classes, we use
// brackets []. For example, you want to match bag, big, and bug but not bog. You can create the regex /b[aiu]g/.
let bigStr = "big";
let bagStr = "bag";
let bugStr = "bug";
let bogStr = "bog";

let matchStr = /b[aiu]g/g;
console.log(bigStr.match(matchStr)) // return [ 'big' ]
console.log(bigStr.match(bogStr)) //  return null

//Another Example: Use a character class with vowels (a, e, i, o, u) in your regex vowelRegex to find all the vowels in the string quoteSample.
//Note: Be sure to match both upper- and lowercase vowels.
let quoteSample2 = "Beware of bugs in the above code; I have only proved it correct, not tried it.";
let vowelRegex = /[aeiou]/gi;
let result3 = quoteSample2.match(vowelRegex);

// Match Letters of the Alphabet: Sometimes we may need to search for many characters in a string but that's a lot of typing when you need to match a large range of characters
// Inside a character set, you can define a range of characters to match using a hyphen character: -.
// For example, to match lowercase letters a through e you would use [a-e].
let catStr = "cat";
let batStr = "bat";
let matStr = "mat";

let matchRange = /[a-e]at/gi;
catStr.match(matchRange);
batStr.match(matchRange);
matStr.match(matchRange);
//In order, the three match calls would return the values ["cat"], ["bat"], and null.

// Match Numbers and Letters of the Alphabet: Using the hyphen (-) to match a range of characters is not limited to letters. 
// It also works to match a range of numbers. For example, /[0-5]/ matches any number between 0 and 5, including the 0 and 5.
let jennyStr = "Jenny8675309";
let strRegix = /[a-z0-9]/ig;
console.log(jennyStr.match(strRegix)); // return [ 'J', 'e', 'n', 'n', 'y', '8', '6', '7', '5', '3', '0', '9' ]

// Match Single Characters Not Specified: Negated character set used when we sit not match, use a caret character (^) after the opening bracket and before the characters you do not want to match.
// For example, /[^aeiou]/gi matches all characters that are not a vowel.

//Example: Create a single regex that matches all characters that are not a number or a vowel. Remember to include the appropriate flags in the regex.
let quoteSample = "3 blind mice.";
let myRegex = /[^0-9aeiou]/gi;
let result2 = quoteSample.match(myRegex);

// Match Characters that Occur One or More Times: Use + character.
// For example, /a+/g would find one match in abc and return ["a"]. Because of the +, it would also find a single match in aabc and return ["aa"].
// If it were instead checking the string abab, it would find two matches and return ["a", "a"] because the a characters are not in a row - there is a b between them. 
// Finally, since there is no a in the string bcd, it wouldn't find a match.

// Match Characters that Occur Zero or More Times: Use * character
let soccerWord = "gooooooooal!";
let gPhrase = "gut feeling";
let oPhrase = "over the moon";
let goRegex = /go*/;
soccerWord.match(goRegex);
gPhrase.match(goRegex);
oPhrase.match(goRegex);

//In order, the three match calls would return the values ["goooooooo"], ["g"], and null.