import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    links: [
      'https://www.google.com/',
      'https://www.youtube.com/',
      'https://www.coursehero.com/'
    ],
    // links: [
    //   {
    //     id: 1,
    //     data: 'https://www.google.com/'
    //   },
    //   {
    //     id: 2,
    //     data: 'https://www.youtube.com/'
    //   },
    //   {
    //     id: 3,
    //     data: 'https://www.coursehero.com/'
    //   }
    // ]
  },
  getters:{
    // userData: (state) => state.user
    countLinks: (state) =>{
      return state.links.length
    },
    userData: (state)  =>{
      return state.links
    }
  },
  mutations: {
    // EDIT(state, paylod){
    //   state.user.push(paylod)
    //   console.log('mutation', paylod);
    // },
    ADD_LINK: (state, link) =>{
      state.links.push(link)
    },
    REMOVE_LINK: (state, link) =>{
      state.links.splice(link, 1)
      // state.links.splice(state.links.indexOf(link), 1)
    }
  },
  actions: {
    addLink: (context, link) =>{
      context.commit('ADD_LINK', link)
    },
    removeLink: (context, link) =>{
      console.log("index", link);
      context.commit('REMOVE_LINK', link)
    }
  },
  
  
});
