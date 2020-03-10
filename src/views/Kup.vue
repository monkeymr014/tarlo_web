<template>
  <div>
   <TarloH1 msg="Kup Sobie Nie Żałuj"/> 
   <RightBar/>
   <RightBarDown2/>
    <TopYT/>
    <Buy/>

  </div>
</template>
<script>
// @ is an alias to /src
import TarloH1 from '@/components/TarloH1.vue'
import RightBar from '@/components/RightBar.vue'
import RightBarDown2 from '@/components/RightBarDown2.vue'
import TopYT from '@/components/TopYT.vue'
import Buy from '@/components/Buy.vue'

export default {
  name: 'Kup',
  components: {
    TarloH1,RightBar,RightBarDown2,TopYT,Buy
  }
}
</script>