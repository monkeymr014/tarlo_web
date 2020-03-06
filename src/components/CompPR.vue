<template>
  <div id="content" >
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
       <pdf
            ref="myPdfComponent"
            src="https://cdn.mozilla.net/pdfjs/tracemonkey.pdf"
        ></pdf>
    </div>
  </div>
</template>
1
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
  filter: blur(0.9px) brightness(0.9);  

}

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

div {
  border: 6px solid white;
  border-radius: 40px;
  position:absolute;
  margin:1% 1% 1% 1% ;
  width:35%;
  height:40%;
  overflow: hidden;

}

span{
  position: absolute;
  padding:0px;
  left:0;
  width:100%;
  height:auto;
  color:white;
  font-size:37px;
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
  
  
}

#riderin{
left:50%;
top:53%;
 
}


#content{
  border:none;
  position:fixed;
  left:18%;
  width:50%;
  height:50%;
  top:30%;
    overflow: visible;
  

  
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

</style>
