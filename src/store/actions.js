import * as types from './mutation-types'
export const selectPlay = function ({commit, state}, {list, index}){
	commit(types.SET_SEQENCE_LIST, list)
	commit(types.SET_PLAYLIST, list)
	commit(types.SET_CURRENT_INDEX, index)
	commit(types.SET_FULLSCREEN, true)
	commit(types.SET_PLAY_STATE, true)
}
