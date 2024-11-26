let username;

document.getElementById("myButton").onclick = function(){ //refers to HTML id
    username = document.getElementById("myText").value; // assign my value in HTML my text
    console.log(username); //print username vlaue
    document.getElementById("myLabel").innerHTML = "Hello: " + username +"!";
    //print this line function = string + varable + string
}
