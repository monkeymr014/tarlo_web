<template>
  <div>
    <transition name="fade">
      <div v-if="show" id="gallery">
        <div id="albumcont" >
          <div v-on:click="show2 = !show2" id="album" v-for="item in slides" v-bind:key="item.id">
            <p>{{item.name}}</p>
            <transition >
              <div v-if="show2" id="gallery2">
                
              </div>
            </transition>
       <!-- <carousel-3d :count="slides.data.length">
          <slide v-for="(slide, i) in slides.data" :index="i">
            <img :src="slide.images[2].source" />
          </slide>
        </carousel-3d> -->
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

import { Carousel3d, Slide } from 'vue-carousel-3d';
import axios from 'axios';

export default {
name: 'Foto',
  data() {
    return {
      growfoto: false,
      show:false,
      show2:false,
      slides: [] 

    }
  },
components: {
    Carousel3d,
    Slide
  },
computed: {
    Foto: function() {
      axios.get('https://graph.facebook.com/v6.0/me/accounts?fields=albums%7Bname%2Cphotos%7Bimages%7D%7D&access_token=EAAEyl1RiMPcBAEUAUZAv0hc6zIDFjh91Xjd8zSls9PED5Rajx8ZBcyqa1KU12bDpk5Nn5YUjUpNFp8yBpJO6gteADnpSe933zoZAX8m5iQ4HBCBr648h2AK6NimH7SqYY5EJWi7A3AQjK9uCDXnLrqTmubk5dXMZA6EWskvEBgZDZD')
        .then((re) => {
          this.slides = re.data.data[0].albums.data;
          
          console.log(re.data.data[0].albums);
                    }) 
                  }
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
  margin:10px;
  padding:0px;
  left:5px;
  right:5px;
  bottom:5px;
  height:300px;
  width:300px;
  background: green;
}


#albumcont{
  position:fixed;
  top:100px;
  left:100px;
  right:100px;
  bottom:100px;
  display:flex;
  z-index:8;
  overflow:hidden;
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
  background:blue;
  
  display:flex;
  z-index:9;
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
