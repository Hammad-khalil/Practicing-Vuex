<template>
  <section>
    <base-container title="Vuex"></base-container>
    <the-counter></the-counter>
    <counter-commit></counter-commit>
    <counter-action></counter-action>
    <h1>{{ counter }}</h1>
    <button @click="addOne">ADD 1</button>

    <base-container title="UserAuth">
      <user-auth></user-auth>
    </base-container>
  </section>
</template>

<script>
import BaseContainer from './components/BaseContainer.vue';
import CounterCommit from './components/CounterCommit.vue';
import CounterAction from './components/CounterAction.vue';
import TheCounter from './components/TheCounter.vue';
import UserAuth from './components/UserAuth.vue';

export default {
  components: {
    BaseContainer,
    CounterCommit,
    CounterAction,
    TheCounter,
    UserAuth,
  },
  computed: {
    counter() {
      return this.$store.state.counter;
    },
  },
  methods: {
    addOne() {
      this.$store.commit('increment', { value: 1 });
    },
  },
};
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>
