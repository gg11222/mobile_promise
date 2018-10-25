//引入mockjs
const Mock = require('mockjs')
//使用mockjs模拟数据
Mock.mock('/api/data', (req, res) => {
  return {
    data: Mock.mock({
      'number1|1-100.1-10': 1,
      'number2|123.1-10': 1,
      'number3|123.3': 1,
      'number4|123.10': 1.123
    }),
    src: Mock.Random.image('180x80',"","Login")
  }
})
Mock.mock('/api/login', (req, res) => {
  return {
    ret:0
  }
})
