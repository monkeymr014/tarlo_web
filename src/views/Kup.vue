<template>
  <div>
   <TarloH1 msg="Kup Sobie  Nie Żałuj"/> 
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
  },
   metaInfo: {
       meta: [
             { name: 'description', content: 'Tarło - Oficjalna Strona Zespołu | Łysybył  | List | Autorska Muzyka | https://www.facebook.com/tarlorockband/ | http://www.tarlo.pl/ | http://www.tarlo.pl/tarlo | http://www.tarlo.pl/koncerty | http://www.tarlo.pl/rzucuchem | http://www.tarlo.pl/rzucokiem | http://www.tarlo.pl/kontakt | http://www.tarlo.pl/prasarider | http://www.tarlo.pl/kup | https://www.youtube.com/channel/UCAK10cFtn2SoFgZu-TsP1Tg | https://www.instagram.com/tarlo_rockband/' },
             { name: 'keywords', content: "tarlo, zespół, Tarło, tarlo, muzyka, rock, kiedy, leszcza, w, ryb, u, okonia, szczupaka, legno, e, gurami, in, to, do, karpia, płoci, testa, danio, del, youtube, znachorka, jest, temperatura, amura, co, dorsza, lima, d'amor, cura, mordace, english, karasia, lina, minoga, neon, wody, pstrąga, asiatico, quanto, vive, quel, ma, Tarło - Oficjalna Strona Zespołu, Łysybył, List, Autorska Muzyka, https://www.facebook.com/tarlorockband/, http://www.tarlo.pl/, http://www.tarlo.pl/tarlo | http://www.tarlo.pl/koncerty, http://www.tarlo.pl/rzucuchem, http://www.tarlo.pl/rzucokiem, http://www.tarlo.pl/kontakt | http://www.tarlo.pl/prasarider | http://www.tarlo.pl/kup, https://www.youtube.com/channel/UCAK10cFtn2SoFgZu-TsP1Tg,  https://www.instagram.com/tarlo_rockband/'" }
       ] ,
      title: 'Tarło - Oficjalna Strona Zespołu - Kup',
      htmlAttrs: {
        lang: 'pl',
        amp: true,
        charset: 'utf-8',
        },

    }
}
</script>