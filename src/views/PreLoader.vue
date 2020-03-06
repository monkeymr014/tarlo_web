<template>
  <transition name="fade">
    <div v-if="show" class="preloader">
      <LogoPre/>
    </div>
  </transition>
</template>

<script>
import LogoPre from '@/components/LogoPre.vue'


export default {
  name: 'PreLoader',
  components: {
    LogoPre
  },
  props: {
    msg: String
  },
   data() {
    
    return{
      show:true


    }
  },
  mounted(){
    this.showToggle()
  },
  methods:{
    showToggle(){
      setTimeout(() =>{
          this.show = false;
      },11000);
    }
  }
}
</script>


