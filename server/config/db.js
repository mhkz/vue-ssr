const Sequelize = require('sequelize');

const  Todolist = new Sequelize('mysql://root:123456@localhost/todolist',{
  define: {
    timestamp: false // 取消Sequelize 自动给表加入时间戳（createAt 以及 updatedAt）
  }
})

export default {
  Todolist // 将Todolist暴露出接口方便Module调用
}
