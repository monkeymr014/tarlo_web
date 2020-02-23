<template>
  <div class="tarlo">
   <TarloH1 msg="O Tarło"/> 
   <TarloC/> 
   <RightBar/>
   <RightBarDown/>
  </div>
</template>
<script>
// @ is an alias to /src
import TarloH1 from '@/components/TarloH1.vue'
import TarloC from '@/components/TarloC.vue'
import RightBar from '@/components/RightBar.vue'
import RightBarDown from '@/components/RightBarDown.vue'

export default {
  name: 'Tarlo',
  components: {
    TarloH1,TarloC,RightBar,RightBarDown
  }
}
</script>