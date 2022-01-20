var print = function(msg){
    document.getElementById("output").innerHTML = "Your word length is" + msg;
}
document.getElementById("btn").onclick = function(event){
    print(document.getElementById('str').value.length);
}