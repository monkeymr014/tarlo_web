<template>
  <div>
    <div id="home">
      <iframe id="video" width="660" height="415" src="https://www.youtube.com/embed/MmIm4uo06TQ" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>
    <RightBar/> 
    <TopYT/> 
  </div>
</template>

<script>
// @ is an alias to /src
import RightBar from '@/components/RightBar.vue'
import TopYT from '@/components/TopYT.vue'

export default {
  name: 'Home',
  components: {
    RightBar,TopYT
  }
}
</script>
