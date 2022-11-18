document.querySelector("#generate").addEventListener("click", () => {
    generate();
});

generate = () => {
    var quotes = {
        
        "- Carl Sagan" :'"We live in a society exquisitely dependent on science and technology, in which hardly anyone knows anything about science and technology."', 
        "- Robert A. Heinlein" : '"Everything is theoretically impossible until it is done."',
        "- Isaac Asimov": '"The saddest aspect of life right now is that science gathers knowledge faster than society gathers wisdom."',
        "- Albert Einstein": '"If we knew what it was we were doing, it would not be called research, would it?"',
        "- David Eagleman": '"What you learn from a life in science is the vastness of our ignorance."',
        "-Albert Einstein": '"If a cluttered desk is a sign of a cluttered mind, of what, then, is an empty desk a sign?"',
        "- Nikola Tesla": '"Our virtues and our failures are inseparable, like force and matter. When they separate, man is no more."',
        "- Stephen Hawking": '"Science is not only a disciple of reason but also one of romance and passion."',
        "- Albert Einstein": '"We cannot solve problems with the same thinking we used to create them."',

    };
    var authors = Object.keys(quotes);
    var author = authors[Math.floor(Math.random() * authors.length)];
    var quote = quotes[author]
    document.getElementById("quote").innerHTML="abcd";
    document.querySelector("#quote").textContent = quote;
    document.querySelector("#author").textContent = author;

}
