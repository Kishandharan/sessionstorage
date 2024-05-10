document.getElementById("get").onclick = function(){
    let key = document.getElementById("key").value;
    console.log(sessionStorage.getItem(key));
}