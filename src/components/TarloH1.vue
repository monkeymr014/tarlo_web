<template>
  <div>
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: 'TarloH1',
  props: {
    msg: String
  }
  

}
</script>
<style  lang="scss" scoped>
@media (max-width: 1024px){ 
h1 {
  
  position: relative;
  text-align: left;
  color:white;
  margin: 0px, 30px, 0 ,0 ;
  padding:0px 0px;
  font-size: 30px;
  text-align: center;
  

  }


div{
  position: fixed;
  top:2px;
  width:100%;
  height:auto;
  left:0%;
  margin:0;
  padding:0px;
 
}
}
@media (min-width: 1024px){ 

h1 {
  background-color: black;
  position: relative;
  text-align: left;
  color:red;
  margin: 0px auto;
  padding:1px 10px;
  font-size: 60px;
  }


div{
  position:absolute;
  top:0;
  width:auto;
  height:auto;
  left:20%;
  margin:0;
  padding:0px;
  border:solid;
  border-color:red;
  
}
}

</style>
