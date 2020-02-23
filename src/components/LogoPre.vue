<template>
  <div>
      <img id="logoTravel" alt="logo-red" src="../assets/logo_red_svg.svg">
  </div>
</template>

<script>
export default {
  name: 'LogoPre',
  props: {
    msg: String
  },
    
}

</script>

<style scoped>
div{
 
  top:200px;
  left:0px;
  width: 100%;
  height:40px;
 border:solid;
 border-color:red;  
}   

img{
  float: left;
position: relative;
    left:80px;

  height: 40px;
  width: 100%;
  margin-left:-50%;
  pading:0;
}
#logoTravel{
  animation: droga 5s;
}

@keyframes droga
{
  0% { transform:translateX(0) scale(1); }
  100% { transform:translateX(90%) scale(1); }
}

</style>