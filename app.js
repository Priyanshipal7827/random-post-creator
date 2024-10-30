console.log("Hello Priyanshi.");
let val = "New Document.";
console.log(val);

let new_val = val;
console.log(new_val);
console.log(val);
const accountId = 121231;
let accountEmail = "@gmaiil.com";
var accountCity = "meerut";
let password = 1224525673;
console.log(`My Account ID is ${accountId} , and Email is ${accountEmail} , City is ${accountCity}.`)
console.table([accountId, accountEmail, password,accountCity]);
let count = 400.99;
console.log(count.toFixed(1));
console.log(count.toPrecision(3));

let mydate = new Date();
console.log(mydate.toString());
console.log(mydate.toDateString());
console.log(mydate.toISOString());
console.log(mydate.toJSON());
console.log(mydate.toLocaleDateString());
console.log(mydate.toLocaleString());
console.log(mydate.toTimeString());
console.log(mydate.toUTCString());
let arr = [1,2,3,4,5,6];
console.log(arr);



let counts = {
name :"priyanshi",
age :19,
email : "palpriyanshi712@gmail.com",
}
console.log(counts);


const code = ["java ", "python", "c++", "node.js", "ruby", "js", "sql"];

const value = code.forEach( (item) => {
   return value; 

})
const mynum = [1,2,3,4,5,6,7,8,9];
const newnum = mynum.map ((num) =>{
    return num * 10 ;
});
console.log(newnum);

const parent = document.querySelector(".parent");
console.log(parent);
console.log(parent.children);
console.log(parent.children[1].innerHTML);

for (let i = 0; i < parent.children.length; i++) {
     console.log(parent.children[i].innerHTML);

};
parent.children[1].style.color = "red";


let day = document.querySelector(".class");
console.log(day);
console.log(day.parentElement);
console.log(day.nextElementSibling);
console.log("NODES:", parent.childNodes);


function newfun() {
    const div = document.createElement("div");
    div.className = "main";
    console.log(div);

    div.id = Math.round(Math.random() * 10 + 1);
    div.setAttribute("title", "generate title");
    div.style.backgroundColor = "lightblue";
    div.style.padding = "12px";
    div.style.color = "black";
    const addtext1 = document.createTextNode("chai aur code");
    div.appendChild(addtext1);
    document.body.appendChild(div);



    let para = document.createElement("p");
    console.log(para);
    para.className = "first";
    para.id = Math.round(Math.random() * 10) + 1;


    // para.innerHTML = "hello priyanshi are you there!";
    para.style.backgroundColor = "red";
    para.style.color = "black";
    para.style.padding = "12px";
    para.style.textAlign = "center";
    const addtext = document.createTextNode("hello priyanshi are you there!");
    para.appendChild(addtext);
    document.body.appendChild(para);

    let btn = document.createElement("button");
    console.log(btn);
    btn.className = "btn";
    btn.id = "new";
    const new2 = document.createTextNode("click me!");
    btn.appendChild(new2);
    document.body.appendChild(btn);
};
newfun();
newfun();
newfun();

function addnewlist(newlist) {
    let li = document.createElement("li");
    li.appendChild(document.createTextNode(newlist));
    document.querySelector(".language").appendChild(li);

}
addnewlist("ruby");
addnewlist("R");
addnewlist("java");

// remove element


const lastlang = document.querySelector("li:last-child");
lastlang.remove();


document.getElementById("owl").addEventListener("click",function(){
    alert("hey! i'm a white owl.")
})






