<template>
  <div>
    <transition name="fade">
      <div v-if="show" id="gallery">
        <lingallery :id.sync="currentId" :width="width" :height="height" :items="items"/>
        <div v-on:click="show = !show" class="wrapper">
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
    <div v-on:click="show = !show"  @mouseover="growvideo = true" @mouseleave="growvideo = false"  :class="{grow: growvideo}" id="foto">
        KRONIKA ZDJĘCIOWA
    </div>
  </div>
</template>

<script>

  import Lingallery from 'lingallery';

export default {
name: 'Foto',
  data() {
    return {
      growvideo: false,
        show:false,
        width: 600,
        height: 400,
        items: [{
          src: 'https://scontent.xx.fbcdn.net/v/t1.0-9/84000770_2387486251563365_5620931817486942208_o.jpg?_nc_cat=102&_nc_sid=8024bb&_nc_oc=AQmG_VwHvD_AuMqBvQlkcbV0EnECpC5GAof4DIwlbKOWd3xKEXh2YhcfpraADMWgv4E&_nc_ht=scontent.xx&oh=881778573fa195fde55e0149ab38ba74&oe=5E915A5C',
          thumbnail: 'https://picsum.photos/64/64/?image=0',
          
        },
        {
          src: 'https://picsum.photos/600/400/?image=10',
          thumbnail: 'https://picsum.photos/64/64/?image=10'
        },
      ]
      };
    },
    components: {
      Lingallery
    }
  }
</script>

<style lang="scss" scoped>


$button-size: 40px;
$close-width: ($button-size / 10);
.wrapper {
 position:fixed;
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













.grow{
  transform: scale(1.05); 
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
  z-index:9;
  overflow:hidden;

  align-items: center;
  justify-content: center;
      background: rgba(63, 1, 1, 0.9);



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
