<template>
  <div id="content" >
            <img alt="logo-red" src="../assets/okladka-min.jpg">
            <div id="album">
            <p><span>Prolog</span></p>
            <p>Łysybył</p>
            <p>Czy warto</p>
            <p>List</p>
</div>

</div>
</template>

<script>
export default {
  name: 'CompPR',
  props: {
    msg: String
  }
}
</script>

<style lang="scss" scoped>

#content{
  position:fixed;
  left:21%;
    transform: translate(-50%, -50%) ;
  top:50%;
  padding:0;
  width:50%;
  height:auto;
}

#album{
  position:relative;
  background: rgba(0,0,0,0.8);
  margin:  35px 0 0 0 ;
  width:100px;
  height:auto;
  left: 50%;
  transform: translate(-50%, -50%) ;
  background: rgba(0,0,0,0.8);
  border:  solid red;
    


p{  
  text-align:center;
  color:red;
  font-size:20px;
  padding:2px;
  margin:-15px 0 0 0 ;
 
}
span{
  text-align:center;
  padding:0 0 0 0;
  color:red;
  font-size:25px;
}
}
img{
  margin:0% 15% 0% 15%; 
  padding:auto;
  width:70%; 
  height:auto;
}

@media (min-width: 1024px){ 
}

@media (min-width: 1024px){ 



#album{
  position:relative;
  background: rgba(0,0,0,0.8);
  width:30%;
  height:auto;
  top:0px;
  padding:10px 10px;
  background: rgba(0,0,0,0.8);
    border:  solid red;

}




#content{

  position:fixed;
  left:14%;
  width:28%;
  margin:0;
  padding:0;
  height:auto;
  top:55%;
   align-items: center;
  justify-content: center;
}

img{
  margin:0% 15% 0% 15%; 
  padding:auto;
  width:70%; 
  height:auto;
}

p{  
  text-align:center;
  color:red;
  font-size:28px;
  padding:0;
  margin:-15px 0 0 0 ;
 
}

span{
  text-align:center;
  padding:0 0 0 0;
  color:red;
  font-size:45px;
}
}
</style>
