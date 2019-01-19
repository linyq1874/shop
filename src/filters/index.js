import Vue from 'vue'

// 距离过滤器
Vue.filter('distance', (val) => {
  let fix = '';

  if (typeof val == 'string') {
    val = parseInt(val)
  }
  if (val < 0.2) {
    fix = '< 200 m'
  } else if (val < 1) {
    fix = val * 1000 + 'm'
  } else if (val <= 100) {
    fix = val + 'km'
  } else {
    fix = '太远了！'
  }

  return fix;
})
