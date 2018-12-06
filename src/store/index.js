import Vue from 'vue'
import vuex from 'vuex'
Vue.use(vuex);
var store = new vuex.Store({//store对象
    state:{
        isShow:false,
		oimg:null,
		id :null
    },
	mutations:{
		myennter(){
			this.state.isShow = true
		},
		myleve(){
			this.state.isShow = false
		},
		// 隐藏弹窗
		hidediv(e){
			console.log(e)
		},
		// 选择添加的点位
		chooseImg(state,osrc){
			state.oimg = osrc.osrc
			state.oid = osrc.id
			console.log(osrc)
			// console.log($event)
		}, 
	
	}
})

export default store