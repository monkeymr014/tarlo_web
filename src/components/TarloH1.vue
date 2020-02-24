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
  position: relative;
  top:10px;
  text-indent: 15%; 
  color:red;
  margin: 0;
  font-size: 48px;
}

</style>
