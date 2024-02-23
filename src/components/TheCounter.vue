<template>
  <div>
    Getters
    {{ normalizedCounter }}
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  computed: {
    ...mapGetters(['normalizedCounter']),
    // counter() {
    //   return this.$store.getters.normalizedCounter;
    // },
  },
};
</script>

<style></style>
