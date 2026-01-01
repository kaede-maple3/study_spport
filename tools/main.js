function convert(){
    let taip = document.getElementById("ip");
    let s = taip.value.split("	[");
    let op = "";
    for(let e in s){
        let ss = s[e];
        ss = ss.slice(0,ss.indexOf("@")+1);
        console.log(ss)
        op+=ss;
    }
    let taop = document.getElementById("op");
    taop.value = op;
}
//後から" @"を改行に変える

let test = document.getElementsByClassName("column-3");
let op = "";
for(let i in test){
    op+=test[i].textContent+"#@";
}
console.log(op);