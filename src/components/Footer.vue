<template>
    

     <footer>
      <div class="container">
          <div class="row d-flex justify-content-around">
        <div class="col-3">
          <div class="fc">
            <h4 class="fh font-weight-bold">PRODUCTS</h4>
            <ul class="nav flex-column fte">
              <li class="nav-item">
                <a class="nav-link" href="#">GRS Software</a>
              </li>
               <li class="nav-item">
                <a class="nav-link" href="#">GRS Services</a>
              </li>
               <li class="nav-item">
                <a class="nav-link" href="#">GRS Align</a>
              </li>
               <li class="nav-item">
                <a class="nav-link" href="#"> Confluence </a>
              </li>
               <li class="nav-item">
                <a class="nav-link" href="#"> Bitbucket </a>
              </li>
            </ul>
          </div>
        </div>
        <div class="col-3">
          <div class="fc">
            <h4 class="fh font-weight-bold"> Resources </h4>
            <ul class="nav flex-column fte">
              <li class="nav-item">
                <a class="nav-link" href="#"> Technical Support </a>
              </li>
               <li class="nav-item">
                <a class="nav-link" href="#"> Purchasing & licensing </a>
              </li>
               <li class="nav-item">
                <a class="nav-link" href="#"> Atlassian Community </a>
              </li>
               <li class="nav-item">
                <a class="nav-link" href="#"> Knowledge base </a>
              </li>
               <li class="nav-item">
                <a class="nav-link" href="#"> Marketplace </a>
              </li>
            </ul>
          </div>
        </div>
        <div class="col-3">
          <div class="fc">
            <h4 class="fh font-weight-bold"> Expand & Learn </h4>
            <ul class="nav flex-column fte">
              <li class="nav-item">
                <a class="nav-link" href="#"> Documentation </a>
              </li>
               <li class="nav-item">
                <a class="nav-link" href="#"> Developer Resources </a>
              </li>
               <li class="nav-item">
                <a class="nav-link" href="#"> Purchasing FAQ </a>
              </li>
               <li class="nav-item">
                <a class="nav-link" href="#"> Enterprise services </a>
              </li>
               <li class="nav-item">
                <a class="nav-link" href="#"> View all resources </a>
              </li>
            </ul>
          </div>
        </div>
        <div class="col-3">
          <div class="fc">
            <h4 class="fh font-weight-bold"> About GRS </h4>
            <ul class="nav flex-column fte">
              <li class="nav-item">
                <a class="nav-link" href="#"> Company </a>
              </li>
               <li class="nav-item">
                <a class="nav-link" href="#"> Careers </a>
              </li>
               <li class="nav-item">
                <a class="nav-link" href="#"> Events </a>
              </li>
               <li class="nav-item">
                <a class="nav-link" href="#"> Blogs </a>
              </li>
               <li class="nav-item">
                <a class="nav-link" href="#"> Contact us </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      </div>
<hr/>
     <div class="container">
         <div class="d-flex justify-content-end">
         <ul class="nav sm-l">
           
            <li class="nav-item">
              <a href="" class="nav-link"> <i class="fab fa-github"></i> </a>
            </li>
             <li class="nav-item">
              <a href="" class="nav-link"> <i class="fab fa-youtube"></i> </a>
            </li>
             <li class="nav-item">
              <a href="" class="nav-link"> <i class="fab fa-facebook"></i> </a>
            </li>
            <li class="nav-item">
              <a href="" class="nav-link"> <i class="fab fa-twitter"></i> </a>
            </li>
         </ul>
      </div> 
      </div>
    </footer>
</template>

<script>
export default {
  name: "Home",
  components: {}
};
</script>
<style scoped>
footer {
  padding-top: 64px;
  background: #ada996; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to right,
    #eaeaea,
    #dbdbdb,
    #f2f2f2,
    #ada996
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to right,
    #eaeaea,
    #dbdbdb,
    #f2f2f2,
    #ada996
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  padding-bottom: 16px;

  height: auto;
  width: 100%;
  margin-top: 45px;
}

.fc {
  padding: 10px;
  margin-left: 45px;
}

.fte > li > a.nav-link {
  display: block;
  padding: 2px;
  padding: 4px 2px;
  font-size: 15px;
  font-family: "Open Sans", sans-serif;
  font-weight: 600;
  color: #616161;
}

h4.fh {
  font-size: 17px;
  font-weight: 600;
  color: #828283;
}

hr {
  background: #dfe1e5;
  border: 0;
  height: 2px;
  margin: 10px 100px;
  padding: 0;
}

ul.sm-l > li > a {
  font-size: 25px;
  color: #fff;
}
</style>