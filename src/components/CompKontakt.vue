<template>
  <div >
    <p>tarloband@gmail.com</p>
    <p>fb: tarlorockband ǀ yt: TARŁO ǀ www.tarlo.pl</p>
    <p>+48 728 306 334</p>
  </div>
</template>
1
<script>
export default {
  name: 'CompKontakt',
  props: {
    msg: String
  }
  

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
div{
  position:fixed;
  left:20%;
  width:500px;
  top:30%;
  border:red;
}
p {
background: rgba(0,0,0,0.6);
  text-indent: 0%; 
  padding:2%;
  margin: 0 auto ;
  color:red;

  right: 40%;
  font-size: 25px;
  color:white;
}
</style>
