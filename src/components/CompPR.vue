<template>
  <div id="content" >
    <span @mouseover="hover = true" @mouseleave="hover = false" id="prespack" >asdasds</span>
        <span id="riderout" >asdasds</span>
    <span id="presinfo" >asdasds</span>
    <span id="riderin" v-if="hover">This is a secret message.</span>

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
      hover: false,
    };
  }
  

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

span {
  border: 6px solid white;
  border-radius: 40px;
  position:absolute;
  margin:20px 20px 20px 20px;
  width:220px;
  height:140px;
  padding:10px;

}

#prespack{
 left:0px;
  
}
#presinfo{
 left:0px;
 top:50%; 
}

#riderout{
left:50%;
}

#riderin{
left:50%;
top:50%
}

#content{
  position:fixed;
  left:15%;
  width:600px;
  height:400px;
  top:30%;
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
