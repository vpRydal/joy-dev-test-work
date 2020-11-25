export default {
    namespaced: true,

    state: () => ({
        selectedAtc: null
    }),

    getters: {
        selectedAtc: state => state.selectedAtc
    },

    mutations: {
        setSelectedAtc(state, newSelectedAtc) {
            state.selectedAtc = newSelectedAtc;
            localStorage.setItem('selected-atc', newSelectedAtc);
        },
        init() {
            this.commit('ATC/setSelectedAtc', localStorage.getItem('selected-atc') || '');
        }

    },

    actions: {
        setSelectedAtc(context, newSelectedAtc) {
            context.commit('setSelectedAtc', newSelectedAtc);
        },
        init(context) {
            context.commit('init')
        }
    },
}