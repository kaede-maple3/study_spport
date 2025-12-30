let wc = [
    [400, [
        [1, 42],
        [43, 78],
        [79, 118],
    ]],
]

let words = {//単語:[part,week,意味]
    "agree": [1, 1, "自:賛成する/(気候、食べ物が)合う +with/to"],
    "oppose": [1, 1, "他:~に反対する(≒be opposed to:~に反対している)"],
    "advise": [1, 1, "他:~に忠告する"],
    "tip": [1, 1, "名:助言/ヒント/チップ/先/先端"],
    "discuss": [1, 1, "他:~について話し合う/議論する/話題に出す"],
    "blame": [1, 1, "他:~に責任があるとする (+for ~に対して責任があるとする)"],
    "argue": [1, 1, "他:~と主張する (+for ~に賛成と主張する) 自:言い争う +with"],
    "claim": [1, 1, "他:~と主張する/を要求する 名:主張/要求"],
    "complain": [1, 1, ""],
    "offer": [1, 1, ""],
    "suggest": [1, 1, ""],
    "recommend": [1, 1, ""],
    "grateful": [1, 1, ""],
    "apologize": [1, 1, ""],
    "excuse": [1, 1, ""],
    "celebrate": [1, 1, ""],
    "admire": [1, 1, ""],
    "impress": [1, 1, ""],
    "award": [1, 1, ""],
    "describe": [1, 1, ""],
    "explain": [1, 1, ""],
    "communicate": [1, 1, ""],
    "express": [1, 1, ""],
    "promise": [1, 1, ""],
    "information": [1, 1, ""],
    "technology": [1, 1, ""],
    "research": [1, 1, ""],
    "material": [1, 1, ""],
    "artificial": [1, 1, ""],
    "electric": [1, 1, ""],
    "invent": [1, 1, ""],
    "discover": [1, 1, ""],
    "develop": [1, 1, ""],
    "skill": [1, 1, ""],
    "ability": [1, 1, ""],
    "talent": [1, 1, ""],
    "effort": [1, 1, ""],
    "practice": [1, 1, ""],
    "game": [1, 1, ""],
    "achieve": [1, 1, ""],
    "manage": [1, 1, ""],
    "improve": [1, 1, ""],
    "produce": [1, 2, ""],
    "create": [1, 2, ""],
    "establish": [1, 2, ""],
    "save": [1, 2, ""],
    "medicine": [1, 2, ""],
    "patient": [1, 2, ""],
    "condition": [1, 2, ""],
    "medical": [1, 2, ""],
    "stress": [1, 2, ""],
    "suffer": [1, 2, ""],
    "exercise": [1, 2, ""],
    //"": [1, 1, ""],
}

let wordDiv;
window.onload = function () {
    wordDiv = document.getElementById("words");
    drawAll();
}

let tableEle = ["連番", "単語", "意味"];
function drawAll() {
    let befp = 0, befw = 0;
    let pele, wele, tele;
    let count = 1;
    for (let word in words) {
        let p = words[word][0];
        let w = words[word][1];

        if (befp != p) {//Part切り替え
            befp = p;
            let details = document.createElement("details");
            let summary = document.createElement("summary");
            summary.textContent = "Part" + p + "(" + wc[p - 1][0] + "語)";
            details.appendChild(summary);
            wordDiv.appendChild(details);
            pele = details;
        }

        if (befw != w) {//Week切り替え
            befw = w;
            let details = document.createElement("details");
            let summary = document.createElement("summary");
            summary.textContent = "Week" + w + "(" + wc[p - 1][1][w - 1][0] + "~" + wc[p - 1][1][w - 1][1] + ")";
            details.appendChild(summary);
            pele.appendChild(details);

            let table = document.createElement("table");
            details.appendChild(table);
            let thead = document.createElement("thead");
            table.appendChild(thead);
            let tr = document.createElement("tr");
            thead.appendChild(tr);
            for (let e in tableEle) {
                let th = document.createElement("th");
                th.textContent = tableEle[e];
                tr.appendChild(th);
            }

            wele = details;
            tele = table;
        }

        //単語追加
        let tbody = document.createElement("tbody");
        tele.appendChild(tbody);
        let tr = document.createElement("tr");
        tbody.appendChild(tr);

        let thc = document.createElement("th");
        thc.textContent = count;
        tr.appendChild(thc);

        let thw = document.createElement("th");
        thw.textContent = word;
        tr.appendChild(thw);

        let thm = document.createElement("th");
        thm.textContent = words[word][2];
        tr.appendChild(thm);

        count++;
    }
}