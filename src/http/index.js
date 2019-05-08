import axios from 'axios'
var ajax = axios.create({
	  baseURL:'http://39.97.158.170/bigscreen/',
  	timeout: 30000
})
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8'

axios.defaults.withCredentials = true

ajax.interceptors.response.use(function (response) {
  if(response.data && response.data.statusCode == 200){
  	return response
  } else {
  	// this.$Message.error("出错了")
  }
  return response
  
}, function (error) {
  return Promise.reject(error)
})

export default ajax
