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
<style scoped>

h1 {
  background-color: black;
  position: fixed;
  text-align: left;
  color:red;
  margin: 0 auto;
  padding:0px;
  font-size: 60px;
  }
div{
  position:absolute;
  top:15%;
  left:20%;
  margin-top:10px;
}

</style>
