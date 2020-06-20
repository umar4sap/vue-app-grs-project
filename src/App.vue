<template>
  <div id="app">
  <Header />
  <div class="container-fluid cf-sprt">
    <router-view/>
  </div>
 
 
  </div>
</template>

<script>
import Header from "@/components/Header.vue";

export default {
 components:{
   Header,

  //  Table,
  //  Popup,
  //  Form
 }
  
}
</script>
.navbar{
  background:black;

}



<style>
.cf-sprt{
padding:0px !important;
margin-top:90px;
}
</style>
