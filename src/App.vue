<template>
  <div id="app">
     <transition name="fade">
        <div v-if="sshow" class="preloader">
      <LogoPre/>
    </div>
  </transition>
    <div  id="nav">
      <router-link  to="/tarlo">O Tarlo</router-link>
      <router-link to="/koncerty">Koncerty</router-link>
      <router-link to="/rzucuchem">Rzuć Uchem</router-link>
      <router-link to="/rzucokiem">Rzuć Okiem</router-link>
      <router-link to="/kontakt">Kontakt do Tarło</router-link>
      <router-link to="/prasa&rider">Prasa i Rider</router-link>
      <router-link to="/kup">Kup sobie</router-link>
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
            <a @mouseover="growinsta = true" @mouseleave="growinsta = false"  :class="{grow: growinsta}" target="_blank" href="">
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
      growfb:false,
      growyt:false,
      growinsta:false

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
}

#con{
  min-height:100%;  	
  min-width:100%;  	
  top:108px;
  position:fixed;
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

//DESKTOP
@media (min-width: 1024px){ 
#nav {
  @media (min-width: 1285px){
    font-size: 23px;
    }
    font-size: 16px;
  top:0;

  right:0;
  text-align: center;
  color: white;
  padding: 20px 0 20px 0;
  max-width:100%;
  width:85%;
  margin:20px 5% 20px 5%;
  position:fixed;
  z-index:9;
  overflow: hidden;
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
