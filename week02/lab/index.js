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
This result might be reasonable when we want to get the numeric value of a string without having to convert to a numeric type. Also, having in mind that javascript doesn't
require a data type when declaring variables, this behavior is really helpful to avoid unhandled exceptions.

*/

/*
TASKS:

Do some searching online to see if you can find a reasonable explanation for this specific phenomenon.
Do a validity check on any publications/comments you reference. Do they appear to be valid? Are they reliable?
Check reliability/validity by paying attention to the time stamp on the site, the author on the site - does the author seem reliable? - and the nature of the site itself (is it a useful JS site, or is it providing clickbait?). Are there any comments on the article/post - is there anyone who disagrees with the aritcle/post?
Compile at least two sources that support one another in explaining this phenomenon. Provide links and short summaries in your .js file (or write your answers in your .html file if you wish - use the tag to denote any code you include).
Find at least one different example of the same phenomenon above (hint: this phenomenon has something of a name, which you should be able to search for).

This phenomenon is called coercion and it happen when we try to convert the type of a value to another type (Alexey Samoshkin, 2018). In the given example, the conversion occurs when comparing false (boolean)
and 0 (int), where javascript converts the value '0' into 'false' and then compares the two values. In general, coercion refers to data type conversion, and it can be explicit (when the
value is intentionally converted) or implicit (when javascript does the conversion, for example, in a comparison).


Sources:

"JavaScript type coercion explained", by Alexey Samoshkin (Jan 17th, 2018)
https://www.freecodecamp.org/news/js-type-coercion-explained-27ba3d9a2839/

Alexey Samoshkin is a Software developer, from Kharkov, Ukraine, with many articles written in freecodecamp.org and hackernoon.com.
https://github.com/samoshkin
https://medium.com/@alexeysamoshkin


"You Don't Know JS: Types & Grammar", by Kyle Simpson (January 29th, 2015)
https://www.oreilly.com/library/view/you-dont-know/9781491905159/ch04.html

The link above is the online view from the 4th chapter of the book "You Don't Know JS: Types & Grammar" from the publisher web site.

--

Both links used are well founded and they come from a reliable source.
*/

//Another example could be:

console.log(null + 1);

//In this case, null is being converted to 0 by implicit coercion.
