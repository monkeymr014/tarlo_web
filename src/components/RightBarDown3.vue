<template>
  <div>
      <span v-bind:style="[Items.red]">Produkcja muzyczna:</span><span> Maciek Gładysz</span><br/>
      <span v-bind:style="[Items.red]">Mix:</span><span> Marcin Gajko</span> <br/>
      <span v-bind:style="[Items.red]">Mastering:</span>
      <span>„Łysybył”, „Czy warto”  Michał Eprom Baj;  <br/>
                    „List” – Leszek Kamiński</span><br/>
      <span v-bind:style="[Items.red]">Realizacja nagrań perkusji:</span><span> Wojtek Olszak</span><br/>
      <span v-bind:style="[Items.red]">Realizacja nagrań gitar i vocalu:</span><span> Maciek Gładysz</span>
  </div>
</template>

<script>
export default {
  name: 'RightBarDown3',
  props: {
    msg: String
  },
   data() {
    // return { imgPath: require("statics/reports/logo.png") };
    return {
    
    
          Items:{ 
            
                white:{t: "as", color:'white',isA: true},
                red:{color:'red'}
                
                }
}
}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>


@media (max-width: 1024px){ 
div{
  display:none;
}
}


@media (min-width: 1024px){ 

h2{
  color:white;
  text-align: center;
}


div{
  position:fixed;
  top:32%;
  right:30%;
  padding:20px;
  padding-top:26px;
  width: 500px;
  height: auto;
  background: rgba(0,0,0,0.8);
  border-radius: 58px 58px 58px 58px;
  -moz-border-radius: 58px 58px 58px 58px;
  -webkit-border-radius: 58px 58px 58px 58px;
  border: 1px solid #383838;
}

span{ 

  font-size:18px;
 color:white;
 padding:0px;
}

img{
  width:170px;
  height:auto;
  padding:5px;

}
}
</style>