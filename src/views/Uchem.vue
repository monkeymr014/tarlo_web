<template>
  <div>
    <TarloH1 msg="Rzuć Uchem"/> 
    <RightBar/>
    <Okladka/>
    <RightBarDown3/>
    <RightBarDown2/>
    <TopYT/>
  </div>
</template>
<script>
// @ is an alias to /src
import TarloH1 from '@/components/TarloH1.vue'
import RightBar from '@/components/RightBar.vue'
import RightBarDown3 from '@/components/RightBarDown3.vue'
import Okladka from '@/components/Okladka.vue'
import RightBarDown2 from '@/components/RightBarDown2.vue'
import TopYT from '@/components/TopYT.vue'


export default {
  name: 'Uchem',
  components: {
    TarloH1,RightBar,RightBarDown3,Okladka,RightBarDown2,TopYT
  }
}
</script>