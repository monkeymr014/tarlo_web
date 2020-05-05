<template>
  <div>
    <transition name="fade">
      <div v-if="show" id="gallery">
        <div id="albumcont" >
          <div v-on:click="show2 = !show2" id="album" v-for="(item, i) in album" :index="i" >
          <div >
             <img class="image" v-for="(image, i) in images" :src="image" @click="index = i">
            <vue-gallery-slideshow :images="images" :index="index" @close="index = null"></vue-gallery-slideshow>
            </div>
         
        </div>
        </div>
      <div v-on:click="cli" class="wrapper">
        <a href="#" class="close-button">
          <div class="in">
            <div class="close-button-block"></div>
            <div class="close-button-block"></div>
          </div>
          <div class="out">
            <div class="close-button-block"></div>
            <div class="close-button-block"></div>
          </div>
        </a>
        </div>      
      </div>   
    </transition>
        <div v-on:click="show = !show, Foto()"  @mouseover="growfoto = true" @mouseleave="growfoto = false"  :class="{grow: growfoto}" id="foto">
        KRONIKA ZDJĘCIOWA
      </div>
    </div>
</template>

<script>

import axios from 'axios';
import VueGallerySlideshow from 'vue-gallery-slideshow';


export default {
name: 'Foto',
  data() {
    return {
      growfoto: false,
      show:false,
      show2:false,
      album:[{
              name: 'Tarło',
              data:'as'
            },
            {
              name: 'Dupa' 
          }
            ],
    images: [
      'https://placem.at/places?w=800&h=800&random=1',
      'https://placem.at/places?w=800&h=600&random=1',
      'https://placem.at/places?w=1200&h=400&random=2',
      'https://placem.at/places?w=800&h=800&random=3',
      'https://placem.at/places?w=600&h=800&random=4',
      'https://placem.at/places?w=400&h=800&random=5',
      'https://placem.at/places?w=800&h=800&random=6',
      'https://placem.at/places?w=800&h=800&random=7',
      'https://placem.at/places?w=800&h=800&random=8',
      'https://placem.at/places?w=800&h=800&random=9',
      'https://placem.at/places?w=800&h=800&random=10'
    ],
    index: null

    }
  },
components: {
    VueGallerySlideshow
  },
methods:{
  cli: function (){
      if(this.show == true && this.show2 == true) {
        this.show2 = false
        }
        else if(this.show == true && this.show2 != true) {
          this.show = false
          };
    } 
  }
}
</script>

<style lang="scss" scoped>

img{
  height:100px;
  width:100px;
}

$button-size: 40px;
$close-width: ($button-size / 10);
.wrapper {
 position:relative;
 left:95%;
 top:5%;
  width: 100vw;
  height: 100vh;
}
.close-button {
  display: block;
  width: $button-size;
  height: $button-size;
  position: relative;
  overflow: hidden;
  > div {
    position: relative;
  }
  &-block {
    width: 40px;
    height: 20px;
    position: relative;
    overflow: hidden;
    &:before,
    &:after {
      content: '';
      position: absolute;
      bottom: 0;
      left: calc(55% - 4px);
      display: block;
      width: 4px;
      height: 25px;
      transform-origin: bottom center;
      background: white;
      transition: all ease-out 280ms;
    }
    &:last-of-type {
      transform: rotate(180deg);
    }
  }
  .in {
    .close-button-block {
      &:before {
        transition-delay: 280ms;
        transform: translateX(20px) translateY(-20px) rotate(45deg);
      }
      &:after {
        transition-delay: 280ms;
        transform: translateX(-22px) translateY(-22px) rotate(-45deg);
      }
    }
  }
  .out {
    position: absolute;
    top: 0;
    left: 0;
    .close-button-block {
      &:before {
        transform: translateX(-5px) translateY(5px) rotate(45deg);
      }
      &:after {
        transform: translateX(5px) translateY(5px) rotate(-45deg);
      }
    }
  }
  &:hover {
    .in {
      .close-button-block {
        &:before {
          transform: translateX(-5px) translateY(5px) rotate(45deg);
        }
        &:after {
          transform: translateX(5px) translateY(5px) rotate(-45deg);
        }
      }
    }
    .out {
      .close-button-block {
        &:before {
          transform: translateX(-20px) translateY(20px) rotate(45deg);
        }
        &:after {
          transform: translateX(20px) translateY(20px) rotate(-45deg);
        }
      }
    }
  }
}

#album{
  position:relative;
  top:5px;
  margin:8px 8px 0 0 ;
  padding:12px;
  left:5px;
  right:5px;
  bottom:0px;
  height:100px;
  width:15%;
  font-size:17px;
  background: green;
background: rgba(0,0,0,0.6);
  border-radius: 58px 58px 58px 58px;
  -moz-border-radius: 58px 58px 58px 58px;
  -webkit-border-radius: 58px 58px 58px 58px;
  border: 1px solid #383838;
}


#albumcont{
  position:fixed;
  top:100px;
  left:100px;
  right:100px;
  padding:0;
  bottom:100px;
  display:flex;
  z-index:8;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;

}

#gallery{
  position:fixed;
  top:0;
  left:0;
  right:0;
  bottom:0;
  background:red;
  width:100%;
  display:flex;
  z-index:8;
      background: rgba(63, 1, 1, 0.9);
}

#gallery2{
  position:fixed;
  top:100px;
  left:100px;
  right:100px;
  bottom:100px;  
  display:flex;
  z-index:9;
  background:blue;
}

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
