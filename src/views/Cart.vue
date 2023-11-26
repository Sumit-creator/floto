<script>
export default {
  name: "Home",
  methods: {
    logout() {
      localStorage.removeItem("token");
      this.$router.push("Login");
    },
  },
  mounted() {
    let token = localStorage.getItem("token");
    if (token) {
      this.$router.push({ name: "Home" });
    }
  },
};


/* Set rates + misc */
var taxRate = 0.05;
var shippingRate = 15.00; 
var fadeTime = 300;


/* Assign actions */
$('.product-quantity input').change( function() {
  updateQuantity(this);
});

$('.product-removal button').click( function() {
  removeItem(this);
});


/* Recalculate cart */
function recalculateCart()
{
  var subtotal = 0;
  
  /* Sum up row totals */
  $('.product').each(function () {
    subtotal += parseFloat($(this).children('.product-line-price').text());
  });
  
  /* Calculate totals */
  var tax = subtotal * taxRate;
  var shipping = (subtotal > 0 ? shippingRate : 0);
  var total = subtotal + tax + shipping;
  
  /* Update totals display */
  $('.totals-value').fadeOut(fadeTime, function() {
    $('#cart-subtotal').html(subtotal.toFixed(2));
    $('#cart-tax').html(tax.toFixed(2));
    $('#cart-shipping').html(shipping.toFixed(2));
    $('#cart-total').html(total.toFixed(2));
    if(total == 0){
      $('.checkout').fadeOut(fadeTime);
    }else{
      $('.checkout').fadeIn(fadeTime);
    }
    $('.totals-value').fadeIn(fadeTime);
  });
}


/* Update quantity */
function updateQuantity(quantityInput)
{
  /* Calculate line price */
  var productRow = $(quantityInput).parent().parent();
  var price = parseFloat(productRow.children('.product-price').text());
  var quantity = $(quantityInput).val();
  var linePrice = price * quantity;
  
  /* Update line price display and recalc cart totals */
  productRow.children('.product-line-price').each(function () {
    $(this).fadeOut(fadeTime, function() {
      $(this).text(linePrice.toFixed(2));
      recalculateCart();
      $(this).fadeIn(fadeTime);
    });
  });  
}


/* Remove item from cart */
function removeItem(removeButton)
{
  /* Remove row from DOM and recalc cart total */
  var productRow = $(removeButton).parent().parent();
  productRow.slideUp(fadeTime, function() {
    productRow.remove();
    recalculateCart();
  });
}
</script>
<template>
 <!-- <Nav/> -->
  <header class="py-3 mb-3 border-bottom">
    <div
      class="container-fluid d-grid gap-3 align-items-center"
      style="grid-template-columns: 1fr 2fr"
    >
      <div class="dropdown">
        <a
          href="#"
          class="d-flex align-items-center col-lg-4 mb-2 mb-lg-0 link-dark text-decoration-none"
          aria-expanded="false"
        >
          <img
          class="img-fluid"
            src="../assets/logo-.png"
            alt="Floto"
          />
        </a>
      </div>
      <div class="d-flex align-items-center">
        <form class="w-100 me-3"></form>
        <button
            class="signr btn-lg"
            type="button"
            value="log out"
          ><i class="fa fa-shopping-cart"></i> <span class="badge">3</span></button>
        <ul>
        
      </ul>
        <div class="flex-shrink-0 dropdown">
          <button
            class="signr btn-lg"
            type="button"
            value="log out"
            @click.prevent="logout"
          ><i class="fa fa-sign-out"></i></button>
        </div>
      </div>
    </div>
  </header>
  <section id="cai"> 
    <div class="container">
    <div class="ert">
    <hr>
    <h1 class="display-4">Checkout</h1>
    <hr>
    <div class="wrapper">
		<h1>Items</h1>
		<div class="project">
			<div class="shop">
				<div class="box">
					<img src="../assets/lotus.jpeg">
					<div class="content">
						<h3>Lotus</h3>
						<h4>Price: Rs 10</h4>
						<p class="unit">Quantity: <input name="" value="2"></p>
						<p class="btn-area"><i aria-hidden="true" class="fa fa-trash"></i> <span class="btn2">Remove</span></p>
					</div>
				</div>
				<div class="box">
					<img src="../assets/pudina.jpg">
					<div class="content">
						<h3>Pudina</h3>
						<h4>Price: Rs 20</h4>
						<p class="unit">Quantity: <input name="" value="1"></p>
						<p class="btn-area"><i aria-hidden="true" class="fa fa-trash"></i> <span class="btn2">Remove</span></p>
					</div>
				</div>
				<div class="box">
					<img src="../assets/tulsi.jpg">
					<div class="content">
						<h3>Tulsi</h3>
						<h4>Price: Rs 35</h4>
						<p class="unit">Quantity: <input name="" value="0"></p>
						<p class="btn-area"><i aria-hidden="true" class="fa fa-trash"></i> <span class="btn2">Remove</span></p>
					</div>
				</div>
			</div>
			<div class="right-bar">
				<p><span>Subtotal</span> <span>Rs 65</span></p>
				<hr>
				<p><span>Tax (5%)</span> <span>Rs 6</span></p>
				<hr>
				<p><span>Shipping</span> <span>Rs 15</span></p>
				<hr>
				<p><span>Total</span> <span>Rs 87</span></p><a href="#"><i class="fa fa-shopping-cart"></i>Checkout</a>
			</div>
		</div>
	</div>      </div>
    </div>
  </section>
  <footer>
    <div class="container-fluid">
    <center>  
    <p>Created by Floto</p>
        </center>
      </div>
        
  </footer>
