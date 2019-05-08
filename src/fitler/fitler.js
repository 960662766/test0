/**
 * Created by guofang on 2018/8/21.
 */
import Vue from 'vue'
Vue.filter('fomater', function (value) {
  if (!value) return ''
  value = value.toString()
  return value.substring(5,value.length-3)
})
Vue.filter('fomaterduration', function (value) {
  let val;
  if (!value) return ''
  value = value.toString();
  function getcount(){
    let count=0;
    for(var i=0;i<value.length;i++){
        value.charAt(i)==':'?count++:count=0;
    }
    return count;
  }
  val=getcount(value)>1?value.substring(0,value.length-3):value.split(":")[0]+"'"+value.split(":")[1]+'"';
  return val;
})

Vue.filter('fomaternum', function (value) {
  let val;
  if (!value) return 0
  value = value.toString()
  val=value.length>4?value.substring(0,value.length-4)+'w+':value
  return val;
})

Vue.filter('fomatertime', function (value) {//时间格式
  let val;
  if (!value) return " "
  value = value.toString()
  val=value.substring(0,10)
  return val;
})



