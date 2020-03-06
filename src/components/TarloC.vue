<template>
  <div>
    <p>Niektórych tematów nie można opowiedzieć w zwykły sposób - trzeba do tego użyć  gitary, basu i  perkusji i dopiero wtedy można wykrzyczeć do mikrofonu słowa!!! Zespół TARŁO to czterech rockowo nastawionych do świata i ludzi instrumentalistów, z których jeden śpiewa. Część z nich pasja do muzyki połączyła już w czasach licealnych, kiedy grali razem w szkolnej kapeli. Kilka lat musiało upłynąć jednak aby życie dostarczyło (jak mówią) "odpowiedniej wrażliwości",  a drzemiące oraz te nowe i nieopowiedziane historie mogły wreszcie  zabrzmieć a często zaryczeć z gardła, jak to w rocku przystało!!! Inną kwestią jest to, że w pod koniec lat 90tych nasz młodszy kolega perkusista był jeszcze dzieckiem i trzeba było poczekać aż dorośnie i zacznie z nami grać!!! Zespół powstał w 2016 roku temu, aktualnie koncertuje gdzie się tylko da.</p>
  </div>
</template>

<script>
export default {
  name: 'TarloC',
  props: {
    msg: String
  }
  

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>

div{
  position:relative;
  top:90px;
  bottom:10px;
  padding:0;
  left:20px;
  width:60%;
  height:auto; 
}

p{
@media (min-width: 1024px){ 
  font-size: 17px;
}
@media (min-width: 1226px){ 
  font-size: 23px;
}
  background: rgba(0,0,0,0.6);
  border-radius: 58px 58px 58px 58px;
  -moz-border-radius: 58px 58px 58px 58px;
  -webkit-border-radius: 58px 58px 58px 58px;
  border: 1px solid #383838;
  text-indent: 10%; 
  padding: 3%;
  margin: 10px 15px;
  color:red;
  top:0px;
  position: relative;
}
</style>
