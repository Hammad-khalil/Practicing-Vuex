<template>
  <div>{{ this.$store.state.counter }}</div>
  <button @click="addOne">ADD 10</button>
</template>

<script>
export default {
  methods: {
    addOne() {
      this.$store.commit('increment', { value: 10 });
    },
  },
};
</script>

<style></style>
