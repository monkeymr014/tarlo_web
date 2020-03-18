<template>
  <div>
    <div  @mouseover="growvideo = true" @mouseleave="growvideo = false"  :class="{grow: growvideo}" id="video">KRONIKA FILMOWA</div>
  </div>
</template>

<script>

export default {
name: 'Video',
  data() {
    return {
      growvideo: false,
    }
  }
}
</script>

<style lang="scss" scoped>

.grow{
  transform: scale(1.05); 
  z-index:9;
  overflow: hidden;
}

#video{
  position:relative;
  background: rgba(0,0,0,0.6);
  border-radius: 58px 58px 58px 58px;
  -moz-border-radius: 58px 58px 58px 58px;
  -webkit-border-radius: 58px 58px 58px 58px;
  border: 1px solid #383838;
  padding:50px 0 0 0;
  margin:0px;
  width:250px;
  height:180px;
  top:0px;
}
</style>
