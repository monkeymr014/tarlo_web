<template>
  <div>
    <h2>POSŁUCHAJ SOBIE NA:</h2>
     <a target="_blank" href="https://music.apple.com/pl/album/prolog-single/1484447071?app=music&ign-mpt=uo%3D4"> <img alt="logo-red" src="../assets/ico/itunes.svg"></a>
     <br/>
     <a target="_blank" href="https://open.spotify.com/album/6Rt14PX4Mo4q4qqGbFe624"> <img alt="logo-red" src="../assets/ico/spotify.png"></a>
 
  </div>
</template>

<script>
export default {
  name: 'RightBarDown',
  props: {
    msg: String
  },
   data() {
    
    // return { imgPath: require("statics/reports/logo.png") };
    return {wojtek:"Veddie Hare – gitara śpiew teksty",
            michal:"Michał Ruszkiewicz – perkusja",
            seba:"Sebastian Pokojowy – bas",
            rafal:"Rafał Wielgosz – gitara teksty",
            maciek:"Gościnnie: Maciek Gładysz"
            }
  },

}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h2{
  color:white;
}
div{
  position:absolute;
  top: 300px;
  right:0%;
  width: 400px;
  height: 200px;
 
}   

p{ 
  font-size:20px;
 color:white;
}

img{
  width:170px;
  height:auto;
  padding:5px;

}
</style>