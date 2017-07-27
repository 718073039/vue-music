/*state状态存放*/
import {playMode} from 'common/js/config'

const state = {
	singer: {}, //歌手
	playing: false, //播放状态
	fullScreen: false, //是否全屏
	playlist: [], //播放列表
	sequenceList: [], //播放顺序列表
	mode: playMode.sequence, //播放模式
	currentIndex: -1 //当前播放歌曲index
}

export default state
