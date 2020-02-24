<template>
  <div>
    <h2>POSŁUCHAJ SOBIE NA:</h2>
     <p v-bind:style="[Items.white, Items.red ? Items.red: ''  ]">
     <span>{{Items.red.t}}</span>
     <span>{{Items.white.t}}</span>
     </p>

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
                red:{t: "asaaa", color:'red',isB: false}
                
                }
}
}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.red{
  color:red;
}
.black{
  color:black;
}
div{
  position:absolute;
  top: 300px;
  right:10%;
  padding:20px 10px;
  width: 300px;
  height: 250px;
  background: rgba(0,0,0,0.6);

  border-radius: 58px 58px 58px 58px;
-moz-border-radius: 58px 58px 58px 58px;
-webkit-border-radius: 58px 58px 58px 58px;
border: 1px solid #383838;
 
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