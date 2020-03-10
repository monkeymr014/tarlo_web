<template>
  <div id="con" >
    <div @mouseover="growgadget = true" @mouseleave="growgadget = false"  :class="{grow: growgadget}" id="gadget">KUP <br/> GADŻETA TARŁO</div>
    <div @mouseover="growcd = true" @mouseleave="growcd = false"  :class="{grow: growcd}" id="cd">KUP <br/> PŁYTĘ  EP</div>
</div>
</template>

<script>

export default {
name: 'Buy',
 data() {
    return { 
      growcd: false,
      growgadget: false
    }
  }
}
</script>

<style lang="scss" scoped>
div{
  text-align:center;
  font-size:37px;
  color:white;
}

.grow{
  transform: scale(1.05); 
  z-index:9;
    overflow: hidden;

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
#cd{
  background: rgba(0,0,0,0.6);
  border-radius: 58px 58px 58px 58px;
  -moz-border-radius: 58px 58px 58px 58px;
  -webkit-border-radius: 58px 58px 58px 58px;
  border: 1px solid #383838;

  width:250px;
  height:200px;
    text-align: center;
 display: flex;
  justify-content: center;
  align-items: center;

}

#gadget{
  position:relative;
  background: rgba(0,0,0,0.6);
  border-radius: 58px 58px 58px 58px;
  -moz-border-radius: 58px 58px 58px 58px;
  -webkit-border-radius: 58px 58px 58px 58px;
  border: 1px solid #383838;
  padding:2px 0 0 0;
  margin:17px;
  width:250px;
  height:200px;
  top:0px;
}
</style>
