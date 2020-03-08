<template>
  <div id="con" >
    <div @mouseover="growvideo = true" @mouseleave="growvideo = false"  :class="{grow: growvideo}" id="video">KRONIKA FILMOWA</div>
    <div @mouseover="growfoto = true" @mouseleave="growfoto = false"  :class="{grow: growfoto}" id="foto">KRONIKA ZDJĘCIOWA</div>
  </div>
</template>

<script>
export default {
  name: 'Galery',
  data() {
    return {
      growfoto: false,
      growvideo: false
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.grow{
  transform: scale(1.05); 
}
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

#foto{
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

#video{
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
