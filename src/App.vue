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
      <footer id="footer">Footer</footer>
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
		bottom: 0;
		width: 100%;
		height: 60px;		
		background: red;
 
}

#nav {
  font-size: 25px;
  text-align: center;
  color: #2c3e50;
  padding: 40px;
}



#nav a {
  text-decoration: none;
  color: #2c3e50;
  padding:6px;
  margin:10px;
  border:2px;
  border: 4px inset rgba(28,110,164,0.59);
  border-radius: 40px 40px 40px 40px;

}

#nav a.router-link-exact-active {
  

  border: 4px outset rgba(28,110,164,0.59);

}
</style>
