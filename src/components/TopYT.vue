<template>
  <div class="rightbar">
    <a target="_blank" href="https://www.youtube.com/channel/UCAK10cFtn2SoFgZu-TsP1Tg">
      <img alt="logo-red" src="../assets/socialmedia/yt/yttop.png">
    </a>
  </div>
</template>

<script>
export default {
  name: 'TopYT',
  props: {
    msg: String
  },
    
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>

div{
  position:fixed;
  top:15px;
  left:1.5%;
  width: 9%;
  height: 100px;
}   

img{
  max-width: 80%;
  height: auto;
  position: absolute;
}

</style>