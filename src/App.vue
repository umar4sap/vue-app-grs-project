<template>
  <div id="app">
  <Header />
  <div class="container-fluid">
    <router-view/>
  </div>
  <Customers />
  <Footer />
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue"; 
import Customers from "@/components/Customers.vue";
export default {
 components:{
   Header,
   Footer,
   Customers
 }
  
}
</script>
.navbar{
  background:black;

}



<style>
.container-fluid{
padding:0px;
}
</style>
