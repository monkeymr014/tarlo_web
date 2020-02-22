<template>
  <div class="rightbar">
      <img alt="logo-red" src="../assets/logo_red_svg.svg">
    <h4>{{ value[0] }}</h4></br>
    <h4>{{ value[1] }}</h4>
  </div>
</template>

<script>
export default {
  name: 'RightBar',
  props: {
    msg: String
  },
   data() {
    return {
      value:[ "ara","asd" ]
    }
}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
div{
  position:absolute;
  right:80px;
  width: 400px;
  height: 500px;
}

img{
  max-width: 60%;
  height: auto;
   margin: 0;
    position: absolute;
    top: 20%;
    left: 20%;
    margin-right: -20%;
    transform: translate(-20%, -50%) ;
}
h4 { 
  color:black;
  margin:  0;
  position: absolute;
  left:10%;
  bottom: 0;
  width: 100%;
  height: 60px;	
    }	
p {
  text-indent: 10%; 
  padding: 1%;
  margin: 0 10px;
  color:red;
  position: absolute;
  right: 60%;
}
</style>