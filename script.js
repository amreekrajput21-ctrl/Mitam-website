let cart = {};
let currentProducts = [...products];

function loadProducts(list){
let html="";
list.forEach(p=>{
html+=`
<div class="card">
<img src="${p.img}">
<h3>${p.name}</h3>
<p>₹${p.price}</p>
<button class="btn" onclick="addItem('${p.name}',${p.price})">Add</button>
</div>`;
});
document.getElementById("products").innerHTML=html;
}

function addItem(name,price){
if(cart[name]){
cart[name].qty++;
}else{
cart[name]={price:price,qty:1};
}
updateCart();
}

function updateCart(){
let html="";
let total=0;
let count=0;

for(let item in cart){
let p=cart[item].price;
let q=cart[item].qty;
total+=p*q;
count+=q;

html+=`<div class="item">${item} x${q} = ₹${p*q}</div>`;
}

document.getElementById("cartItems").innerHTML=html;
document.getElementById("total").innerText=total;
document.getElementById("count").innerText=count;
}

function searchProduct(){
let val=document.getElementById("search").value.toLowerCase();
let filtered=products.filter(p=>p.name.toLowerCase().includes(val));
loadProducts(filtered);
}

function filterCategory(cat){
if(cat==="all"){loadProducts(products);}
else{loadProducts(products.filter(p=>p.category===cat));}
}

function clearCart(){
cart={};
updateCart();
}

function order(){
alert("Order placed on WhatsApp 😎");
}

loadProducts(products);
