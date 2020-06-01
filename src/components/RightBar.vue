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
  position: fixed;
  width: 10px;
  height: auto; 
  display: flex;
  clear: both;
  left:0;
  padding:0;
  top:0px;
	width: 100%;
  height: 80px;
  align-items: center;
  justify-content: center;
  
    }
    img{
      width: 100px;
      height: auto;
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