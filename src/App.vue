<template>
  <div id="app">
     <transition name="fade">
        <div v-if="sshow" class="preloader">
      <LogoPre/>
    </div>
  </transition>
      <button class="hamburger" aria-label="Menu"  v-bind:class='{"hamburger--active" : isActive}' v-on:click="isActive = !isActive"  > 
	      <span class="hamburger__container" tabindex="-1"> 
    	    <span class="hamburger__bars"></span> 
  	    </span> 
      </button>
    <div  id="nav"  class="nav" v-bind:class='{"navclose" : isActive}' >
      <div id="link1" class="link" @mouseover="grow1 = true" @mouseleave="grow1 = false"  v-bind:class='{"linkmouse": grow1}' v-on:click="isActive = !isActive" >  
        <router-link   to="/tarlo">O Tarlo</router-link>
      </div>
      <div class="link"  v-on:click="isActive = !isActive">  
        <router-link to="/koncerty">Koncerty</router-link>
      </div>
      <div class="link" v-on:click="isActive = !isActive">  
        <router-link to="/rzucuchem">Rzuć Uchem</router-link>
      </div>
      <div class="link" v-on:click="isActive = !isActive">  
        <router-link to="/rzucokiem">Rzuć Okiem</router-link>
      </div>
      <div class="link" v-on:click="isActive = !isActive">  
        <router-link to="/kontakt">Kontakt do Tarło</router-link>
      </div>
      <div class="link" v-on:click="isActive = !isActive" >  
        <router-link to="/prasarider">Prasa i Rider</router-link>
      </div>
      <div class="link" v-on:click="isActive = !isActive">  
        <router-link to="/kup">Kup sobie</router-link>
      </div>
    </div>
    <div id="con" >
      <router-view/>
    </div>   
    <div>
      <footer id="footer">
          <div id="footer-con">
            <a @mouseover="growfb = true" @mouseleave="growfb = false"  :class="{grow: growfb}" target="_blank" href="https://www.facebook.com/tarlorockband/">
              <img alt="fb-footer" id="fb-footer" src="./assets/socialmedia/fb/blue.png"></a>
            <a @mouseover="growyt = true" @mouseleave="growyt = false"  :class="{grow: growyt}" target="_blank" href="https://www.youtube.com/channel/UCAK10cFtn2SoFgZu-TsP1Tg">
              <img alt="yt-foter" id="yt-footer" src="./assets/socialmedia/yt/red.png"></a>
            <a @mouseover="growinsta = true" @mouseleave="growinsta = false"  :class="{grow: growinsta}" target="_blank" href="https://www.instagram.com/tarlo_rockband/">
              <img alt="insta-footer" id="insta-footer" src="./assets/socialmedia/instagram/orange.png"></a>
          </div>  
      </footer>
    </div>
  </div>
</template>

<script>


import LogoPre from '@/components/LogoPre.vue'

export default {
  name: 'PreLoader',
  components: {
    LogoPre
  },
  props: {
    msg: String
  },

   data() {
    return{
      show:true,
      grow1:false,
      growfb:false,
      growyt:false,
      growinsta:false,
      isActive: false

    }
  },

  mounted(){
    this.showToggle()
  },
  methods:{
    showToggle(){
      setTimeout(() =>{
          this.show = false;
      },11000);
    }
    
  }
}
</script>

<style lang="scss" scoped>

.grow{
  transform: scale(1.05); 
  color:green;
}

.linkmouse {
   background:red;
   color:white;
}

#con{
  min-height:100%;  	
  min-width:100%;  	
  top:108px;
  position:relative;
}

