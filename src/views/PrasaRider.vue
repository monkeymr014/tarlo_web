<template>
  <div>
   <TarloH1 msg="Prasa i Rider"/> 
   <RightBar/>
  </div>
</template>
<script>
// @ is an alias to /src
import TarloH1 from '@/components/TarloH1.vue'
import RightBar from '@/components/RightBar.vue'

export default {
  name: 'PrasaRider',
  components: {
    TarloH1,RightBar
  }
}
</script>