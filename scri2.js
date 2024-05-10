document.getElementById("get").onclick = function(){
    let key = document.getElementById("key").value;
    let val = sessionStorage.getItem(key);
    console.log(val);
}
