<template>
  <div>
    <TarloH1 msg="Rzuć Okiem"/> 
    <RightBar/>
    <RightBarDown2/>
    <TopYT/>
    <Gallery/>
  </div>
</template>
<script>
// @ is an alias to /src
import TarloH1 from '@/components/TarloH1.vue'
import RightBar from '@/components/RightBar.vue'
import RightBarDown2 from '@/components/RightBarDown2.vue'
import TopYT from '@/components/TopYT.vue'
import Gallery from '@/components/Gallery.vue'


export default {
  name: 'Okiem',
  components: {
    TarloH1,RightBar,RightBarDown2,TopYT,Gallery
  }
}
</script>