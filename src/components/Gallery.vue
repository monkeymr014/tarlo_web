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
name: 'Gallery',
 components: {
    Video,Foto
  }

}
</script>

<style lang="scss" scoped>

@media (max-width: 1024px){ 
div{
  text-align:center;
  font-size:30px;
  color:white;
}


#con{
  position:fixed;
  left:2%;
  width:90%;
  height:200px;
  top:50px;
  padding:0;
  margin:0;

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
  left:8%;
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
}
</style>
