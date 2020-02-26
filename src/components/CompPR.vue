<template>
  <div id="content" >
    <span @mouseover="hover1 = true" @mouseleave="hover1 = false" :class="{hovering: hover1}" id="prespack">asdasds</span>
    <span @mouseover="hover2 = true" @mouseleave="hover2 = false" :class="{hovering: hover2}" id="riderout">asdasds</span>
    <span @mouseover="hover3 = true" @mouseleave="hover3 = false" :class="{hovering: hover3}" id="presinfo">asdasds</span>
    <span @mouseover="hover4 = true" @mouseleave="hover4 = false" :class="{hovering: hover4}" id="riderin">RIDER <br/> TECHNICZNY <br/> KLUB</span>
  </div>
</template>
1
<script>
export default {
  name: 'CompPR',
  props: {
    msg: String
  },
   data() {
    return {
      hover1: false,
      hover2: false,
      hover3: false,
      hover4: false,
    };
  }
}
</script>

<style scoped>


.hovering{
  background: black;
   border: 6px solid white;
  border-radius: 40px;
  position:absolute;
  margin:0px 0px 0px 0px;
  width:40%;
  height:45%;
  padding:10px;
}

span {
  background: black;
  border: 4px solid white;
  border-radius: 40px;
  position:absolute;
  margin:20px 20px 20px 20px;
  width:35%;
  height:40%;
  padding:10px;
  color:white;
  font-size:50px;
  text-align:center;
}

#prespack{
 left:0px;
  
}
#presinfo{
 left:0px;
 top:53%; 
}

#riderout{
  left:50%;
  background-image: url(./../assets/pr/rider-plenr.jpg);
  background-position: center;
  background-repeat: no-repeat;
  background-size: 110%;  
  background-attachment: absolute;
    opacity: 0.9;
}

#riderin{
left:50%;
top:53%;
  background-image: url(./../assets/pr/rider-club.jpg);
  background-position: center;
  background-repeat: no-repeat;
  background-size: 110%;  
  background-attachment: absolute;
  -webkit-filter: blur(0.8px);
-moz-filter: blur(0.8px);
-o-filter: blur(0.8px);
-ms-filter: blur(0.8px);
filter: blur(0.8px);
-webkit-filter: brightness(0.8);
-moz-filter: brightness(0.8);
-o-filter: brightness(0.8);
-ms-filter: brightness(0.8);
filter: brightness(0.8);
}


#content{
  position:fixed;
  left:18%;
  width:50%;
  height:50%;
  top:30%;
  
}
p {
background: rgba(0,0,0,0.6);
  text-indent: 0%; 
  padding:2%;
  margin: 0 auto ;
  color:red;
  right: 40%;
  font-size: 25px;
  color:white;
}
</style>
