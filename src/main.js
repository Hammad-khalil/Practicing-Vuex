import { createApp } from 'vue'
import App from './App.vue';
import { createStore } from 'vuex';
const app = createApp(App);

const store = createStore({
    state() {
        return {
            counter: 0
        };
    },
    mutations: {
        increment(state, payload) {
            state.counter = state.counter + payload.value;
        }
    },
    actions: {
        increment(context) {
            setTimeout(() => {
                console.log(context.getters)
                context.commit('increment', { value: 10 })
            }, 2000);
        }
    },
    getters: {
        finalCounter(state) {
            return state.counter * 3;
        },
        normalizedCounter(state) {
            const finalCounter = state.counter * 3;
            if (finalCounter < 0) {
                return 0;
            }
            if (finalCounter > 100) {
                return 100;
            }
            return finalCounter;
        }

    }
});
app.use(store)
app.mount('#app');