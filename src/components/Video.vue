<template>
  <div>
  <transition name="fade">
      <div v-if="show2" id="gallery2">
        <div id="albumcont" >
 
 
 
          </div>
          <div v-on:click="cli" v-if!="show2"  class="wrapper">
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
  
    <div   v-on:click="show2 = !show2, Foto()"    @mouseover="growvideo = true" @mouseleave="growvideo = false"  :class="{grow: growvideo}" id="video">KRONIKA FILMOWA</div>
  </div>
</template>

<script>


export default {
name: 'Video',
  data() {
    return {
      growvideo: false,
      show2:false,
    }
  },

    methods:{
       cli: function (){
      if(this.show2 == true && this.show3 == true) {
        this.show3 = false
        }
        else if(this.show2 == true && this.show3 != true) {
          this.show2 = false
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













#albumcont{
  position:fixed;
  top:10%;
  left:10%;
  right:10%;
  padding:0;
  margin:0;
  bottom:10%;
  z-index:9;
  border:solid;
  border-color:blue;

}

#gallery2{
  position:fixed;
  top:0;
  left:0;
  right:0;
  bottom:0;
  background:red;
  width:100%;
  z-index:8;
      background: rgba(63, 1, 1, 0.9);
}





.grow{
  transform: scale(1.05); 
}

#video{
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
