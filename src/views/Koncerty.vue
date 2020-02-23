<template>
  <div>
   <TarloH1 msg="Koncerty"/> 
   <RightBar/>
   <RightBarDown2/>
  </div>
</template>
<script>
// @ is an alias to /src
import TarloH1 from '@/components/TarloH1.vue'
import RightBar from '@/components/RightBar.vue'
import RightBarDown2 from '@/components/RightBarDown2.vue'

export default {
  name: 'Koncerty',
  components: {
    TarloH1,RightBar,RightBarDown2
  }
}
</script>