<template>
  <div>
   <TarloH1 msg="Kontakt Do Tarło"/> 
   <RightBar/>
  </div>
</template>
<script>
// @ is an alias to /src
import TarloH1 from '@/components/TarloH1.vue'
import RightBar from '@/components/RightBar.vue'

export default {
  name: 'Kontakt',
  components: {
    TarloH1,RightBar
  }
}
</script>