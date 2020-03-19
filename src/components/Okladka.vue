<template>
  <div id="content" >
            <img alt="logo-red" src="../assets/okladka-min.jpg">
            <div id="album">
            <p><span>Prolog</span>
            <p>Łysybył</p>
            <p>Czy warto</p>
            <p>List</p></p>
</div>
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

#album{
  position:absolute;
  background: rgba(0,0,0,0.8);
  width:auto;
  height:auto;
  top:280px;
  padding:0px 10px;
  background: rgba(0,0,0,0.8);
    border:  solid red;

}




#content{
    display: flex;

  position:relative;
  left:2%;
  width:28%;
  margin:0;
  padding:0;
  height:auto;
  top:120px;;
   align-items: center;
  justify-content: center;
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
  font-size:28px;
  padding:0;
  margin:-15px 0 0 0 ;
 
}

span{
  text-align:center;
  padding:0 0 0 0;
  color:red;
  font-size:45px;
}

</style>
