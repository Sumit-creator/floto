<script>
export default {
  name: "Home",
  methods: {
    logout() {
      localStorage.removeItem("token");
      this.$router.push("Login");
    },
    click(){
      this.$router.push("Cart");
    },
  },
  mounted() {
    let token = localStorage.getItem("token");
    if (token) {
      this.$router.push({ name: "Home" });
    }
  },
};


$(document).ready(function () {
  var front = document.getElementsByClassName("front");
  var back = document.getElementsByClassName("back");

  var highest = 0;
  var absoluteSide = "";

  for (var i = 0; i < front.length; i++) {
    if (front[i].offsetHeight > back[i].offsetHeight) {
      if (front[i].offsetHeight > highest) {
        highest = front[i].offsetHeight;
        absoluteSide = ".front";
      }
    } else if (back[i].offsetHeight > highest) {
      highest = back[i].offsetHeight;
      absoluteSide = ".back";
    }
  }
  $(".front").css("height", highest);
  $(".back").css("height", highest);
  $(absoluteSide).css("position", "absolute");
});
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
            height="20px"
            
          />
        </a>
      </div>
      <div class="d-flex align-items-center">
        <form class="w-100 me-3"></form>
        <button
            class="signr btn-lg"
            type="button"
            value="cart"
            @click.prevent="cart"
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
    <h1 class="display-4">Feed</h1>
    <div class="aligned-right">
      <a href="./add" type="button" class="btn btn-primary">Add Plant</a>
    </div>

    <hr>
    </div>
      <div class="row text-center">
        <div class="col-md-4 card-container">
    <div class="card card-flip lo">
      <div class="front card-block lo">
      </div>
      <div class="back card-block justify-content-center">
        <p class=" justify-content-center">
        <br>
         <b> Plant Name: Lotus
          <br/>
          Location:<br>
</b>          <a href="https://www.google.com/maps/search/?api=1&query=20.275855006970957, 85.77648877351888"><i class="fa fa-map-marker" style="font-size:48px;color:red"></i></a> 
        </p>
      </div>
    </div>
  </div>
  <div class="col-md-4 card-container">
    <div class="card card-flip ro">
      <div class="front card-block ro">
      </div>
      <div class="back card-block justify-content-center">
        <p class=" justify-content-center">
        <br>
         <b> Plant Name: Rose
          <br/>
          Location:<br>
</b>          <a href="https://www.google.com/maps/search/?api=1&query=20.275855006970957, 85.77648877351888"><i class="fa fa-map-marker" style="font-size:48px;color:red"></i></a> 
        </p>
      </div>
    </div>
  </div>
  <div class="col-md-4 card-container">
    <div class="card card-flip ba">
      <div class="front card-block ba">
      </div>
      <div class="back card-block justify-content-center">
        <p class=" justify-content-center">
        <br>
         <b> Plant Name: Banana
          <br/>
          Location:<br>
</b>          <a href="https://www.google.com/maps/search/?api=1&query=20.275855006970957, 85.77648877351888"><i class="fa fa-map-marker" style="font-size:48px;color:red"></i></a> 
        </p>
      </div>
    </div>
  </div>
  <div class="col-md-4 card-container">
    <div class="card card-flip tu">
      <div class="front card-block tu">
      </div>
      <div class="back card-block justify-content-center">
        <p class=" justify-content-center">
        <br>
         <b> Plant Name: Tulsi
          <br/>
          Location:<br>
</b>          <a href="https://www.google.com/maps/search/?api=1&query=20.275855006970957, 85.77648877351888"><i class="fa fa-map-marker" style="font-size:48px;color:red"></i></a> 
        </p>
      </div>
    </div>
  </div>
  <div class="col-md-4 card-container">
    <div class="card card-flip pu">
      <div class="front card-block pu">
      </div>
      <div class="back card-block justify-content-center">
        <p class=" justify-content-center">
        <br>
         <b> Plant Name: Pudina
          <br/>
          Location:<br>
</b>          <a href="https://www.google.com/maps/search/?api=1&query=20.275855006970957, 85.77648877351888"><i class="fa fa-map-marker" style="font-size:48px;color:red"></i></a> 
        </p>
      </div>
    </div>
  </div>
  <div class="col-md-4 card-container">
    <div class="card card-flip er">
      <div class="front card-block er">
      </div>
      <div class="back card-block justify-content-center">
        <p class=" justify-content-center">
        <br>
         <b> Plant Name: Erica
          <br/>
          Location:<br>
</b>          <a href="https://www.google.com/maps/search/?api=1&query=20.275855006970957, 85.77648877351888"><i class="fa fa-map-marker" style="font-size:48px;color:red"></i></a> 
        </p>
      </div>
    </div>
  </div>
      </div>
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
<style scoped>
.cart{
  display:inline-block;
}
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
.lo{
  background-image: url(../assets/lotus.jpeg);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
.ro{
  background-image: url(../assets/rose.jpg);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
.tu{
  background-image: url(../assets/tulsi.jpg);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
.pu{
  background-image: url(../assets/pudina.jpg);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
.er{
  background-image: url(../assets/erica.jpg);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
.ba{
  background-image: url(../assets/banana.jpg);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
#cai {
  font-family: "Vidaloka", serif;
  background: #fadc0b;
}

.card-block .btn-outline-primary {
  height:100px;
  width: 100%;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
  bottom: 0;
  left: 0;
  position: absolute;
}

.card {
  height:100px;
  margin: 20px 0;
}

/* Flip Cards CSS */
.card-container {
  perspective: 700px;
}
.card-flip {
  position: relative;
  width: 100%;
  transform-style: preserve-3d;
  height: auto;
  transition: all 0.5s ease-out;
  border: none;
  background:white;
}

.card-flip div {
  backface-visibility: hidden;
  transform-style: preserve-3d;
  height: 200px;
  width: 100%;
  border: none;
}

.card-flip .front {
  position: relative;
  z-index: 1;
}

.card-flip .back {
  position: absolute;
  z-index: 0;
  transform: rotateY(-180deg);
}

.card-container:hover .card-flip {
  transform: rotateY(180deg);
}

</style>
