import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions'
import * as getters from './getters'
import state from './state'
import mutations from './mutations'
import createLogger from 'vuex/dist/logger'
//用于打印修改信息

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'
//用于检测对state的修改是否通过mutations,不是则报错(开发模式开启)

export default new Vuex.Store({
	actions,
	getters,
	state,
	mutations,
	strict: debug,
	plugins: debug ? [createLogger()] : []
})



