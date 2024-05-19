//your JS code here. If required.
let arr = ["Red","Green","White","Black"];
let pDiv = document.getElementById("colorSelect");
function display(){
    pDiv.innerHTML = ``;
    arr.forEach((elt,idx)=>{
        let ch = document.createElement("option");
        ch.textContent = `${elt}`;
        ch.setAttribute("id",`opt-${idx}`);
        pDiv.appendChild(ch);
    });
}

display();

function myFun(){
    arr = arr.filter((elt)=>{
        if(elt!=pDiv.value)
            return elt;
    })
    display();
}
