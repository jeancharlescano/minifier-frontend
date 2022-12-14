<template></template>

<script setup>
import { onBeforeMount, ref } from "vue";
import { useRouter } from "vue-router";
import { getAllUrls } from "../utilities/urlRequest.js";

const router = useRouter();
const urls = ref([]);

const mini = router.currentRoute.value.params.mini;

onBeforeMount(async () => {
  try {
    urls.value = await getAllUrls();
    for (const url of urls.value) {
      if (url.mini_url === mini) {
        window.location.href = `${url.base_url}`;
      }
    }
  } catch (error) {
    console.log(error);
  }
});
</script>
