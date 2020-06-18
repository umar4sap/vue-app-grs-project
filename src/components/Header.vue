<template>
<nav class="navbar navbar-expand-lg navbar-dark fixed-top mb-3">
  <div class="container" >
  <a class="navbar-brand" href="#">{{siteTile}}</a>

  <div class="navbar-collapse collapse"  id="navbarSupportedContent">
    <ul class="navbar-nav ml-auto">
      <li class="nav-item active">
    <router-link to="/" class="nav-link" href="#">Home </router-link>
      </li>
      <li class="nav-item">
     <router-link to="/dashboard" class="nav-link" href="#">Dashboard</router-link>
      </li>
    
     <li class="nav-item">
     <router-link to="/task" class="nav-link" href="#">Menu</router-link>
      </li>
    
    </ul>
  
  </div>
  </div>
</nav>
</template>

<script>
export default {
  name: 'Header',
 data(){
   return {
     siteTile:"GRS Tracker"
   }
 }
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
 .navbar{
  background:#ff1567 !important;
} 
.search{
   background: green;
   color : white;
}

.navbar .nav-item >.nav-link{
  color:#616161;
  padding:12px 16px;
  letter-spacing:0.02em ;
  font-size:16px ;
  font-family: 'Open Sans', sans-serif;
  font-weight: 600;

}



a.navbar-brand {
      text-transform: uppercase;
    font-size: 0.8571em;
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
    line-height: 1.625rem;
}
a.navbar-brand:hover{
  color: black;
}


.navbar-collapse:not(.has-image) {
    background: transparent!important;
    background-image: initial !important;
    background-position-x: initial !important;
    background-position-y: initial !important;
    background-size: initial !important;
    background-repeat-x: initial !important;
    background-repeat-y: initial !important;
    background-attachment: initial !important;
    background-origin: initial !important;
    background-clip: initial !important;
    background-color: transparent !important;
}

</style>
