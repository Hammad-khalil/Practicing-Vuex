<template>
  {{ this.$store.state.counter }}
  <button @click="increment">Add Late</button>
</template>

<script>
import { mapActions } from 'vuex';
export default {
  methods: {
    ...mapActions(['increment']),
    // addaction() {
    //   this.$store.dispatch('increment');
    // },
  },
};
</script>

<style></style>
