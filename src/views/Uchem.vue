<template>
  <div>
    <TarloH1 msg="Rzuć Uchem"/> 
    <RightBar/>
    <RightBarDown3/>
  </div>
</template>
<script>
// @ is an alias to /src
import TarloH1 from '@/components/TarloH1.vue'
import RightBar from '@/components/RightBar.vue'
import RightBarDown3 from '@/components/RightBarDown3.vue'


export default {
  name: 'Uchem',
  components: {
    TarloH1,RightBar,RightBarDown3
  }
}
</script>