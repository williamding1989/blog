import state from '@/store/state.js'
export default{
  gettype (state) {
    return state.type
  },
  loadingshow (state) {
  	return state.loadingstate
  }
}
