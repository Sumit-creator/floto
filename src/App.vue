<script>
import Demo from "./views/Demo.vue";
export default {
  name: "App",
  components: {
    Demo,
  },
  data() {
    return { isLoading: true };
  },
  mounted() {
    setTimeout(() => {
      this.isLoading = false;
    }, 3000);
  },
};
</script>
<template>
  <Demo v-if="isLoading" />
  <div class="">
    <RouterView v-if="!isLoading" />
  </div>
</template>
