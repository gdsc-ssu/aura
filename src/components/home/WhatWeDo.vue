<template>
  <v-container fluid>
    <v-row align="center" justify="center">
      <v-col cols="12" md="3" lg="3" sm="4" class>
        <p class="google-font mb-0" style="font-size:150%">
          Mission of GDSC SSU
        </p>
        <p class="google-font mt-0" style="font-size:95%">
          GDSC SSU는 최고의 개발자를 모으고, 기술을 전파하고, 함께 배우고
          성장하며 학창 시절의 추억을 만드는것을 미션으로 여깁니다.
        </p>
        <p class="google-font" style="font-size:95%"></p>
        <span v-for="(item, i) in whatwedodata" :key="i"> </span>
      </v-col>
      <v-col cols="12" md="9" lg="9" sm="8">
        <v-container fluid>
          <v-row>
            <v-col md="3" lg="3" sm="6" cols="6" class="text-center pa-2">
              <v-icon large style="font-size:300%">mdi-comment</v-icon>
              <p class="google-font mt-2" style="font-size:130%">Talks</p>
              <p class="google-font" style="font-size:95%">
                커뮤니티 멤버들과 함께 기술적인 교류와 소통, 네트워킹 기회를
                가져봐요!
              </p>
            </v-col>
            <v-col md="3" lg="3" sm="6" cols="6" class="text-center pa-2">
              <v-icon large style="font-size:300%">mdi-code-tags</v-icon>
              <p class="google-font mt-2" style="font-size:130%">Codelabs</p>
              <p class="google-font" style="font-size:95%">
                Get hands-on experience and guidance from the community members
              </p>
            </v-col>
            <v-col md="3" lg="3" sm="6" cols="6" class="text-center pa-2">
              <v-icon large style="font-size:300%">mdi-school</v-icon>
              <p class="google-font mt-2" style="font-size:130%">
                Campus Roadshows
              </p>
              <p class="google-font" style="font-size:95%">
                Share knowledge in different Companies, colleges and
                universities
              </p>
            </v-col>
            <v-col md="3" lg="3" sm="6" cols="6" class="text-center pa-2">
              <v-icon large style="font-size:300%">mdi-chart-bubble</v-icon>
              <p class="google-font mt-2" style="font-size:130%">
                Live Viewing Parties
              </p>
              <p class="google-font" style="font-size:95%">
                Share knowledge in different Companies, colleges and
                universities
              </p>
            </v-col>
          </v-row>
        </v-container>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import whatwedodata from '@/assets/data/whatwedo.json';
export default {
  name: 'App',
  data: () => ({
    whatwedodata: whatwedodata,
  }),
  methods: {
    getImgUrl(url) {
      if (url.length > 0) {
        return require('@/assets/img/what-we-do/' + url);
      } else {
        return require('@/assets/img/what-we-do/notFound.png');
      }
    },
  },
};
</script>
