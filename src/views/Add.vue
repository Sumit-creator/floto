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
    <h1 class="display-4">Add Plant</h1>
    <hr>
    <div class="container align-center">
	      <div class="row">
		        		<div class="col-xs-12 col-sm-12 col-md-8 col-lg-6  column col-sm-offset-0 col-md-offset-2 col-lg-offset-3">
          <form class="form-horizontal">
            <fieldset>

            <!-- Form Name -->
            <legend>Plant Details</legend>
            <!-- Select Basic -->
            <div class="form-group">
              <label class="col-md-3 control-label" for="selectbasic">Select Plant type</label>
              <div class="col-md-9">
                <select id="selectbasic" name="selectbasic" class="form-control">
                  <option value="1">Terestial</option>
                  <option value="2">Alpine</option>
                  <option value="3">Aerial</option>
                </select>
              </div>
            </div>


            <!-- Text input-->
            <div class="form-group">
              <label class="col-md-3 control-label" for="textinput">Plant Name</label>  
              <div class="col-md-3">
                <input id="textinput" name="textinput" type="text" placeholder="Plant Name" class="form-control input-md">
              </div>
              <label class="col-md-3 control-label" for="textinput">Latitude</label> 
              <div class="col-md-3">
                <input id="textinput" name="textinput" type="text" placeholder="Latitude" class="form-control input-md">
              </div>
              <label class="col-md-3 control-label" for="textinput">Longitude</label> 
              <div class="col-md-3">
                <input id="textinput" name="textinput" type="text" placeholder="Longitude" class="form-control input-md">
              </div>

              <label class="col-md-3 control-label" for="textinput">Photo Input</label> 
              <div class="col-md-3">
                <input id="textinput" name="textinput" type="text" placeholder="Insert Photo" class="form-control input-md">
              </div>
</div>
  
  <!-- Textarea -->
<div class="form-group">
  <label class="col-md-3 control-label" for="textarea">Details</label>
  <div class="col-md-9">                     
    <textarea class="form-control" id="textarea" name="textarea">Plant Details</textarea>
  </div>
</div>

<!-- Button (Double) -->
<div class="form-group">
  <label class="col-md-3 control-label" for="button1id"></label>
  <div class="col-md-8">
    <button id="button1id" name="button1id" class="btn btn-success">Submit</button>&nbsp;
    <button id="button2id" name="button2id" class="btn btn-danger">Cancel</button>
    
  </div>
</div>

</fieldset>
</form>
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
