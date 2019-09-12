console.log(false == 0);    //true
console.log(false === 0);   //false

/*QUESTIONS:

1.- Without doing any searching online, what does your intuition tell you about this 'phenomenon' above? 
Is this what you expected from looking at the code? Why or why not?

As far as I know right now, without any research, I know that the '===' operator means identical, while the '==' is used just to compare two values.
So, the boolean value for '0' is usually 'false', so it makes sense to me that the first statement is true, because they are equivalente.
With those same concepts in mind, it makes sense to me that the output is false, because 'false' is not identical to '0', considering that 
one is a boolean type and the other one a number, even though both may represent a 'false' value depending in the context.


2.- What do you think the developers of JavaScript intended here? In what case might the result above seem reasonable?

I think they did it that way to make sure we are using the same type of value when comparing with the '===' operator, while being able to compare
different types of value with the same 'meaning' using the '==' operator.
This result might be reasonable if we want to 

*/

/*
TASKS:

Do some searching online to see if you can find a reasonable explanation for this specific phenomenon.
Do a validity check on any publications/comments you reference. Do they appear to be valid? Are they reliable?
Check reliability/validity by paying attention to the time stamp on the site, the author on the site - does the author seem reliable? - and the nature of the site itself (is it a useful JS site, or is it providing clickbait?). Are there any comments on the article/post - is there anyone who disagrees with the aritcle/post?
Compile at least two sources that support one another in explaining this phenomenon. Provide links and short summaries in your .js file (or write your answers in your .html file if you wish - use the tag to denote any code you include).
Find at least one different example of the same phenomenon above (hint: this phenomenon has something of a name, which you should be able to search for).

*/