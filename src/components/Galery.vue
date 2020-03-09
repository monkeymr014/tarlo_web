<template>
  <div id="con" >
    <gallery :images="images" :index="index" @close="index = null"  id="gallery" ></gallery>
    <div @mouseover="growvideo = true" @mouseleave="growvideo = false"  :class="{grow: growvideo}" id="video">KRONIKA FILMOWA
    </div>
    <div @click="index = imageIndex" :style="{ backgroundImage: 'url(' + image + ')',  }" @mouseover="growfoto = true" @mouseleave="growfoto = false"  :class="{grow: growfoto}" id="foto">KRONIKA ZDJĘCIOWA</div>
  </div>
</template>

<script>

import VueGallery from 'vue-gallery';

export default {
name: 'Galery',
  data() {
    return {
      growfoto: false,
      growvideo: false,

  images: [
          'https://dummyimage.com/800/ffffff/000000',
          'https://dummyimage.com/1600/ffffff/000000',
          'https://dummyimage.com/1280/000000/ffffff',
          'https://dummyimage.com/400/000000/ffffff',
        ],
        index: null

    }
  },

 components: {
      'gallery': VueGallery
    }


}
</script>

<style lang="scss" scoped>
.grow{
  transform: scale(1.05); 
  z-index:9;
    overflow: hidden;

}
div{
  text-align:center;
  font-size:37px;
  color:white;
   z-index:8;
    overflow: hidden;

}

#gallery{
   z-index:9;
    overflow: hidden; 
}

#con{
  position:relative;
  left:8%;
  width:700px;
  height:300px;
  top:120px;
  padding:0;
  margin:0;
  border:solid;
  border-color:red;
  display:flex;
  flex-wrap: wrap;
  flex-direction: row-reverse;
  align-items: center;
  justify-content: center;
}

#foto{
  background: rgba(0,0,0,0.6);
  border-radius: 58px 58px 58px 58px;
  -moz-border-radius: 58px 58px 58px 58px;
  -webkit-border-radius: 58px 58px 58px 58px;
  border: 1px solid #383838;  
  padding:50px 0 0 0;
  margin:0px;
  width:250px;
  height:180px;
  top:0px;
  z-index:8;
    overflow: hidden;
}

#video{
  background: rgba(0,0,0,0.6);
  border-radius: 58px 58px 58px 58px;
  -moz-border-radius: 58px 58px 58px 58px;
  -webkit-border-radius: 58px 58px 58px 58px;
  border: 1px solid #383838;
  padding:50px 0 0 0;
  margin:0px;
  width:250px;
  height:180px;
  top:0px;
}
</style>
