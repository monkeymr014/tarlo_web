<template>
  <div class="rightbar">
      <img alt="logo-red" src="../assets/logo_red_svg.svg">
  </div>
</template>

<script>
export default {
  name: 'RightBar',
  props: {
    msg: String
  },
    
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  @media  (max-width:1024px) {
div{
  display: none;
    }
  }


@media (min-width: 1024px){ 
  img{
  max-width: 100%;
  width: 60%;
  height: auto;
  margin: 0;
  }
  div{
  right:100px;
  width: 230px;
  padding:10px;
  position:fixed;
  top:130px;
  right:0%;
  width: 400px;
  height: 200px;
  text-align:center;
}   
}



</style>