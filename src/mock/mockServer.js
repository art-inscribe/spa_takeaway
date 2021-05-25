import Mock from 'mockjs'
import data from './data.json'

//返回goods商品列表的接口
Mock.mock('/goods', { code: 0, data: data.goods })
    //返回ratings评论的接口
Mock.mock('/ratings', { code: 0, data: data.ratings })
    //返回info商家的接口
Mock.mock('/info', { code: 0, data: data.info })

// export default ???  //不需要向外暴露任何数据，只需能执行一次即可