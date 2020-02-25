<template>
  <div>
   <TarloH1 msg="Kontakt Do Tarło"/>
   <CompKontakt/>
   <RightBar/>
   <RightBarDown2/>

  </div>
</template>
<script>
// @ is an alias to /src
import TarloH1 from '@/components/TarloH1.vue'
import RightBar from '@/components/RightBar.vue'
import RightBarDown2 from '@/components/RightBarDown2.vue'
import CompKontakt from '@/components/CompKontakt.vue'

export default {
  name: 'Kontakt',
  components: {
    TarloH1,RightBar,RightBarDown2,CompKontakt
  }
}
</script>
