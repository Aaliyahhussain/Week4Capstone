var total = 0;
var cart = [];
var items = [];
var prices = [];
var checkoutCart = [];
var elBill = document.getElementById("bill");
function addItem(item){
	cart.push(item);
	splitAndGetPrice(item);
}

function splitAndGetPrice(cartItem){
		var itemAndPrice = cartItem.split("=");
		var item = itemAndPrice[0];
		var price = parseInt(itemAndPrice[1]);
		total += price;
		var quantity = 0;
		var addMe = 0;
		
		
		if (checkIfItemIsUnique(item) === true){
			console.log("item created");
			var myItem = new Item(item, price, 1);
			checkoutCart.push(myItem);
		} else {
			for(var i = 0; i < checkoutCart.length; i++){
				if (checkoutCart[i].item === item){
					checkoutCart[i].quantity++;
					console.log(checkoutCart[i].quantity);
				}
			}
		}
}

function checkIfItemIsUnique(item){
	for(var i = 0; i < checkoutCart.length; i++){
		if (checkoutCart[i].item === item){
			return false;
		}
	}
	return true;
}

function Item(item, price, quantity){
	this.item = item;
	this.price = price;
	this.quantity = quantity;
}
	
function cashier(){
	for (var i = 0; i < checkoutCart.length; i++){
		var o = checkoutCart[i];
		elBill.innerHTML += "<p>" + "Quantity: " + o.quantity+ ", Item: " + o.item + ", Price: " + o.price + "</p>";
	}
	var tax = (total*.06);
	var grandTotal = tax + total;
	console.log(typeof tax);
	console.log(typeof total);
	
	var bill = document.getElementId("bill");
	bill.onclick = function() {
		for(i= 0;i<item.length;i++){
			console.log(ite,[i] + "$" + prices[i]);
			totaln += prices[i] + (prices[i] * .06);
		}
	}
	
	
	elBill.innerHTML += "<p>" + "Sales tax is " + tax.toFixed(2) + "</p>";
	elBill.innerHTML += "<p>" + "Subtotal is " + total + "</p>";
	elBill.innerHTML += "<p>" + "Grand total is " + grandTotal.toFixed(2)  + "</p>";
}
