import Vue from 'vue'
import Vuex from 'vuex'
import spots from './modules/spots'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  modules: {
    spots
  },
  strict: debug
})
