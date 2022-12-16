<template>
  <div class="fixed w-screen bottom-0 left-0">
    <div
      id="popup"
      class="appear mx-auto font-semibold text-white flex justify-center items-center rounded-lg w-96 h-14 mb-10 bg-green-700 bg-opacity-90 shadow-[0_10px_20px_rgba(0,_175,_90,_0.6)]"
    >
      <Icon
        icon="material-symbols:check-circle"
        color="white"
        width="25"
        height="25"
        class="mx-2"
      />
      <p>Raccourcis ajouté avec succés</p>
    </div>
  </div>
</template>

<script setup>
import { Icon } from "@iconify/vue";
const props = defineProps({ display: { type: Boolean, required: true } });
console.log(props.display);

if (props.display === false) {
  console.log("in if");
  document.getElementById("popup").classList.remove("appear");
  document.getElementById("popup").classList.add("desappear");
}
</script>
