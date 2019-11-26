// 创建两个全局过滤器
import Vue from 'vue'
// 钱包过滤器
Vue.filter('RMB', (money) => {
  var n = parseFloat(money).toFixed(2)
  var re = /(\d{1,3})(?=(\d{3})+(?:\.))/g
  return '￥' + n.replace(re, '$1,')
})
// 电话过滤器
Vue.filter('savePhone', (phone) => {
  phone += ''
  return phone.substring(0, 4) + '*****' + phone.substring(8)
})
