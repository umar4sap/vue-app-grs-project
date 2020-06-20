<template>
  <div class="home">
    <div class="container">
      <div class="row">
      <div class="col">
        <div class="list-section">
          <h1 class="ls-heading">Task tracker for venturewise   </h1>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates, maiores similique ab debitis dolorem eligendi ullam praesentium vel repellendus iste!</p>
          <button class="btn btn-pirmary"> Get Started</button>
          <button class="btn btn-danger">Quick Dashboard</button>
        </div>
      </div>
      <div class="col">
        <div class="task-img">
          <img src="@/assets/task.svg" alt="" class="img-fluid" />
        </div>
      </div>
    </div>
    </div>


  <Customers />
  <Footer />
  </div>
</template>
	<script>
// @ is an alias to /src
//import HelloWorld from '@/components/HelloWorld.vue'
import Footer from "@/components/Footer.vue"; 
import Customers from "@/components/Customers.vue";
export default {
  name: "Home",
  components: {
    Footer,
    Customers
  }
};
</script>
	<style scoped>


button.btn-pirmary {
  background: transparent;
  border: 1px solid #616161;
  color: #616161;
  width: 169px;
  padding: 9px;
  font-size: 17px;
}

button.btn-danger {
  background: #FF3F3F;
  color: blanchedalmond;
  margin-left: 10px;
  width: 169px;
  padding: 9px;
  font-size: 17px;
}

button.btn-pirmary:hover {
  background: #FF3F3F;
  color: blanchedalmond;
}

button.btn-danger:hover {
  background: transparent;
  border: 1px solid #616161;
  color: #616161;
}

.home {
  padding-top: 100px;
background: #ADA996;  /* fallback for old browsers */
background: -webkit-linear-gradient(to right, #EAEAEA, #DBDBDB, #F2F2F2, #ADA996);  /* Chrome 10-25, Safari 5.1-6 */
background: linear-gradient(to right, #EAEAEA, #DBDBDB, #F2F2F2, #ADA996); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
padding-bottom: 50px;
margin-top: -27px;
}

.list-section {
  padding-top: 25px;
}

.list-section p {
  padding: 25px 0px;
  font-family: "Roboto", sans-serif;
}

h1.ls-heading {
  font-size: 2.75rem;
  line-height: 1.18181818;
  margin-bottom: 16px;
  font-family: "Roboto", sans-serif;
  color: #616161;
  text-transform: capitalize;
}


</style>
