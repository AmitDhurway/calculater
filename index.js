let History = document.getElementById("History");
let Answer = document.getElementById("Answer");

let Btns = document.getElementsByClassName("btn");

for (let i of Btns) {
    i.addEventListener("click", (e) => {
        let BtnText = e.target.innerText;
        console.log(BtnText);

        if (BtnText === "=") {
            History.innerText = Answer.innerText;
            let Result = eval(Answer.innerText);
            Answer.innerText = Result;
        } else if (BtnText === "x") {
            Answer.innerText += "*";
        } else if (BtnText === "C") {
            History.innerText = "";
            Answer.innerText = "";
        } else {
            Answer.innerText += BtnText;
        }
    });
}
