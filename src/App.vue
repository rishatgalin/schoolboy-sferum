<template>
  <div class="main" v-if="!isLoading">
    <div>
      <div class="main__content">
        <div class="main__header">
          <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
            <mask id="mask0_4638_3456" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="0" y="0" width="36" height="36">
              <path d="M0 0H36V36H0V0Z" fill="white"/>
            </mask>
            <g mask="url(#mask0_4638_3456)">
              <path d="M0 17.1148C0 9.0468 0 5.0128 2.5063 2.5064C5.0127 0 9.0467 0 17.1147 0H18.8852C26.9532 0 30.9871 0 33.4935 2.5064C35.9999 5.0128 35.9999 9.0468 35.9999 17.1148V18.8852C35.9999 26.9532 35.9999 30.9872 33.4935 33.4936C30.9871 36 26.9532 36 18.8852 36H17.1147C9.0467 36 5.0127 36 2.5063 33.4936C0 30.9872 0 26.9532 0 18.8852V17.1148Z" fill="#0077FF"/>
              <mask id="mask1_4638_3456" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="36" height="36">
                <path d="M0 17.1148C0 9.0468 0 5.0128 2.5063 2.5064C5.0127 0 9.0467 0 17.1147 0H18.8852C26.9532 0 30.9871 0 33.4935 2.5064C35.9999 5.0128 35.9999 9.0468 35.9999 17.1148V18.8852C35.9999 26.9532 35.9999 30.9872 33.4935 33.4936C30.9871 36 26.9532 36 18.8852 36H17.1147C9.0467 36 5.0127 36 2.5063 33.4936C0 30.9872 0 26.9532 0 18.8852V17.1148Z" fill="#313131"/>
              </mask>
              <g mask="url(#mask1_4638_3456)">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M39.9534 13.3197C40.4841 11.6033 40.77 9.77929 40.77 7.8886C40.77 -2.2514 32.5499 -10.4714 22.41 -10.4714C12.27 -10.4714 4.05 -2.2514 4.05 7.8886C4.05 17.369 11.2355 25.1712 20.4576 26.146V31.5004C30.0569 29.938 37.7465 22.6868 39.9534 13.3197Z" fill="#00EAFF"/>
                <path d="M12.2334 13.3607C13.7707 13.3607 15.0169 12.1145 15.0169 10.5772C15.0169 9.03992 13.7707 7.7937 12.2334 7.7937C10.6961 7.7937 9.44991 9.03992 9.44991 10.5772C9.44991 12.1145 10.6961 13.3607 12.2334 13.3607Z" fill="white"/>
                <path d="M20.5839 13.3607C22.1212 13.3607 23.3674 12.1145 23.3674 10.5772C23.3674 9.03992 22.1212 7.7937 20.5839 7.7937C19.0466 7.7937 17.8004 9.03992 17.8004 10.5772C17.8004 12.1145 19.0466 13.3607 20.5839 13.3607Z" fill="white"/>
                <path d="M28.9348 13.3607C30.4721 13.3607 31.7183 12.1145 31.7183 10.5772C31.7183 9.03992 30.4721 7.7937 28.9348 7.7937C27.3975 7.7937 26.1513 9.03992 26.1513 10.5772C26.1513 12.1145 27.3975 13.3607 28.9348 13.3607Z" fill="white"/>
              </g>
            </g>
          </svg>
          <h1>Мессенджер не подключен</h1>
        </div>
        <p>Для работы мессенджера необходимо связать ваш аккаунт с аккаунтом Сферум, чтобы общаться в чатах и проводить онлайн-звонки. Сферум – это безопасное образовательное пространство, где вы сможете общаться только с участниками своей школы в закрытых чатах.</p>
      </div>
      <div class="main__button">
        <button @click="connect">
          <span>
            Перейти к подключению
            <span>
              <svg width="25" height="24" viewBox="0 0 25 24" fill="none">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M7.5 6C7.5 5.44772 7.94772 5 8.5 5H18.5C19.0523 5 19.5 5.44772 19.5 6V16C19.5 16.5523 19.0523 17 18.5 17C17.9477 17 17.5 16.5523 17.5 16V8.41421L7.20711 18.7071C6.81658 19.0976 6.18342 19.0976 5.79289 18.7071C5.40237 18.3166 5.40237 17.6834 5.79289 17.2929L16.0858 7H8.5C7.94772 7 7.5 6.55228 7.5 6Z"
                  fill="white"/>
              </svg>
            </span>
          </span>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted, ref } from "vue";
import { Service } from "@/api";

const userData = ref<unknown>(null)
const isLoading = ref<boolean>(true)

const isHasExternalId = computed<boolean>(() => Array.isArray(userData.value) && userData.value.some(it => it.userData))

const redirectToSferum = () => {
  if (isHasExternalId.value) {
      window.location.assign("https://sferum.ru/?p=messages")
    }
}
const connect = async () => {
  try {
    // const { data } = await Service.getChoice();
    window.location.assign(
      `https://ms-edu.tatar.ru/choice/partners?return_url=${window.location.href}`
    )
  } catch (error) {
    console.log(error);
    alert("Ошибка")
  }
}

onMounted(async () => {
  try {
    isLoading.value = true;
    const { data } = await Service.getExternal()
  
    console.log(data);
    userData.value = data;
    redirectToSferum();
  } catch (error) {
    alert(error)
  } finally {
    isLoading.value = false;
  }
})
</script>

<style scoped>
.main {
  width: 100%;
  height: 100vh;
}
.main > div {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 0 16px;
  height: 100%;
}
.main__content {
  padding: 12px 0;
}
.main__header {
  display: flex;
  align-items: center;
  gap: 8px;
}
.main__content h1 {
  font-size: 20px;
  line-height: 24px;
  letter-spacing: 0.38px;
  font-family: 'Golos-Text_DemiBold';
}
.main__content p {
  margin-top: 16px;
  font-size: 17px;
  line-height: 22px;
  letter-spacing: -0.2px;
  font-family: 'Golos-Text_Regular';
}
.main__button {
  padding: 12px 0;
}
.main button {
  width: 100%;
  border-radius: 16px;
  background-color: #613EEA;
  height: 56px;
  font-size: 17px;
  font-weight: 500;
  line-height: 24px;
  color: white;
  user-select: none;
  vertical-align: middle;
  -webkit-tap-highlight-color: rgba(0,0,0,0);
  align-items: center;
  -moz-appearance: none;
  -webkit-appearance: none;
  border: 0;
  box-sizing: border-box;
  cursor: pointer;
  user-select: none;
  vertical-align: middle;
  font-family: 'Golos-Text_Medium';
}
.main button > span {
  align-items: center;
  display: inline-flex;
  justify-content: center;
}
.main button > span > span {
  display: inherit;
  margin-left: 6px;
}
</style>
