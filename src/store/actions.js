export default{
  footer_hide: ({commit}) => {
    commit('footer_hide')
  },
  footer_show: ({commit}) => {
  	commit('footer_show')
  },
  showloader: ({commit}) => {
  	commit('showloader')
  },
  hideloader: ({commit}) => {
  	commit('hideloader')
  }
}
