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
    <div class="container-fluid">
    <div class="ert">
    <hr>
    <h1 class="display-4">Profile</h1>
    <hr>
    </div>
    <div class="card">
        <div class="card_background_img"></div>
        <div class="card_profile_img"></div>
        <div class="user_details">
            <h3>Saurabh Satpathy</h3>
            <p>Full Stack Developer</p>
            <p>ss@gmail.com</p>
        </div>
        <div class="btn">Forgot Password</div>
        <div class="card_count">
            <div class="count">
                <div class="fans">
                    <h3>2</h3>
                    <p>Planted</p>
                </div>
                <div class="following">
                    <h3>3</h3>
                    <p>Visited</p>
                </div>
                <div class="post">
                    <h3><span>&#9733; &#9733; &#9733;</span></h3>
                    <p>Star</p>
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
footer{
    margin-top: 50px;
}
.signr{
    margin-right: 10px;
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

.ert{
  margin:10px auto;
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
    background-color: #e1e7ed;
    text-align: center;
}

h3 {
    font-size: 18px;
    font-weight: 500;
    color: #33363b;
    margin-bottom: 5px;
}

p{
    font-size: 14px;
    color: #868d9b;
}

.card {
    width: 360px;
    height: auto;
    background-color: #ffffff;
    margin: 0 auto;
    margin-top: 80px;
    box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.15);
}

.card_profile_img {
    width: 120px;
    height: 120px;
    background-color: #868d9b;
    background: url("https://source.unsplash.com/7Sz71zuuW4k");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    border: 2px solid #ffffff;
    border-radius: 120px;
    margin: 0 auto;
    margin-top: -60px;

}

.card_background_img {
    width: 100%;
    height: 180px;
    background-color: #e1e7ed;
    background: url("https://source.unsplash.com/9wg5jCEPBsw");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
}

.user_details p {
    margin-bottom: 20px;
    margin-top: -5px;
}

.user_details h3 {
    margin-top: 10px;
}

.card_count {
    padding: 30px;
    border-top: 1px solid #dde1e7;
}

.count {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 28px;
}

.count p {
    margin-top: -10px;
}

.btn {
    padding: 16px;
    width: 100%;
    border: none;
    outline: none;
    border-radius: 4px;
    background-color: #24c5a1;
    color: #ffffff;
    cursor: pointer;
    text-align: center;
    font-size: 14px;
    font-weight: 600;
    text-transform: uppercase;
}
</style>
