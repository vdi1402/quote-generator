var quotes = ['One is loved because one is loved. No reason is needed for loving',
'And when you want something, all the universe conspires in helping you to achieve it',
'When we strive to become better than we are, everything around us becomes better too.',
'he act of discovering  who we are will force us to accept that we can go further than we think',
'To be able to laugh and to be merciful are the only things that make man better than the beast',
'The world keeps on changing, but there is always something, somewhere, that remains the same',
'Until death comes, all is life',
' Happiness is a mysterious thing, to be found somewhere between too little and too much. ' ]
 


function a(){
    var randomNumber = Math.floor(Math.random()* quotes.length);
    document.getElementById('newQuoteSection').innerHTML = quotes[randomNumber];

}
function b(){
  
    document.body.style.backgroundImage = "url('bg1.jpg')"
}

function main() {
    
a();
b();
    }


