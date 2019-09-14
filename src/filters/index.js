import Vue from 'vue'
import format from 'date-fns/format'

//自定义过滤器
Vue.filter('date-format',function (value,formatStr) { //解析函数
  return format(value, formatStr || 'YYYY-MM-DD HH:mm:ss')
})
