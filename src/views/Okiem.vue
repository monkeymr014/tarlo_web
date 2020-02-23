<template>
  <div>
   <TarloH1 msg="Rzuć Okiem"/> 
   <RightBar/>
  </div>
</template>
<script>
// @ is an alias to /src
import TarloH1 from '@/components/TarloH1.vue'
import RightBar from '@/components/RightBar.vue'

export default {
  name: 'Okiem',
  components: {
    TarloH1,RightBar
  }
}
</script>