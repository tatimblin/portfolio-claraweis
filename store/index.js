import Vuex from 'vuex'

const createStore = () => {
  return new Vuex.Store({
    state() {
      return {
        page: 'index',
        currentPost: 0,
        postLength: 0,
      };
    },
    getters: {
      current: state => state.currentPost,
    },
    mutations: {
      updatePage(state, pageName) {
        state.page = pageName;
      },
      updateLength(state, l) {
        state.postLength = l;
      },
      updateProj(state, dir) {
        console.log('hi');
        let i = state.currentPost;
        const l = state.postLength;
        if (dir === 'next' && i < l) {
          i += 1;
        } else if (dir === 'prev' && i === 0) {
          i = l;
        } else if (dir === 'prev') {
          i -= 1;
        } else {
          i = 0;
        }
        state.currentPost = i;
      }
    }
  })
}

export default createStore