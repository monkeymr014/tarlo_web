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

<style lang="scss" scoped>

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
  left:-40%;
  top:0;
  bottom:0;
  height: 60px;
  width: 90%;
  margin: 0 auto;
  padding:0;
  animation: droga 12s ;
  animation-delay: 2s;
}

@keyframes droga
{
    0% { transform:translateX(0) translateY(0%) scale(1); }
    60% { transform:translateX(90%) translateY(100%) scale(1); }
    60% { transform:translateX(90%)  scale(1);  }
    85% { transform:translateX(50%)  scale(10); top:50%; }
    100% { transform:translateX(50%)   scale(10); top:50%; }

}

</style>