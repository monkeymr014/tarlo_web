<template>
  <div >
    <p>tarloband@gmail.com</p>
    <p>fb: tarlorockband <br/> yt: TARŁO <br/> www.tarlo.pl</p>
    <p>tel: +48 728 306 334</p>
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
<style lang="scss" scoped>

div{
  position:relative;
  left:20%;
  width:600px;
  top:150px;
  border:red;
  background: rgba(0,0,0,0.6);
  border-radius: 58px 58px 58px 58px;
  -moz-border-radius: 58px 58px 58px 58px;
  -webkit-border-radius: 58px 58px 58px 58px;
  border: 1px solid #383838;
}

p{
  background: rgba(0,0,0,0.6);
  text-indent: 0%; 
  padding:2%;
  margin: 0 auto ;
  color:red;
  right: 40%;
  font-size: 40px;
  color:white;
}

</style>
