<template>
  <div>
    <table>
      <tr>
        <td class="red">poczta:</td>
        <td><span>|</span>tarloband@gmail.com</td>
      </tr>
      <tr>
        <td class="red">fb:</td>
        <td><span>|</span>tarlorockband</td>
      </tr>
      <tr>
        <td class="red">yt:</td>
        <td><span>|</span>TARŁO</td>
      </tr>
      <tr>
        <td class="red">www:</td>
        <td><span>|</span>www.tarlo.pl</td>
      </tr>    
      <tr>
        <td class="red">tel:</td>
        <td><span>|</span>+48 728 306 334</td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: 'CompKontakt',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@media (max-width: 1024px){ 


 td {
 padding:3px 2px 0 0 ;
}
.red{
  font-size: 20px;
  color:red;
}
span{
 color: #383838;
 padding:3px
}
div{
  position:relative;
  left:2%;
  width:80%;
  top:120px;
  background: rgba(0,0,0,0.9);
  border-radius: 58px 58px 58px 58px;
  -moz-border-radius: 58px 58px 58px 58px;
  -webkit-border-radius: 58px 58px 58px 58px;
  border: 1px solid #383838;
  padding: 20px;
  font-size: 15px;
  color:white;

}

p{
  margin: 0  ;
  color:red;
  right: 40%;
  font-size: 40px;
  color:white;
}
}
@media (min-width: 1024px){ 


 td {
 padding:0px 20px 0 0 ;
}
.red{
  font-size: 40px;
  color:red;
}
span{
 color: #383838;
}
div{
  position:relative;
  left:16%;
  width:580px;
  top:120px;
  background: rgba(0,0,0,0.9);
  border-radius: 58px 58px 58px 58px;
  -moz-border-radius: 58px 58px 58px 58px;
  -webkit-border-radius: 58px 58px 58px 58px;
  border: 1px solid #383838;
  padding: 20px;
  font-size: 40px;
  color:white;

}

p{
  margin: 0  ;
  color:red;
  right: 40%;
  font-size: 40px;
  color:white;
}
}
</style>
