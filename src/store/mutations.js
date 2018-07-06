import Vue from 'vue'
export default {

        setItem(state, item) {
            Vue.set(state.items, item)
        }
    
}