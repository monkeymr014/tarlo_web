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
  },
    metaInfo: {
       meta: [
             { name: 'description', content: 'Tarło - Oficjalna Strona Zespołu | Łysybył  | List | Autorska Muzyka | https://www.facebook.com/tarlorockband/ | http://www.tarlo.pl/ | http://www.tarlo.pl/tarlo | http://www.tarlo.pl/koncerty | http://www.tarlo.pl/rzucuchem | http://www.tarlo.pl/rzucokiem | http://www.tarlo.pl/kontakt | http://www.tarlo.pl/prasarider | http://www.tarlo.pl/kup | https://www.youtube.com/channel/UCAK10cFtn2SoFgZu-TsP1Tg | https://www.instagram.com/tarlo_rockband/' },
             { name: 'keywords', content: "tarlo, zespół, Tarło, tarlo, muzyka, rock, kiedy, leszcza, w, ryb, u, okonia, szczupaka, legno, e, gurami, in, to, do, karpia, płoci, testa, danio, del, youtube, znachorka, jest, temperatura, amura, co, dorsza, lima, d'amor, cura, mordace, english, karasia, lina, minoga, neon, wody, pstrąga, asiatico, quanto, vive, quel, ma, Tarło - Oficjalna Strona Zespołu, Łysybył, List, Autorska Muzyka, https://www.facebook.com/tarlorockband/, http://www.tarlo.pl/, http://www.tarlo.pl/tarlo | http://www.tarlo.pl/koncerty, http://www.tarlo.pl/rzucuchem, http://www.tarlo.pl/rzucokiem, http://www.tarlo.pl/kontakt | http://www.tarlo.pl/prasarider | http://www.tarlo.pl/kup, https://www.youtube.com/channel/UCAK10cFtn2SoFgZu-TsP1Tg,  https://www.instagram.com/tarlo_rockband/'" }
       ] ,
      title: 'Tarło - Oficjalna Strona Zespołu - Home',
      htmlAttrs: {
        lang: 'pl',
        amp: true,
        charset: 'utf-8',
        },

    },
}
</script>
<style lang="scss" scoped>

 @media only screen and (max-width:1024px) {
div{

 display: none;
}
}
</style>