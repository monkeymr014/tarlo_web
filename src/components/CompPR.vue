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
  width:38%;
  height:40%;
  padding:10px;
  color:red;
  font-size:42px;
  text-align:center;
}

span {
  background: black;
  border: 4px solid white;
  border-radius: 40px;
  position:absolute;
  margin:1% 1% 1% 1% ;
  width:35%;
  height:40%;
  padding:10px;
  color:white;
  font-size:38px;
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
  background-image :linear-gradient(black, black), url(./../assets/pr/rider-plenr.jpg);
  background-position: center;
  background-repeat: no-repeat;
    background-blend-mode: saturation;

  background-size: 120%;  
  background-attachment: absolute;
    opacity: 0.9;
}

#riderin{
left:50%;
top:53%;
  background-image: url(./../assets/pr/rider-club.jpg);
  background-position: center;
  background-repeat: no-repeat;
  background-size: 120%;  
  background-attachment: absolute;

  


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
  right: 40%;
  font-size: 25px;
  color:white;
}
img {
  filter: grayscale(100%);
}
</style>
