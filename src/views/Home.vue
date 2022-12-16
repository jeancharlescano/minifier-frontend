<template>
  <div
    class="bg-gray-200 h-screen w-screen justify-center items-center flex absolute"
  >
    <section
      class="h-full gradient-form bg-gray-200 md:h-screen w-11/12 lg:w-1/3"
    >
      <div class="container px-6 h-full">
        <div
          class="flex justify-center items-center flex-wrap h-full g-6 text-gray-800"
        >
          <div class="xl:w-10/12">
            <div class="block bg-white shadow-lg rounded-lg">
              <div class="px-4 md:px-0">
                <div class="md:p-6 md:mx-6">
                  <div class="text-center">
                    <img
                      class="mx-auto w-48 rounded-full"
                      src="/Logo.png"
                      alt="logo"
                    />
                    <h4 class="text-xl font-semibold mt-1 mb-6 pb-1">
                      Nouveau raccourci
                    </h4>
                  </div>
                  <form>
                    <div class="mb-4">
                      <input
                        type="text"
                        class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-orange-500 focus:outline-none"
                        id="exampleFormControlInput1"
                        placeholder="raccourcis ex: google"
                        v-model="urls.miniUrl"
                      />
                    </div>
                    <div class="mb-4">
                      <input
                        type="text"
                        class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-orange-500 focus:outline-none"
                        id="exampleFormControlInput1"
                        placeholder="url ex: https://www.google.fr"
                        v-model="urls.baseUrl"
                      />
                    </div>
                    <div class="text-center pt-1 pb-1">
                      <button
                        class="inline-block px-6 py-2.5 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-white hover:border hover:border-solid hover:border-orange-500 hover:text-orange-500 hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out w-full mb-3 bg-orange-500"
                        type="button"
                        data-mdb-ripple="true"
                        data-mdb-ripple-color="light"
                        @click="addUrls()"
                      >
                        Créer
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
  <Popup v-if="create" :display="isCreate"></Popup>
</template>

<script setup>
import { ref } from "vue";
import { createUrl } from "../utilities/urlRequest.js";
import Popup from "../components/Popup.vue";

const create = ref(false);
const isCreate = ref(false);
const urls = ref({
  baseUrl: "https://",
  miniUrl: "",
});
const addUrls = async () => {
  await createUrl(urls.value)
    .then((value) => {
      if (value.data) {
        isCreate.value = true;
        create.value = true;
      }
      setTimeout(() => {
        isCreate.value = false;
      }, 3000);

      setTimeout(() => {
        create.value = false;
      }, 3900);

    })
    .catch((err) => console.log(err));
};
</script>
