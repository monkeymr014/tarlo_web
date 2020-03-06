<template>
  <div>
      <span v-bind:style="[Items.red]">Produkcja muzyczna:</span><span> Maciek Gładysz</span><br/><br/>
      <span v-bind:style="[Items.red]">Mix:</span><span> Marcin Gajko</span> <br/><br/>
      <span v-bind:style="[Items.red]">Mastering:</span>
      <span>„Łysybył”, „Czy warto”  Michał Eprom Baj;  <br/>
            „List” – Leszek Kamiński</span><br/><br/>
      <span v-bind:style="[Items.red]">Realizacja nagrań perkusji:</span><span> Wojtek Olszak w Woobie Doobie Studio</span><br/><br/>
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
h2{
  color:white;
  text-align: center;
}


div{
  position:fixed;
  top:32%;
  right:35%;
  padding:20px;
  padding-top:50px;
  width: 400px;
  height: 250px;
   background: rgba(0,0,0,0.6);

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
</style>