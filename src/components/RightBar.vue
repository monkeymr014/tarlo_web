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
<style scoped>
div{
  position:fixed;
  top:200px;
  right:0%;
  width: 400px;
  height: 200px;
  
}   

img{
  max-width: 60%;
  height: auto;
   margin: -50px;
    position: absolute;
    top: 20%;
    left: 20%;
    margin-right: -20%;
    transform: translate(-20%, -50%) ;

}

</style>