</template>
<style>
.badge {
    background-color: blue;
    border-radius: 10px;
    color: white;
    display: inline-block;
    font-size: 12px;
    line-height: 1;
    padding: 3px 7px;
    text-align: center;
    vertical-align: middle;
    white-space: nowrap;
}


.logo{
  height: 30;
}
.ert{
  margin:10px auto;
}

* {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
}
section {
	background: #fff;
	font-family: Vidaloka;
}
.wrapper {
	max-width: 1000px;
	margin: 0 auto;
}
.wrapper h1 {
	padding: 20px 0;
	text-align: center;
	text-transform: uppercase;
}
/* #cai {
  font-family: "Vidaloka", serif;
  background: #fadc0b;
} */


.project {
	display: flex;
}
.shop {
	flex: 75%;
}
.box {
	display: flex;
	width: 100%;
	height: 200px;
	overflow: hidden;
	margin-bottom: 20px;
	background: #fff;
	transition: all .6s ease;
	box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
}
.box:hover {
	border: none;
	transform: scale(1.01);
}
.box img {
	width: 300px;
	height: 220px;
	object-fit: cover;
}
.content {
	padding: 20px;
	width: 100%;
	position: relative;
}
.content h3 {
	margin-bottom: 30px;
}
.content h4 {
	margin-bottom: 50px;
}
.btn-2{
    background-color: blue;
}
.btn-area {
	position: absolute;
	bottom: 20px;
	right: 20px;
	padding: 10px 25px;
	background-color: #3a71a9;
	color: white;
	cursor: pointer;
	border-radius: 5px;
}
.btn-area:hover {
	background-color: #76bfb6;
	color: #fff;
	font-weight: 600;
}
.unit input {
	width: 40px;
	padding: 5px;
	text-align: center;
}
.btn-area i {
	margin-right: 5px;
}
.right-bar {
	flex: 25%;
	margin-left: 20px;
	padding: 20px;
	height: 400px;
	border-radius: 5px;
	background: #fff;
	box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
}
.right-bar hr {
	margin-bottom: 25px;
}
.right-bar p {
	display: flex;
	justify-content: space-between;
	margin-bottom: 30px;
	font-size: 20px;
}
.right-bar a {
	background-color: #76bfb6;
	color: #fff;
	text-decoration: none;
	display: block;
	text-align: center;
	height: 40px;
	line-height: 40px;
	font-weight: 900;
}
.right-bar i {
	margin-right: 15px;
}
.right-bar a:hover {
	background-color: #3972a7;
}
@media screen and (max-width: 700px) {
	.content h3 {
		margin-bottom: 15px;
	}
	.content h4 {
		margin-bottom: 20px;
	}
	.btn2 {
		display: none;
	}
	.box {
		height: 150px;
	}
	.box img {
		height: 150px;
		width: 200px;
	}
}
@media screen and (max-width: 900px) {
	.project {
		flex-direction: column;
	}
	.right-bar {
		margin-left: 0;
		margin-bottom: 20px;
	}
}
@media screen and (max-width: 1250px) {
	.wrapper {
		max-width: 95%;
	}
}
</style>
