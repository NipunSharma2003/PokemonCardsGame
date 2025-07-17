 var main=document.getElementById("main");
// main.innerHTML="<h1>Good Boye</h1>";
let arr=["https://i.pinimg.com/736x/4e/2d/dc/4e2ddc76275e47eda1f00219eb264fe1.jpg",
"https://i.pinimg.com/736x/d9/89/ce/d989ce0ef8fdb6351037a46d1855d1e7.jpg",
"https://i.pinimg.com/736x/08/9a/2f/089a2f7c15b409a64bd0c9511acabe5c.jpg",
"https://i.pinimg.com/736x/24/c6/a6/24c6a612c5adec0b88db03995a8b7d07.jpg",
"https://i.pinimg.com/736x/39/4d/d4/394dd48a2e32868e152c76b733b803f7.jpg",
"https://i.pinimg.com/736x/54/e7/50/54e750a0ca8d50dfd639a5c243e6d3fb.jpg "];
var s="";
for(let i=1;i<=44;i++){
    let r=Math.floor(Math.random()*arr.length);
    s+=`<div class="card"><img src=${arr[r]}></div>`;
}
main.innerHTML=s;
"https://i.pinimg.com/736x/4e/2d/dc/4e2ddc76275e47eda1f00219eb264fe1.jpg",
"https://i.pinimg.com/736x/d9/89/ce/d989ce0ef8fdb6351037a46d1855d1e7.jpg",
"https://i.pinimg.com/736x/08/9a/2f/089a2f7c15b409a64bd0c9511acabe5c.jpg",
"https://i.pinimg.com/736x/24/c6/a6/24c6a612c5adec0b88db03995a8b7d07.jpg"