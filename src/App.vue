<template>
  <div>
    <div id="nav">
      <router-link to="/"></router-link> 
      <router-link to="/tarlo"> O Tarlo</router-link>
      <router-link to="/koncerty">Koncerty</router-link>
      <router-link to="/rzucuchem">Rzuć Uchem</router-link>
      <router-link to="/rzucokiem">Rzuć Okiem</router-link>
      <router-link to="/kontakt">Kontakt do Tarło</router-link>
      <router-link to="/prasarider">Prasa i Rider</router-link>
      <router-link to="/kup">Kup sobie</router-link>
    </div>
  <div id="app">
    <router-view/>
  </div>
  </div>
</template>

<style scoped>

#nav {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
   background-color:red;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
  margin:0.6%;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
