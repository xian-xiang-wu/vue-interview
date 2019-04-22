import Vue from 'vue'
import Vuex from 'vuex'
import mockGenerator from './mock'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    dataList: []
  },
  mutations: {
    updateStateDataList (state, data) {
      for (var i in data){
        state.dataList.push(data[i])
      }
    }
  },
  getters: {
    getAverage: state => {
      if(state.dataList.length){
        var num = 0;
        for(var i=0;i<state.dataList.length;i++ ){
          num += state.dataList[i].data;
        }
        return (num/i).toFixed(2);
      }
      else{
        return '加载中...';
      }
    },
    getData: state => {
      if(state.dataList.length){
        return state.dataList
      }else{
        return '';
      }
    }
  },
  actions: {
    getDataCall (context, num) {
      // TODO
      mockGenerator(num*20,(num+1) * 20).then((data)=>{
      context.commit('updateStateDataList', data)
    })
  }
}
})
