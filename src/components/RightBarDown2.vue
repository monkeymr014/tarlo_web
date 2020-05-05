<template>
  <div>
    <h2>POSŁUCHAJ SOBIE NA:</h2>
      <a target="_blank" href="https://music.apple.com/pl/album/prolog-single/1484447071?app=music&ign-mpt=uo%3D4">
        <img @mouseover="growit = true" @mouseleave="growit = false"  :class="{grow: growit}" alt="tarło_itunes" src="../assets/ico/itunes.svg">
      </a>
    <br/>
      <a target="_blank" href="https://open.spotify.com/album/6Rt14PX4Mo4q4qqGbFe624">
        <img @mouseover="growspo = true" @mouseleave="growspo = false"  :class="{grow: growspo}" alt="tarło_spotify" src="../assets/ico/spotify.png">
      </a>
  </div>
</template>

<script>
export default {
  name: 'RightBarDown',
  props: {
    msg: String

  },
   data() {
    return{
      growspo:false,
      growit:false,
    }
  }

}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>

.grow{
  transform: scale(1.05); 
}

h2{
  color:white;
}

div{
@media (min-width: 1024px){ 
  right:60px;
  width: 200px;
  height: 190px;
  font-size:12px;
  }
@media (min-width: 1226px){ 
  right:100px;
  width: 230px;
  height: 210px;
  font-size:14px;
  }
  position:absolute;
  top: 200px;
  padding:10px 10px;
  background: rgba(0,0,0,0.6);
  text-align: center;
  border-radius: 58px 58px 58px 58px;
  -moz-border-radius: 58px 58px 58px 58px;
  -webkit-border-radius: 58px 58px 58px 58px;
  border: 1px solid #383838;
}   

img{
  width:190px;
  height:auto;
  padding:5px;

}
</style>