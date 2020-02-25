<template>
  <div id="app">
    <div id="nav">
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
          <a target="_blank" href="https://www.facebook.com/tarlorockband/"> <img alt="fb-footer" src="./assets/socialmedia/fb/blue.png"></a>
          <a target="_blank" href="https://www.youtube.com/channel/UCAK10cFtn2SoFgZu-TsP1Tg"> <img alt="yt-foter" src="./assets/socialmedia/yt/red.png"></a>
          <a target="_blank" href=""> <img alt="insta-footer" src="./assets/socialmedia/instagram/orange.png"></a>
      </footer>
    </div>
  </div>
</template>

<style scoped>

#container {
		min-height:100%;
		position:relative;
	}

#footer {
  flex-shrink: 0;
  clear: both;
  position: fixed;
  left:0;
	bottom: 2%;
	width: 100%;
  height: 60px;
 }

#footer img {
    position:relative;
  	left:43%;
    bottom: 12px;
    padding:4px;
    width: 4%;
    height: auto;
    background:black;	
    margin:10px 1px 2px 1px;	
 }

#nav {
  font-size: 26px;
  text-align: center;
  color: white;
  padding: 40px;
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
  background: rgba(0,0,0,0.6);
  border: 3px outset rgba(194,171,171,0.89);


}
</style>
