import Vue from 'vue'
import Vuex from 'vuex'
import MainModule from './main-store'//MainModuleを使う 
import SubModule from './sub-store'//SubModuleを使う

Vue.use(Vuex)

export default new Vuex.Store({
//モジュールを使う
modules: {
  main: MainModule,
  sub: SubModule
}

})