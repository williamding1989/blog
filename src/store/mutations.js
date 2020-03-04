import state from '@/store/state.js'
export default {
  footer_hide () {
    state.type =	false
    console.log(state.type)
  },
  footer_show () {
    state.type =	true
    console.log(state.type) 	
  },
  showloader () {
  	state.loadingstate = true
  	console.log(state.loadingstate) 	
  },
  hideloader () {
  	setTimeout(function(){
   		state.loadingstate = false  		
  	},500)
  	console.log(state.loadingstate)  	
  }
}
