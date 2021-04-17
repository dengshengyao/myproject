import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
	  checked:[true,false],
	  value:[1,1],
	  price:[1099,899],
	  login:NaN,
	  count:2,
	  good:[
		  {
			  path:require('@/assets/imgs/593.png'),
			  name:'Yeelight皓石LED吸顶灯Pro'
		  },
		  {
			  path:require('@/assets/imgs/5931.png'),
			  name:'红米6全网通版4 GB内存 64GB白 金灰 64GB'
		  }
	  ],
	  user:[
		  {
			  id:1,
			  un:123,
			  pw:123
		  },
		  {
			  id:2,
			  un:123,
			  pw:123
		  }
	  ]
	  // allprice:
  },
  mutations: {
	  add(state,payload){
	  	state.user.push({
			id:++state.count,
			...payload
		})
	  },
	  setlogin(state,payload){
		  state.login=payload
	  },
	  addgoods(state,payload){
		  state.checked.append(payload.checked)
		  state.value.append(payload.value)
		  state.price.append(payload.price)
		  state.good.append(payload.good)
	  }
  },
  actions: {
  },
  modules: {
  }
})
