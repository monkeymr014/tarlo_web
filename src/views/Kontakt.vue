<template>
  <div>
   <TarloH1 msg="Kontakt Do Tarło"/>
   <CompKontakt/>
   <RightBar/>
   <RightBarDown2/>
   <TopYT/>
  </div>
</template>
<script>
// @ is an alias to /src
import TarloH1 from '@/components/TarloH1.vue'
import RightBar from '@/components/RightBar.vue'
import RightBarDown2 from '@/components/RightBarDown2.vue'
import CompKontakt from '@/components/CompKontakt.vue'
import TopYT from '@/components/TopYT.vue'

export default {
  name: 'Kontakt',
  components: {
    TarloH1,RightBar,RightBarDown2,CompKontakt,TopYT
  }
}
</script>
