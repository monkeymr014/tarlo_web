<template>
  <div>
    <transition name="fade">
      <div v-if="show2" id="gallery2">
        <div id="albumcont" >
         <div id="row" >
            <div class="column">
             <img id="fota" v-for="(image, idx) in images" :key="idx" :src="image.thumbUrl" @click="showImage(idx) ,show3 = !show3" :alt="image.caption" :title="image.caption" />
            </div>
             
          </div>

 <div id="boximage"  >
   <ImageBox 
      :images="images"
      :index="index"
        v-if="show3"
      :bgcolor="bgcolor"
    ></ImageBox>
    </div>
      </div>
          <div v-on:click="cli" v-if="show2"  class="wrapper">
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
    <div v-on:click="show2 = !show2, Foto()"  @mouseover="growfoto = true" @mouseleave="growfoto = false"  :class="{grow: growfoto}" id="foto">
    KRONIKA ZDJĘCIOWA
    </div>
  </div>
</template>

<script>
import ImageBox from "vue-image-box";


export default {
name: 'Foto',
  data() {
    return {
      growfoto: false,
      show2:false,
      show3:false,
        index: null,
      bgcolor: "rgba(51, 51, 51, .9)",
      images: [
        {
          imageUrl : "http://serwer2072071.home.pl/gallery/002-81B_2677.jpg",
          thumbUrl: "http://serwer2072071.home.pl/gallery/002-81B_2677.jpg",
        },
        {
          imageUrl: "http://serwer2072071.home.pl/gallery/006-81A_2643.jpg",
          thumbUrl: "http://serwer2072071.home.pl/gallery/006-81A_2643.jpg",
        },
        {
          imageUrl: "http://serwer2072071.home.pl/gallery/016-81A_2667.jpg",
          thumbUrl: "http://serwer2072071.home.pl/gallery/016-81A_2667.jpg",
        },
          {
          imageUrl: "http://serwer2072071.home.pl/gallery/064-81A_2729.jpg",
          thumbUrl: "http://serwer2072071.home.pl/gallery/064-81A_2729.jpg",
        },
          {
          imageUrl: "http://serwer2072071.home.pl/gallery/069-81A_2741.jpg",
          thumbUrl: "http://serwer2072071.home.pl/gallery/069-81A_2741.jpg",
        },
          {
          imageUrl: "http://serwer2072071.home.pl/gallery/267-81B_3032.jpg",
          thumbUrl: "http://serwer2072071.home.pl/gallery/267-81B_3032.jpg",
        },
       
        {
          imageUrl: "http://serwer2072071.home.pl/gallery/171-81A_2941.jpg",
          thumbUrl: "http://serwer2072071.home.pl/gallery/171-81A_2941.jpg",
        },
        {
          imageUrl: "http://serwer2072071.home.pl/gallery/40112798_1867680456655065_1784767114322640896_o.jpg",
          thumbUrl: "http://serwer2072071.home.pl/gallery/40112798_1867680456655065_1784767114322640896_o.jpg",
        },
        {
          imageUrl: "http://serwer2072071.home.pl/gallery/40266587_1867681323321645_8921014602733453312_o.jpg",
          thumbUrl: "http://serwer2072071.home.pl/gallery/40266587_1867681323321645_8921014602733453312_o.jpg",
        },
        {
          imageUrl: "http://serwer2072071.home.pl/gallery/245-81B_2965.jpg",
          thumbUrl: "http://serwer2072071.home.pl/gallery/245-81B_2965.jpg",
        },
        {
          imageUrl: "http://serwer2072071.home.pl/gallery/163-81A_2918.jpg",
          thumbUrl: "http://serwer2072071.home.pl/gallery/163-81A_2918.jpg",
        },

        {
          imageUrl: "http://serwer2072071.home.pl/gallery/DSC_0292.JPG",
          thumbUrl: "http://serwer2072071.home.pl/gallery/DSC_0292.JPG",
        },
        {
          imageUrl: "http://serwer2072071.home.pl/gallery/DSC_0333.JPG",
          thumbUrl: "http://serwer2072071.home.pl/gallery/DSC_0333.JPG",
        },
        {
          imageUrl: "http://serwer2072071.home.pl/gallery/DSC_0373.JPG",
          thumbUrl: "http://serwer2072071.home.pl/gallery/DSC_0373.JPG",
        },
        {
          imageUrl: "http://serwer2072071.home.pl/gallery/284-DJI_0081.jpg",
          thumbUrl: "http://serwer2072071.home.pl/gallery/284-DJI_0081.jpg",
        },
        {
          imageUrl: "http://serwer2072071.home.pl/gallery/169-81A_2938.jpg",
          thumbUrl: "http://serwer2072071.home.pl/gallery/169-81A_2938.jpg",
        },
        
        {
          imageUrl: "http://serwer2072071.home.pl/gallery/DSC_0423.JPG",
          thumbUrl: "http://serwer2072071.home.pl/gallery/DSC_0423.JPG",
        },
      
        {
          imageUrl: "http://serwer2072071.home.pl/gallery/197-81B_2856.jpg",
          thumbUrl: "http://serwer2072071.home.pl/gallery/197-81B_2856.jpg",
        },
        {
          imageUrl: "http://serwer2072071.home.pl/gallery/IMG_6828.jpg",
          thumbUrl: "http://serwer2072071.home.pl/gallery/IMG_6828.jpg",
        },
        {
          imageUrl: "http://serwer2072071.home.pl/gallery/IMG_6852.jpg",
          thumbUrl: "http://serwer2072071.home.pl/gallery/IMG_6852.jpg",
  
        },
        {
          imageUrl: "http://serwer2072071.home.pl/gallery/199-81B_2863.jpg",
          thumbUrl: "http://serwer2072071.home.pl/gallery/199-81B_2863.jpg",
        },

      ]

    }
  },

components: {

ImageBox
  },

methods:{
  cli: function (){
      if(this.show2 == true && this.show3 == true) {
        this.show3 = false && this.show2 == true 
        }
        else if(this.show2 == true && this.show3 == false) {
          this.show2 = false
          };
    console.log(this.show2);
    console.log(this.show3);
    },
    
co:  function(){
console.log(this.show2);
    console.log(this.show3);
},

    showImage: function(idx) {
      this.index = idx;
    }
}
}
</script>

