<template>
  <div>
  <p>{{List}}</p>
  
    <ul>
      <li v-for=" item in results " v-bind:key="item.id">
           <img  src="item.cover.source"/>
        
        <span>{{ item.start_time.substring(0,10) }} :</span><span>{{ item.name }}</span><a :href="link+ item.id" target="_blank"> <img alt="fb-footer" src="../assets/socialmedia/fb/char.png"> </a><br/><br/>
      </li>
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
      link: 'https://www.facebook.com/events/',
      results : []
      
    }
  },

  computed: {
                                                          // EAAEyl1RiMPcBAEUAUZAv0hc6zIDFjh91Xjd8zSls9PED5Rajx8ZBcyqa1KU12bDpk5Nn5YUjUpNFp8yBpJO6gteADnpSe933zoZAX8m5iQ4HBCBr648h2AK6NimH7SqYY5EJWi7A3AQjK9uCDXnLrqTmubk5dXMZA6EWskvEBgZDZD
    List: function() {                                    //EAAEyl1RiMPcBADqRTM1ccEXt9Kyih5D7t6HaiJb4O6zynGLZBhjUieTAg1DEGXLCQZArBoHB88CWvSp1lPU8EU9fr5TfxZCTRZBL2PPjYVw8y4f77SqgIDBzs5FPSWLdkYnpBfWnJl4ypZCwIfHgqyc9xwS35hRaZCf4XrGDeBNh4BJc3MDCozLXb8ZBQYGL5Sz4bvtIocyhgZDZD
      axios.get('https://graph.facebook.com/v6.0/me/accounts?fields=events%7Bname%2Cstart_time%2Ccover%7D&access_token=EAAEyl1RiMPcBAEUAUZAv0hc6zIDFjh91Xjd8zSls9PED5Rajx8ZBcyqa1KU12bDpk5Nn5YUjUpNFp8yBpJO6gteADnpSe933zoZAX8m5iQ4HBCBr648h2AK6NimH7SqYY5EJWi7A3AQjK9uCDXnLrqTmubk5dXMZA6EWskvEBgZDZD')
        .then((re) => {
          this.results = re.data.data[0].events.data;
          console.log(re.data.data[0].events.data);
                    }) 
                  }
        } 
}
</script>
<style lang="scss" scoped>

img {
    position:absolute;
    left:90%;
    padding:1px;
    width: 2%;
    height: auto;
    margin:1px;
    background:white;	
 }

li{
  color:red;
  text-decoration:none;
  list-style:none;
  padding:0;
}
span {
  padding: 0%;
  margin: 1px 1px;
  position:relative;
  color:red;
  top:5%;
  left: 1%;
  font-size: 22px;
}
div{
  
  background: rgba(0,0,0,0.6);
  border-radius: 58px 58px 58px 58px;
  -moz-border-radius: 58px 58px 58px 58px;
  -webkit-border-radius: 58px 58px 58px 58px;
  border: 1px solid #383838;
  position:fixed;
  left:2%;
  width:70%;
  height:auto;
  top:30%;
  
}
</style>
