<template>
<nav class="navbar navbar-expand-lg navbar-dark mb-3">
  <div class="container">
  <a class="navbar-brand" href="#">{{siteTile}}</a>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
    <router-link to="/" class="nav-link" href="#">Home <span class="sr-only">(current)</span></router-link>
      </li>
      <li class="nav-item">
     <router-link to="/task" class="nav-link" href="#">Task Activities</router-link>
      </li>
    
      <li class="nav-item">
        <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
      </li>
    </ul>
    <form class="form-inline my-2 my-lg-0">
      <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
     
    </form>
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
  background: blueviolet;
}
.search{
   background: green;
   color : white;
}
</style>
