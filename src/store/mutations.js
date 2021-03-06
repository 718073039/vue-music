//配置修改state的mutation方法
import * as types from './mutation-types'

const mutations = {
	[types.SET_SINGER](state, singer) {
		state.singer = singer
	},
	[types.SET_PLAY_STATE](state, flag) {
		state.playing = flag
	},
	[types.SET_FULLSCREEN](state, flag) {
		state.fullScreen = flag
	},
	[types.SET_PLAYLIST](state, list) {
		state.playlist = list
	},
	[types.SET_SEQENCE_LIST](state, list) {
		state.sequenceList = list
	},
	[types.SET_MODE](state, mode) {
		state.mode = mode
	},
	[types.SET_CURRENT_INDEX](state, index) {
		state.currentIndex = index
	}
}

export default mutations



