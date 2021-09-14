<template>
    <v-container fluid class="py-0 my-0 mt-5">
        <v-row class="py-0 my-0">
            <v-col md="12" sm="12" cols="12" class="py-0 my-0">
                <h1 class="google-font mb-2">차별 금지 조항</h1>
            </v-col>
        </v-row>
        <v-row class="py-0 my-0">
            <v-col md="8" sm="12" cols="12" class="py-0 my-0">
                <p class="google-font" style="font-size:100%">
                    <b style="font-size:120%;">GDSC SSU에 차별금지 조항이 있는 이유가 뭔가요?</b>

                    <ul class="mt-2" style="font-size:100%">
                        <li class="google-font">이벤트 동작에 대한 기대치를 설정합니다. 단순히 괴롭힘 방지 정책을 갖는 것은 괴롭힘을 예방할 수 있습니다.</li>
                        <li class="google-font">다른 행사에서 좋지 않은 경험을 한 사람들이 참석하도록 권장합니다.</li>
                        <li class="google-font">이벤트 직원/자원봉사자에게 이벤트 중단을 최소화하면서 괴롭힘을 신속하게 처리하는 방법에 대한 지침을 제공합니다.</li>
                    </ul>
                </p>

                <p class="google-font" style="font-size:110%">
                    <b style="font-size:120%;">{{data}}는 다음에 관계없이 모든 사람에게 괴롭힘 없는 이벤트 경험을 제공하기 위해 최선을 다하고 있습니다.</b>

                    <ul class="mt-2" style="font-size:110%">
                        <li class="google-font">성별</li>
                        <li class="google-font">성적 지향성</li>
                        <li class="google-font">장애</li>
                        <li class="google-font">성 정체성</li>
                        <li class="google-font">나이</li>
                        <li class="google-font">인종</li>
                        <li class="google-font">종교</li>
                        <li class="google-font">국적</li>
                    </ul>

                    <span class="google-font" style="font-size:100%">위의 목록은 전체 목록이 아닙니다. 우리는 어떤 형태로든 이벤트 참가자에 대한 괴롭힘을 용납하지 않습니다. </span>
                </p>

                <p class="google-font" style="font-size:120%">성적인 언어와 이미지는 대화를 포함한 모든 이벤트 장소에 적합하지 않습니다. 본 규정을 위반한 이벤트 참가자는 이벤트에서 퇴출될 수 있으며, 이벤트 주최자/운영자의 판단에 따라 향후 이벤트에서 이벤트가 금지될 수 있습니다. </p>

                <p class="google-font" style="font-size:110%">괴롭힘에는 다음이 포함됩니다(단, 이에 국한되지 않음).
                    <ul class="mt-2" style="font-size:100%">
                        <li class="google-font">성별, 성적 취향, 장애, 성 정체성, 나이, 인종, 종교와 관련된 공격적인 언어적 언급</li>
                        <li class="google-font">공공 장소에서 성적인 이미지의 사용 또는 전시</li>
                        <li class="google-font">고의적인 협박</li>
                        <li class="google-font">스토킹</li>
                        <li class="google-font">괴롭히는 사진 또는 녹음</li>
                        <li class="google-font">회의 또는 기타 행사의 지속적인 방해</li>
                        <li class="google-font">부적절한 신체 접촉</li>
                        <li class="google-font">원치 않는 성적 관심</li>
                    </ul>
                </p>

                <p class="google-font" style="font-size:100%">괴롭힘 행위를 중단하도록 요청받은 참가자는 즉시 준수해야 합니다.
                    <br><br>
                    전시 파트너 및 게스트에게도 괴롭힘 금지 정책이 적용됩니다. 특히, 출품자와 연사는 성적 이미지, 활동 또는 기타 자료를 사용하거나 슬라이드 데크, 전시 자료, 전시 직원, 판촉 품목 또는 데모 자료에 성적 환경을 조성해서는 안 됩니다.
                    <br><br>
                    괴롭힘을 당하고 있거나 다른 사람이 괴롭힘을 당하고 있다는 사실을 알게 되거나 기타 우려 사항이 있는 경우 즉시 주최자 또는 이벤트 자원 봉사자에게 연락하십시오. 주최자 및 이벤트 자원 봉사자는 티셔츠 또는 특수 배지/끈으로 식별될 수 있습니다. 주최측은 문제를 조사하고 적절한 조치를 취할 것입니다. 여기에는 참가자가 행사장 보안 또는 현지 법 집행 기관에 연락하거나, 에스코트를 제공하거나, 괴롭힘을 겪고 있는 이들이 행사 기간 동안 안전하게 지낼 수 있도록 돕는 것이 포함될 수 있습니다.
                    <br><br>
                    이 정책을 적용할 필요가 없기를 바라지만 이 문서가 있으면 모든 사람이 자신의 행동과 말이 전체 커뮤니티와 커뮤니티의 개인에 미치는 영향에 대해 조금 더 생각하는 데 도움이 된다고 믿습니다.
                </p>
            </v-col>
            <v-col md="4" sm="4" cols="12" class="py-0 my-0 hidden-sm-and-down">
               
            </v-col>
            
        </v-row>
    </v-container>
</template>

<script>
export default {
    props:['data'],
    data:()=>({

    })
}
</script>