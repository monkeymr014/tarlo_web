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
@media (max-width: 1024px){ 

div{
position: relative;
margin-top:40px;
margin-bottom: 30px;
padding: 2px;
  



}
p{

text-indent: 20px;

font-size: 11px;
    background: rgba(0,0,0,0.8);
  border-radius: 58px 58px 58px 58px;
  -moz-border-radius: 58px 58px 58px 58px;
  -webkit-border-radius: 58px 58px 58px 58px;
  border: 1px solid #383838;
  padding: 22px;
  color:white;
  top:20px;
  position: relative;

}
}

@media (min-width: 1024px){ 
div{
  position:relative;
  top:90px;
  bottom:10px;
  padding:0;
  left:20px;
  width:60%;
  height:auto; 
}
}

@media (min-width: 1024px){ 
p{

  font-size: 15px;
    background: rgba(0,0,0,0.8);
  border-radius: 58px 58px 58px 58px;
  -moz-border-radius: 58px 58px 58px 58px;
  -webkit-border-radius: 58px 58px 58px 58px;
  border: 1px solid #383838;
  text-indent: 50px; 
  padding: 3%;
  margin: 10px 15px;
  color:white;
  top:20px;
  position: relative;
}
}
@media (min-width: 1226px){ 
p{
  font-size: 18px;
  background: rgba(0,0,0,0.8);
  border-radius: 58px 58px 58px 58px;
  -moz-border-radius: 58px 58px 58px 58px;
  -webkit-border-radius: 58px 58px 58px 58px;
  border: 1px solid #383838;
  text-indent: 50px; 
  padding: 3%;
  margin: 10px 15px;
  color:white;
  top:20px;
  position: relative;
}
}
</style>
