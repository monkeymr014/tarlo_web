<template>
  <div id="con" >
    <h2>Dział w budowie</h2>
</div>
</template>

<script>



export default {
name: 'Buy',

}
</script>

<style lang="scss" scoped>
@media (max-width: 1024px){ 

div{
  text-align:center;
  font-size:37px;
  color:white;
}



#con{
  position:relative;
  left:2%;
  width:95%;
  height:100%;
  top:120px;
  padding:0;
  margin:0;
  display:flex;
  flex-wrap: wrap;
  flex-direction: row-reverse;
  align-items: center;
  justify-content: center;
  border:solid red;
}
}
@media (min-width: 1024px){ 

div{
  text-align:center;
  font-size:37px;
  color:white;
}



#con{
  position:relative;
  left:2%;
  width:70%;
  height:80%;
  top:120px;
  padding:0;
  margin:0;
  display:flex;
  flex-wrap: wrap;
  flex-direction: row-reverse;
  align-items: center;
  justify-content: center;
  border:solid red;
}
}


</style>
