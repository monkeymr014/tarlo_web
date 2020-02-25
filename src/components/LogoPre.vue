<template>
  <div>
    <img id="d1" src="../assets/historia/droga/1.png">
    <img id="d2" src="../assets/historia/droga/2.png">
    <img id="d3" src="../assets/historia/droga/3.png">

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
  height:100%;
 border:solid;
 border-color:red;  
}   
 #d1 {
  position: fixed;
  top:30%;
  left:0%;
  height: 5%;
  width: 5%;
}

 #d2 {
  position: fixed;
  top:31.2%;
  left:5%;
  height: 5%;
  width: 5%;
}
#d3 {
  position: fixed;
  top:35%;
  left:9%;
  height: 5%;
  width: 5%;
}




#logoTravel{
  float: left;
position: relative;
    left:80px;

  height: 40px;
  width: 100%;
  margin-left:-50%;
  pading:0;


  animation: droga 5s;
}

@keyframes droga
{
  0% { transform:translateX(0) scale(1); }
  100% { transform:translateX(90%) scale(1); }
}

</style>