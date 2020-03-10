<template>
  <div id="content" >
            <img alt="logo-red" src="../assets/okladka.jpg">
            <p><span>Prolog</span><br/>
            Łysybył<br/>
            Czy warto<br/>
            List</p>

  </div>
</template>
1
<script>
export default {
  name: 'CompPR',
  props: {
    msg: String
  },
   data() {
    return {
      hover1: false,
      hover2: false,
      hover3: false,
      hover4: false,
    };
  }
}
</script>

<style lang="scss" scoped>

div{
  position:fixed;
  left:2%;
  width:28%;
  height:50%;
  top:30%;
}

img{
  margin:0% 15% 0% 15%; 
  padding:auto;
  width:70%; 
  height:auto;
}

p{
  text-align:center;
  color:red;
  font-size:30px;
  padding:0;
  margin:0;
}

span{
  text-align:center;
  padding:0;
  color:red;
  font-size:45px;
}

</style>
