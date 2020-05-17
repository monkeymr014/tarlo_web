<template>
  <div id="con" >
    <div @click="downloadWithVueResource" @mouseover="hover1 = true" @mouseleave="hover1 = false" :class="{hovering: hover1}" id="prespack">
    <span>PRESS PACK<br/> DO <br/>POBRANIA</span>
    </div>
    <div @click="downloadWithAxios" @mouseover="hover2 = true" @mouseleave="hover2 = false" :class="{hovering: hover2}" id="riderout">
      <span>RIDER <br/> TECHNICZNY <br/>KLUB</span></div>
    <div @mouseover="hover3 = true" @mouseleave="hover3 = false" :class="{hovering: hover3}" id="presinfo">
      <span>A TAK JUŻ <br/> PISALI O TARŁO <br/> NA PORTALCH</span>
    </div>
    <div @mouseover="hover4 = true" @mouseleave="hover4 = false" :class="{hovering: hover4}" id="riderin">
      <span>RIDER <br/> TECHNICZNY <br/>PLENER</span>
    </div>    
  </div>
</template>

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
      url:'https://78.media.tumblr.com/tumblr_m39nv7PcCU1r326q7o1_500.png'
    };
  },


 methods: {
    
    forceFileDownload(response){
      const url = window.URL.createObjectURL(new Blob([response.data]))
      const link = document.createElement('a')
      link.href = url
      link.setAttribute('download', 'file.png') //or any other extension
      document.body.appendChild(link)
      link.click()
    },
    
    downloadWithVueResource() {
      
      this.$http({
        method: 'get',
        url: this.url,
        responseType: 'arraybuffer'
      })
      .then(response => {
        this.forceFileDownload(response)  
      })
      .catch(() => console.log('error occured'))
      
    },

    downloadWithAxios(){
      axios({
        method: 'get',
        url: this.url,
        responseType: 'arraybuffer'
      })
      .then(response => {
        
        this.forceFileDownload(response)
        
      })
      .catch(() => console.log('error occured'))
    }
 }
      




}
</script>

<style lang="scss" scoped>

img {
  height: 110%;
  width: auto;
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
  border: 2px solid black;
  padding:20px 0 0 0;
  width:220px;
  height:150px;
  position:absolute;
  margin:0;
  overflow: hidden;
  
}

span{
  position: absolute;
  padding:0px;
  left:0;
  width:100%;
  height:auto;
  color:white;
  font-size:28px;
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
  width:780px;
  height:450px;
  top:195px;
  overflow: visible;
}



</style>