<style lang="scss" scoped>

 
 .row {
  display: flex;
  flex-wrap: wrap;
  padding: 0 4px;
}

/* Create four equal columns that sits next to each other */


.column img {
  vertical-align: middle;
}

/* Responsive layout - makes a two column-layout instead of four columns */
@media screen and (max-width: 800px) {
  .column {
    flex: 50%;
    max-width: 50%;
  }
}

/* Responsive layout - makes the two columns stack on top of each other instead of next to each other */
@media screen and (max-width: 600px) {
  .column {
    flex: 10%;
    max-width: 10%;
  }
}

#fota{
  width: 380px;
  height: auto;
  padding:0px,0px,0px,0px;
  margin:0px,0,0,0;
  max-width: 370px;

  
 @media screen and (max-width: 1200px) {
    width: 380px;

    max-width: 100%;
        max-height: 100%;
        width: 380px;
  height: auto;

  

}
}


$button-size: 40px;
$close-width: ($button-size / 10);
.wrapper {
 position:relative;
 left:95%;
 top:5%;
  width: 100vw;
  height: auto;
  z-index:9;
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
  bottom:10%;
  padding:0,0,0,0;
  z-index:8;
  overflow-y:scroll;
 
max-width: 100%;
        max-height: 100%;
}

#gallery2{
  position:fixed;
  padding:0;
  top:0;
  left:0;
  right:0;
  bottom:0;
  background:red;
  width:100%;
  z-index:8;
  background: rgba(63, 1, 1, 0.9);
  max-width: 100%;
  max-height: 100%;
}



.grow{
  transform: scale(1.05); 
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
