$(document).ready(function() {
    generate();
    
    function generate() {
        var quotes = [];

        quotes.push({
            text: "Pride is not the opposite of shame, but its source. True humility is the only antidote to shame.",
            author: "General Iroh"
        });

        quotes.push({
            text: "It is important to draw wisdom from different places. If you take it from only one place it becomes rigid and stale.",
            author: "General Iroh"
        });

        quotes.push({
            text: "The circumstances of ones birth are irrelevant. It is what you do with the gift of life that determines who you are.",
            author: "Mewtwo"
        });
        
        quotes.push({
            text: "When you do things right, people won't be sure you've done anything at all.",
            author: "Cosmic Entity from Futurama"
        });
        
        quotes.push({
            text: "I don't know about angels, but it's fear that gives men wings.",
            author: "Max Payne"
        });
        
        quotes.push({
            text: "Someone who can't sacrifice anything can't ever change anything. To defeat that monster, you have to throw aside your humanity.",
            author: "Armin Arlert"
        });
        
        quotes.push({
            text: "I just want to die knowing that something was different because I was here.",
            author: "Patient from House, M.D."
        });

        var i = getRandomInt(0, quotes.length - 1);
    
        function getRandomInt(min, max) {
            return Math.floor(Math.random() * (max - min + 1)) + min;
        }

        $('.quote-text').text(quotes[i].text);
        $('.author').text("- " + quotes[i].author);
    }
    
    $(".quote-button").on( "click", function() {
        generate();
    });
    
});