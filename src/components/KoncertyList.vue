<template>
  <div>
    <p> {{  List() }} </p>
 </div>
</template>

<script>

import axios from 'axios';
export default {
  name: 'KoncertyList',
  props: {
    msg: String
  },


  
  methods: {

    List() {
      axios.get('https://graph.facebook.com/v6.0/me/accounts?fields=events&access_token=EAACySB6mumsBACLBbwpYqolPCS5ZAsizXqKr0Ox57oIvBrbZCHCoAHNTbz8NMcZA4gk5H5UZBvCXXZBHVZBGbjBwIEv3LOzVmbCXzIJLJkObohTb3fDgE2auEZBhNHppDZBh4M2LFjq4yVYzTGh5JToo9S9jwbFnGeOys4FdN2sZAa9goTZAJyiwZAzhocLk7FHE1UZD')
    
        .then((re) => {
console.log(re);
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
