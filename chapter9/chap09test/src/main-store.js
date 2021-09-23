export default {
  namespaced: true,
  state: {
    updated: (new Date()).toTimeString(),
  },
  mutations: {
    setUpdated(state){
      state.updated = (new Date()).toTimeString()
    }//setUpdatedを実行
    //(new Date()).toTimeString()を使う
  },
  // getters: {//updatedプロパティを取得するlocalUpdated
  //   localUpdated(state) {
  //     return state.updated
  //   },
  // }
}