<template>
  <div id="con" >
    <Video/>
    <Foto/>
</div>
</template>

<script>
import Video from '@/components/Video.vue'
import Foto from '@/components/Foto.vue'

export default {
name: 'Galery',
 components: {
    Video,Foto
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
  left:8%;
  width:700px;
  height:300px;
  top:120px;
  padding:0;
  margin:0;
  border:solid;
  border-color:red;
  display:flex;
  flex-wrap: wrap;
  flex-direction: row-reverse;
  align-items: center;
  justify-content: center;
}
</style>
