<template>
  <v-container fluid class="py-0 my-0 mt-0">
    <v-row class="py-0 my-0">
      <v-col md="9" sm="6" cols="12" class="py-0 my-0">
        <p class="google-font mb-1" style="font-size:110%">
          우리의 이벤트는 Google의 기술에 관심이 있거나 이를 프로젝트의 일부로
          사용하는 초보자, 개발자, 관리자 및 조직에 열려 있습니다.
        </p>
        <br />
        <p class="google-font">{{ data.shortDescription }}</p>
        <p class="google-font mt-5">
          궁금한점이 있다면
          <a
            style="color:#1565C0;text-decoration: none;"
            :href="`mailto:${config.generalConfig.email}`"
            >{{ config.generalConfig.email }}</a
          >로 연락주세요.
        </p>
        <CommunitySocialInfo :config="config" class="mb-2" />
        <span v-for="(item, i) in data.hashtags" :key="i">
          <v-chip
            class="mr-1 mb-1"
            :href="'https://twitter.com/hashtag/' + item"
            target="_blank"
            label
            >#{{ item }}</v-chip
          >
        </span>
      </v-col>
      <v-col md="3" sm="6" cols="12" class="py-0 my-0">
        <img
          :src="require('@/assets/img/svg/contact.svg')"
          style="float:right"
          width="80%"
          alt
        />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
// import SocialInfo from '@/components/common/SocialInfo'
import { mapState } from 'vuex';

export default {
  components: {
    CommunitySocialInfo: () =>
      import('@/components/common/CommunitySocialInfo'),
  },
  data: () => ({}),
  computed: {
    ...mapState(['config']),
  },
  props: ['data'],
};
</script>
