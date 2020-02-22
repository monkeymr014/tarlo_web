<template>
  <div class="tarlo">
   <TarloC msg="O Tarło"/> 
   <RightBar msg="value"/>
  </div>
</template>
<script>
// @ is an alias to /src
import TarloC from '@/components/TarloC.vue'
import RightBar from '@/components/RightBar.vue'

export default {
  name: 'Tarlo',
  components: {
    TarloC,RightBar
  }
}
</script>