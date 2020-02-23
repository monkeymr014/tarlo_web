<template>
  <div class="tarlo">
   <TarloC msg="O Tarło"/> 
   <RightBar/>
   <RightBarDown/>
  </div>
</template>
<script>
// @ is an alias to /src
import TarloC from '@/components/TarloC.vue'
import RightBar from '@/components/RightBar.vue'
import RightBarDown from '@/components/RightBarDown.vue'

export default {
  name: 'Tarlo',
  components: {
    TarloC,RightBar,RightBarDown
  }
}
</script>