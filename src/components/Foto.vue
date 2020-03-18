<template>
  <div>
      <gallery :images="images"  :index="index" @close="index = null"   ></gallery>
        <div  @click="index = imageIndex"   @mouseover="growvideo = true" @mouseleave="growvideo = false"  :class="{grow: growvideo}" id="foto">
        KRONIKA ZDJĘCIOWA
      </div>
    </div>
</template>

<script>

import VueGallery from 'vue-gallery';
export default {
name: 'Video',
  data() {
    return {
      
      growvideo: false,

  images: [
          'https://scontent.xx.fbcdn.net/v/t1.0-9/84000770_2387486251563365_5620931817486942208_o.jpg?_nc_cat=102&_nc_sid=8024bb&_nc_oc=AQmG_VwHvD_AuMqBvQlkcbV0EnECpC5GAof4DIwlbKOWd3xKEXh2YhcfpraADMWgv4E&_nc_ht=scontent.xx&oh=881778573fa195fde55e0149ab38ba74&oe=5E915A5C'   ,    
          'https://scontent.xx.fbcdn.net/v/t1.0-9/84000770_2387486251563365_5620931817486942208_o.jpg?_nc_cat=102&_nc_sid=8024bb&_nc_oc=AQmG_VwHvD_AuMqBvQlkcbV0EnECpC5GAof4DIwlbKOWd3xKEXh2YhcfpraADMWgv4E&_nc_ht=scontent.xx&oh=881778573fa195fde55e0149ab38ba74&oe=5E915A5C'       

        ],
        index: null
    }
  },

 components: {
      'gallery': VueGallery,
    }
}
</script>

<style lang="scss" scoped>
.grow{
  transform: scale(1.05); 
}

.image {
    float: left;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    border: 1px solid #ebebeb;
    margin: 5px;
  }

#foto{
    position:relative;
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
