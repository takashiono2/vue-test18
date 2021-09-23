export default {
  namespaced: true,
  state: {
    updated: (new Date()).toLocaleTimeString(),
  },
  mutations: {
    setUpdated(state){
      state.updated = (new Date()).toTimeString()//setUpdatedを実行 {
    //(new Date()).toLocaleTimeString()を使う
    }
  }
}