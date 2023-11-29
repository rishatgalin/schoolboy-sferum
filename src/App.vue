<template>
  <div class="main" v-if="!isLoading">
    <button v-if="isHasExternalId" @click="redirectToSferum">Перейти к мессенджер</button>
    <button @click="connect">Перейти к подключению</button>
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
      window.location.replace("https://sferum.ru/?p=messages")
    }
}
const connect = async () => {
  try {
    // const { data } = await Service.getChoice();
    window.location.replace(
      `https://ms-edu.tatar.ru/choice/partners?return_url=dnevnik-mes://authRegionRedirect`
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
  
    console.log(data)
    userData.value = data;
  } catch (error) {
    alert(error)
  } finally {
    isLoading.value = false;
  }
})
</script>

<style scoped>
.main {
  padding: 16px;
}
</style>
