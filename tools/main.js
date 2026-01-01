let wc = [
    [400, [
        [1001,1053],
        [1054,1100],
        [1101,1155],
        [1156,1205],
        [1206,1253],
        [1254,1299],
        [1300,1348],
        [1349,1400],
    ]],
    [535, [
        [1401,1456],
        [1457,1513],
        [1514,1566],
        [1567,1619],
        [1620,1677],
        [1678,1731],
        [1732,1782],
        [1783,1833],
        [1834,1879],
        [1880,1935],
    ]],
]


function convert(){
    let taip1 = document.getElementById("ip1");
    let taip2 = document.getElementById("ip2");
    let taop = document.getElementById("op");
    let ip1 = taip1.value.split(" ");
    let ip2 = taip2.value.split(" **");
    console.log(ip1,ip2)
    let op = "";
    let count = 0;
    for(let i in wc){
        let p = parseInt(i)+3;
        for(let j in wc[i][1]){
            let w = parseInt(j)+1;
            for(let k = 0; k<wc[i][1][j][1]-wc[i][1][j][0]+1;k++){
                op += '"'+ip1[count]+'":['+p+","+w+',"'+ip2[count]+'"],@@';
                count++;
            }
        }
    }
    taop.value = op;
}
//後から" @"を改行に変える
/*
let test = document.getElementsByClassName("column-2");
let op = "";
for(let i in test){
    op+=test[i].textContent+"#@";
}
console.log(op);
*/