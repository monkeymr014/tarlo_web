<template>
  <div id="con" >
  <Gadzet/>
  <Plyta/>
</div>
</template>

<script>
import Gadzet from '@/components/Gadzet.vue'
import Plyta from '@/components/Plyta.vue'


export default {
name: 'Buy',
 components: {
    Gadzet,Plyta
  }
}
</script>

<style lang="scss" scoped>
div{
  text-align:center;
  font-size:37px;
  color:white;
}



#con{
  position:relative;
  left:10%;
  width:700px;
  height:300px;
  top:120px;
  padding:0;
  margin:0;
  display:flex;
  flex-wrap: wrap;
  flex-direction: row-reverse;
  align-items: center;
  justify-content: center;
}



</style>
