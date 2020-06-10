<template>

<div>
  <div id="con">
  <span>{{List}}</span>
  <div>
  
    <ul>
      <li v-for=" item in results " v-bind:key="item.id">
          <tr> 
            <td id="data">{{ item.start_time.substring(0,10) }} </td>
            <a :href="link+ item.id" target="_blank">
            <td id="name">{{ item.name }}</td>
             <img alt="fb-footer" src="../assets/socialmedia/fb/char.png"> </a><br/>
          </tr>
    
      </li>
    </ul>
 </div>
</div>
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
  computed: {                                                      // wiekuisty EAAEyl1RiMPcBAEUAUZAv0hc6zIDFjh91Xjd8zSls9PED5Rajx8ZBcyqa1KU12bDpk5Nn5YUjUpNFp8yBpJO6gteADnpSe933zoZAX8m5iQ4HBCBr648h2AK6NimH7SqYY5EJWi7A3AQjK9uCDXnLrqTmubk5dXMZA6EWskvEBgZDZD
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
a {
  text-decoration: none;
}
@media (max-width: 1024px){ 
img {
display: none; }

#data{
  color:red;
  width:55px;
}

#name{
margin-left:200px;
font-size: 8px;;
}


ul{
  position: relative;
  left:-15px;
}
li{
  color:#666666;
  list-style:none;
  
  margin:0;

}
td {
  padding: 0%;
  margin: 0;
  position:relative;
  color:white;
  font-size: 10px;
}
#con{
  background: rgba(0,0,0,0.8);
  border-radius: 58px 58px 58px 58px;

  border: 1px solid #383838;
  position:fixed;
  overflow-y: scroll;
  left:2%;
  width:90%;
  height:auto;
  max-height:60%;
  top:15%;
  padding:0;
  margin:10px;
  
}
}


@media (min-width: 1024px){ 
img {
    position:absolute;
    left:90%;
    padding:1px;
    width: 22px;
    height: auto;
    margin:0px;
    background:white;	
 }

#data{
  color:red;
  width:100px;
}

#name{
margin-left:200px;
}

li{
  color:#666666;
  list-style:none;
  padding:-12px;
  margin:0;

}
td {
  padding: 0%;
  margin: 0;
  position:relative;
  color:white;
  font-size: 18px;
}
#con{
  background: rgba(0,0,0,0.8);
  border-radius: 58px 58px 58px 58px;
  -moz-border-radius: 58px 58px 58px 58px;
  -webkit-border-radius: 58px 58px 58px 58px;
  border: 1px solid #383838;
  position:fixed;
  left:1%;
  width:70%;
  height:40%;
  overflow-y: scroll;
  top:220px;

  padding:0;
  margin:0;
  
}
}
</style>
