<template>
  <div id="home">
  <iframe width="660" height="415" src="https://www.youtube.com/embed/MmIm4uo06TQ" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
  <RightBar/>
  </div>
</template>

<script>
// @ is an alias to /src
import RightBar from '@/components/RightBar.vue'

export default {
  name: 'Home',
  components: {
    RightBar
  }
}
</script>
