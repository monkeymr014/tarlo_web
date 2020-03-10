<template>
  <div id="con" >
    <div @mouseover="hover1 = true" @mouseleave="hover1 = false" :class="{hovering: hover1}" id="prespack">
      <img  src="../assets/pr/press-pack.jpg"/>
      <span>PRESS <br/> PACK <br/> DO POBRANIA</span>
    </div>
    <div @mouseover="hover2 = true" @mouseleave="hover2 = false" :class="{hovering: hover2}" id="riderout">
      <img  src="../assets/pr/rider-club.jpg"/>
      <span>RIDER <br/> TECHNICZNY <br/>KLUB</span></div>
    <div @mouseover="hover3 = true" @mouseleave="hover3 = false" :class="{hovering: hover3}" id="presinfo">
      <img  src="../assets/pr/news-pres.jpg"/>
      <span>A TAK JUŻ <br/> PISALI O TARŁO <br/> NA PORTALCH</span>
    </div>
    <div @mouseover="hover4 = true" @mouseleave="hover4 = false" :class="{hovering: hover4}" @click="logContent" id="riderin">
      <img  src="../assets/pr/rider-plenr.jpg"/>
      <span>RIDER <br/> TECHNICZNY <br/>PLENER</span>
    </div>
    
  </div>
</template>

<script>

import pdf from 'vue-pdf'

export default {
  name: 'CompPR',
  props: {
    msg: String

  },
   components: {
        pdf
        },
   data() {
    return {
      hover1: false,
      hover2: false,
      hover3: false,
      hover4: false,
    };
  },
methods: {
        logContent() {
            this.$refs.myPdfComponent.pdf.forEachPage(function(page) {
                return page.getTextContent()
                .then(function(content) {
                    var text = content.items.map(item => item.str);
                    console.log(text);
                })
            });
        }
    }
}
</script>

<style lang="scss" scoped>

img {
  height: 100%;
  width: 100%;
  top: 0;
  bottom: 0;
  left: 0px;
  position: absolute;
  filter: blur(0.9px) brightness(0.6);  
}

.hovering{
  transform: scale(1.08); 
  
}

div {
 position:relative;
  background: rgba(0,0,0,0.6);
  border-radius: 58px 58px 58px 58px;
  -moz-border-radius: 58px 58px 58px 58px;
  -webkit-border-radius: 58px 58px 58px 58px;
  border: 1px solid #383838;
  padding:20px 0 0 0;
  width:250px;
  height:180px;
  position:absolute;
  margin:1% 1% 1% 1% ;
  overflow: hidden;
}

span{
  position: absolute;
  padding:0px;
  left:0;
  width:100%;
  height:auto;
  color:white;
  font-size:30px;
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
  left:32%;  
}

#riderin{
left:32%;
top:53%;
 
}

#con{
  border:none;
  background:none;
  position:fixed;
  left:18%;
  width:50%;
  height:50%;
  top:25%;
  overflow: visible;
}

p{
  background: rgba(0,0,0,0.6);
  text-indent: 0%; 
  padding:2%;
  margin: 0 auto ;
  right: 40%;
  font-size: 25px;
  color:white;
}

</style>
