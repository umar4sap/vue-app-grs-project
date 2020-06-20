<template>
    
        
    <div class="clients">
        <div class="container">
      <div class="oc-head text-center">
        <h5 class="font-weight-bold">TRUSTED BY CUSTOMERS WORLDWIDE</h5>
      </div>
      <div class="oc-name">
        <div class="row d-flex justify-content-around">
          <div class="col-2">
            <img src="@/assets/c-logo.svg" class="cs-img" alt />
          </div>
          <div class="col-2">
            <img src="@/assets/c-logo2.svg" class="cs-img" alt />
          </div>
          <div class="col-2">
            <img src="@/assets/c-logo3.svg" class="cs-img" alt />
          </div>
          <div class="col-2">
            <img src="@/assets/c-logo4.svg" class="cs-img" alt />
          </div>
          <div class="col-2">
            <img src="@/assets/c-logo5.svg" class="cs-img" alt />
          </div>
        </div>
        <hr />
      </div>
    </div>

    </div>
</template>

<script>
export default {
     name: "Customers",
  components: {}
}
</script>

<style scoped>
.clients {
  padding-top: 64px;
  padding-bottom: 16px;
 background: #ADA996;  /* fallback for old browsers */
background: -webkit-linear-gradient(to right, #EAEAEA, #DBDBDB, #F2F2F2, #ADA996);  /* Chrome 10-25, Safari 5.1-6 */
background: linear-gradient(to right, #EAEAEA, #DBDBDB, #F2F2F2, #ADA996); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

  height: 283px;
  width: 100%;
  margin-top: 45px;
}

.oc-head > h5 {
  color: #828283 ;
  letter-spacing: 1px;
  font-size: 17px;
}

.oc-name {
  padding: 50px;
}

.oc-name > hr {
  background: #dfe1e5;
  border: 0;
  height: 2px;
  margin: 65px;
  padding: 0;
}

img.cs-img{
  width: 120px;
}

</style>