import store from '../store/index'

export default {
    computed: {
        selectedAtc() {
            return store.getters['ATC/selectedAtc']
        }
    }
}