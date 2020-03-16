<template>
  <div class="rightbardown">
    <ul>
      <li>
        <span class="red">{{wojtek.name}}</span>
        <span class="white"> - {{wojtek.play}}</span>
      </li>
      <li>
        <span class="red">{{michal.name}}</span>
        <span class="white"> - {{michal.play}}</span>
      </li>
      <li>
        <span class="red">{{seba.name}}</span>
        <span class="white"> - {{seba.play}}</span>
      </li>
      <li>
        <span class="red">{{wojtek.name}}</span>
        <span class="white"> - {{wojtek.play}}</span>
      </li>
      <li id="maciek">
        <span class="red">{{maciek.name}}</span>
        <span class="white"> - {{maciek.play}}</span>
      </li>
    </ul>
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
    return {
            wojtek:{
                    name:"Veddie Hare",
                    play:"gitara śpiew teksty"
                    },
            michal:{
                    name:"Michał Ruszkiewicz",
                    play:"perkusja"
                    },

            seba: {
                    name:"Sebastian Pokojowy",
                    play:" gitara basowa"
                  },
            rafal:{
                    name:"Rafał Wielgosz",
                    play:"gitara teksty"
                  },
            maciek:{
                    name:"Gościnnie:",
                    play:"Maciek Gładysz"
                  }
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
#maciek{
  padding:10px 0 0 0 ;
}
 .red{
   color:red;
   font-size:20px;
}
.white{
  color:white;
  font-size:18px;
}
div{
  position:absolute;
  top: 200px;
  padding:10px  ;
  right:2%;
  margin:0px;
  width: 360px;
  height: 200px;
  background: rgba(0,0,0,0.6);
  border-radius: 58px 58px 58px 58px;
  -moz-border-radius: 58px 58px 58px 58px;
  -webkit-border-radius: 58px 58px 58px 58px;
  border: 1px solid #383838;
}   
li{
  color:#666666;
  list-style:none;
  padding:-12px;
  margin:0;

}
</style>