<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
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
<style scoped>
h1 { 
  position: relative;
  top:10px;
  text-indent: 15%; 
  color:red;
  margin: 0;
  font-size: 40px;
}
p {
  text-indent: 10%; 
  padding: 1%;
  margin: 0 10px;
  color:red;
  position: absolute;
  right: 40%;
  font-size: 25px;
}
</style>
