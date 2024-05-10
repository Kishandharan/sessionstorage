document.getElementById("save").onclick = function(){
    let key = document.getElementById("key").value;
    let value = document.getElementById("value").value;
    sessionStorage.setItem(key, value);
}