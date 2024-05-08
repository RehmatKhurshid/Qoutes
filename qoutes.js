var arr=[
    {
        "qoute":"Out beyond ideas of wrongdoing and rightdoing, there is a field. I will meet you there.",
        "author":"Rumi"
    },
    {
        "qoute":"The unexamined life is not worth living.",
        "author":"Socrates"
    },
    {
        "qoute":"Everyone seems to have a clear idea of how other people should lead their lives, but none about his or her own.",
        "author":"Paulo Coelho"
    },
    {
        "qoute":"Religion is the state of being grasped by an ultimate concern.",
        "author":"Paul Tillich"
    },
    {
        "qoute":"To live is the rarest thing in the world. Most people exist, that is all.",
        "author":"Oscar Wilde"
    },
    {
        "qoute":"Self-awareness and self-love matter. Who we are is how we lead.",
        "author":"Brene Brown"
    },
    {
        "author":"eorge Eliot",
        "qoute":"It is never too late to be what you might have been."
    }
]
function randomSelector(){
    return Math.floor(Math.random() * arr.length);  //This line generates a random number using Math.random(), which returns a floating-point number between 0 (inclusive) and 1 (exclusive). The result is then multiplied by the length of the arr array, and Math.floor is used to round down to the nearest integer. This ensures that the random number is within the valid index range of the array.
}
function generateqoute(){
    var randomNumber= randomSelector(arr.length);
    document.getElementById("QouteOutput").innerHTML = '"' + arr[randomNumber].qoute + '"';  //This line sets the HTML content of the element with the id "QouteOutput" to a string containing the randomly selected quote from the arr array.
    document.getElementById("AuthorOutput").innerHTML = '-' + arr[randomNumber].author; 

}