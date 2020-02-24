<template>
  <div class="rightbardown">
    <p>{{wojtek}} <br/> {{michal}} <br/> {{seba}} <br/> {{rafal}} <br/> </p>
    <p>{{maciek}}</p>
    

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
div{
  position:absolute;
  top: 400px;
  right:0%;
  width: 400px;
  height: 200px;
}   

p{ 
  font-size:20px;
 color:white;
}

</style>