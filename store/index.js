import Vuex from 'vuex'

const createStore = () => {
  return new Vuex.Store({
    state() {
      return {
        page: 'index',
        currentPost: 0,
      };
    },
    getters: {
      current: state => state.currentPost,
    },
    mutations: {
       updatePage(state, pageName) {
        state.page = pageName;
      }
    }
  })
}

export default createStore