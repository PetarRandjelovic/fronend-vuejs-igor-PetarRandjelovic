import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token: '',
    genre:[],
    dimension:[],
    movie:[],
    actor:[],
    director:[],
    cinema:[],
    broadcast:[],
    reservation:[],
    items:[],


  },
  getters: {
  },
  mutations: {
    addGenre(state,genreIN){
      state.genre=genreIN;
   
    }, addDimension(state,dimensionIN){
      state.dimension=dimensionIN;
     

    },addMovie(state,movieIN){
      state.movie=movieIN;
    

    },addCinema(state,cinemaIN){
      state.cinema=cinemaIN;
     

    },
    addBroadcast(state,broadcastIN){
     
      state.broadcast=broadcastIN;
     

    }, addReservation(state,reservationIN){
    
      state.reservation=reservationIN;
     

    }, addComment(state, obj) {
      const image = state.items.filter( item => item.objectID == obj.artId )[0];
      if (image) {
        image.comments.push(obj.comment);
      }
    },


    setToken(state, token) {
      state.token = token;
      localStorage.token = token;
    },

    removeToken(state) {
      state.token = '';
      localStorage.token = '';
    }, addItem(state, item) {
      state.items.push(item);
    },
    

  },
  actions: {

    register({ commit }, obj) {
      fetch('http://127.0.0.1:9000/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(obj)
      }).then( res => res.json() )
        .then( tkn => commit('setToken', tkn.token) );
    },

    login({ commit }, obj) {
      fetch('http://127.0.0.1:9000/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(obj)
    }).then( res => res.json() )
      .then( tkn => {
        if (tkn.msg) {
          alert(tkn.msg);
        } else {
          commit('setToken', tkn.token)
        }
      });
    },
    fetchGenre({commit}){
     
      fetch('http://127.0.0.1:8090/admin/genre', {
     
    })   .then(res => res.json())
    .then( data => {commit('addGenre',data)});
    }, fetchDimension({commit}){
     
      fetch('http://127.0.0.1:8090/admin/dimension', {
       
    }).then(res => res.json())
    .then( data => {commit('addDimension',data)});
    },fetchMovie({commit}){
    
      fetch('http://127.0.0.1:8090/admin/movies', {
      
    }).then(res => res.json())
    .then( data => {commit('addMovie',data)});
    },
    fetchCinema({commit}){
      //state.cinema=cinemaIN; ovo ne ide promeni
      fetch('http://127.0.0.1:8090/admin/cinema', {
       
    })
        .then(res => res.json())
        .then( data => {commit('addCinema',data)});

    }, fetchBroadcast({commit}){
      //state.cinema=cinemaIN; ovo ne ide promeni
      fetch('http://127.0.0.1:8090/admin/broadcast', {
       
    })
        .then(res => res.json())
        .then( data => {commit('addBroadcast',data)});

    },fetchSingleBroadcast({commit},id){
 
       
          fetch(`http://127.0.0.1:8090/admin/broadcast/${id}`, {
       
        })
            .then(res => res.json())
            .then( data => {commit('addBroadcast',data)});
    
    },fetchReservation({commit}){
 
      fetch('http://127.0.0.1:8090/admin/reservation', {
       
    })
        .then(res => res.json())
        .then( data => {commit('addReservation',data)});
},fetchSingleMovie({commit},id){
 
  fetch(`http://127.0.0.1:8090/admin/movies/${id}`, {

})
    .then(res => res.json())
    .then( data => {commit('addMovie',data)});

},   getItem({ commit, state }, id) {
  return new Promise( (resolve, reject) => {
    const item = state.items.filter( item => item.id == id )[0];
    

      fetch(`http://127.0.0.1:8090/admin/movies/${id}`)
        .then( obj => obj.json())
        .then( res => {
          ///api/messages/${res.id}
          fetch(`http://127.0.0.1:8090/admin/movies/${id}`, {
            headers: { 'Authorization': `Bearer ${state.token}` }
          }).then( resp => resp.json() )
            .then( comments => {
              res['comments'] = comments;
              commit('addItem', res);
              resolve(res);
            });
        });
  
  });
},  socket_comment({ commit }, msg) {
  const comment = JSON.parse(msg);
  commit('addComment', { id: comment.id, comment: comment });
}
  },
  modules: {
  }
})
