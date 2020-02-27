<template>
  <div>
    <p> {{  List() }} </p>
    <ul>
      <li   ></li>
    
    </ul>
 </div>
</template>

<script>

import axios from 'axios';
export default {
  name: 'KoncertyList',
  props: {
    msg: String
  },
  data() {

    return {
      results: [],
    }
  },

  
  methods: {

    List() {
      axios.get('https://graph.facebook.com/v6.0/me/accounts?fields=events&access_token=EAAEyl1RiMPcBANHHg0kffZAJ6bx7ZBuaGgDsaecDUwzGKy8K2XrPmW1SCP1kxXAbU0drpQ4fuysVC3g2mHYlEgZC1v62OhP3EgYxMkq48GRoBiuW4j8WwvBsYUfnlOYhNuzRFeeTZAiMMwq6CLuvN2EJsuzUbrZCudOVu8SLwywZDZD')
    
        .then((re) => {
          this.results = re.data.data[0].events.data;
          console.log(re.data.data[0].events.data);
})

        } 
   }


  }

</script>
<style scoped>

p {
background: rgba(0,0,0,0.6);
  text-indent: 10%; 
  padding: 1%;
  margin: 10px 15px;
  color:red;
  position: fixed;
  top:25%;
  right: 40%;
  font-size: 25px;
}

</style>
