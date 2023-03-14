// setInterval(myfunction,1000);

function myfunction(){
    document.getElementById("text").style.color = generateRandomecolor();

}

// function yourfunction(){
//     document.getElementById("text").style.color = "white";
// }

function generateRandomecolor(){
    let maxVal = 0xFFFFFF;
    let randomNumber = Math.random() * maxVal;
    randomNumber = Math.floor(randomNumber);
    randomNumber = randomNumber.toString(16);
    let randColor = randomNumber.padStart(6,0);
    return `#${randColor.toUpperCase()}`
}

function randomeText(){
    let text = ["Smartest Person! ","Keep Smile ","Master love your<br> company "," LOL!","You have Big heart ","Best Friend ","Broooo! ","Thanks so much","I’ll be there.","I want you.","I respect you.","Please forgive me.","I miss you.","Appreciate the moment.","Change is good."];
   
    let randomeNumber = Math.floor(Math.random() * text.length);
    document.getElementById("text").innerHTML = text[randomeNumber];
    
}

// function color(){
//     document.documentElement.style.setProperty('--primary','red');
// }