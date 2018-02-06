import db from '../config/db.js';
const userModel = '../schema/user.js'; // 引入user 表结构
const TodoListDb = db.Todolist; // 引入数据库

const User = TodoListDb.import(userModel) // 用sequelize的import 方法导入表结构 实例化user

const getUserById = async function (id) { // 注意是async function 而不是function。对于需要等待promise结果的函数都需要async await。
  const userInfo = await User.findOne({ // 用await控制异步操作，将返回的Promise对象里的数据返回出来。也就实现了“同步”的写法获取异步IO操作的数据
    where: {
      id: id
    }
  })

  return userInfo // 返回数据
}
export default {
  getUserById, // 导出getUserById的方法，将会在controller里调用
}