// mobile
@media (max-width: 1024px){ 
.hamburger {
  margin: 0;
  z-index:9999;
  padding: 0;
  border: 0;
  background-color: transparent;
  cursor: pointer;
  &:focus {
    & > .hamburger__container {
      box-shadow: 0 0 2px 2px #51a7e8;
    }
  }
}

.hamburger__container {
  display: flex;
  align-items: center;
  position: relative;
  width: 35px;
  height: 30px;
    z-index:9999;

}

.hamburger__bars {
  position: absolute;
  width: 35px;
  height: 2px;
  background-color:white;
  transition: transform 220ms ease-in-out;
  &:before, &:after {
    display: block;
    position: absolute;
    width: 35px;
    height: 2px;
    background-color::white;
    content: '';
  }
  &:before {
    top: -12px;
    transition: top 100ms 250ms ease-in, transform 220ms ease-in-out;
  }
  &:after {
    bottom: -12px;
    transition: bottom 100ms 250ms ease-in, 
      transform 220ms ease-in-out;
  }
}

.hamburger--active {
  .hamburger__bars {
    transform: rotate(225deg);
    transition: transform 220ms 120ms ease-in-out;
    &:before {
      top: 0;
      transition: top 100ms ease-out;
    }
    &:after {
      bottom: 0;
      transform: rotate(-90deg);
      transition: bottom 100ms ease-out, 
        transform 220ms 120ms ease-in-out;
    }
  }
}

.hamburger, .hamburger__container {
  &:focus {
    outline: none;
  }
}

#footer{
  display: none
}
#con{
   	
	position: absolute;
  width: 100%; 
	height: 100%;
	top: 0px;
  left: 0px;
  bottom: 0;
  margin: 0, 0,0,0;
}


.nav{
 position:fixed;
 left:-9999px;
 border:solid;
 border-color:red;
 

}
.navclose{
  position: absolute;
  z-index:99;
  border:solid;
  width: 100%; 
	height: 100%;
	top: 0px;
  left: 0px;
  bottom: 0;
  background-color:black;
  display: flex;
	flex-direction: column;
	flex-wrap: nowrap;
	justify-content: center;
	align-items: center;
	align-content: stretch;

}
.link  {
  position:relative;
  top:0;
  margin:0;
  border:solid;
  border-color:rgb(151, 45, 45);
  width: 90%;


}


#nav a {
  text-decoration: none;  
  margin: 0;
  padding: 0;
  position:relative;
  top:0;
  width: 100%;
  height:100%;
  font-size:30px;
  display: flex;
	flex-direction: column;
	flex-wrap: nowrap;
	justify-content: center;
	align-items: center;
	align-content: stretch;
  z-index: 4;


}



}

//DESKTOP

@media (min-width: 1024px){ 
  
.hamburger{
    display: none;
  }
#footer{
  display: flex;
  clear: both;
  position: fixed;
  left:0;
  padding:0;
	bottom: .5px;
	width: 100%;
  height: 50px;
  align-items: center;
  justify-content: center;
  
}

#footer-con{
  position:relative;
  left:0;
  margin:0px 30px 1px 30px;
  padding:5px;
  display:flex;
  align-items: center;
  justify-content: center;
  
 
}

#insta-footer , #fb-footer {
  border:solid;
  border-color:black;
  position:relative;
  padding:0px;
  width: 50px;
  margin:1px 1px 0px 1px ; 
  height: auto;
  background:black;	
   
 }

#yt-footer{
  border:solid;
  border-color:black;
  position:relative;
  padding:0px;
  width: 60px;
  margin:1px 0 10px 0 ; 
  height: auto;
  background:black;		
}


#nav {
  @media (min-width: 1285px){
    font-size: 20px;
    }
    font-size: 14px;
  top:0;
  right:0;
  text-align: center;
  color: white;
  padding: 20px 0 20px 0;
  max-width:100%;
  width:85%;
  margin:20px 5% 20px 5%;
  position:fixed;
  display: flex;
	flex-direction: row;
	flex-wrap: nowrap;
	justify-content: center;
	align-items: stretch;
	align-content: stretch;
}

#nav a {
  text-decoration: none;
  color: white;
  padding:12px;
  margin:10px;
  border: 3px inset rgba(194,171,171,0.89);
  border-radius: 40px 40px 40px 40px;
  background: rgba(0,0,0,0.6);
  }

#nav a.router-link-exact-active {
  color: red;
  background: rgba(0,0,0,0.9);
  border: 3px outset rgba(194,171,171,0.89);
  }

}
</style>
