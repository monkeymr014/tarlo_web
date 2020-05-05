<template>
  <div>
   <TarloH1 msg="Prasa i Rider"/> 
   <RightBar/>
   <RightBarDown2/>
   <CompPR/>
   <TopYT/>

  </div>
</template>
<script>
// @ is an alias to /src
import TarloH1 from '@/components/TarloH1.vue'
import RightBar from '@/components/RightBar.vue'
import RightBarDown2 from '@/components/RightBarDown2.vue'
import CompPR from '@/components/CompPR.vue'
import TopYT from '@/components/TopYT.vue'


export default {
  name: 'PrasaRider',
  components: {
    TarloH1,RightBar,RightBarDown2,CompPR,TopYT
  }
}
</script>