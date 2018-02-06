// 引入Vue插件
import Vue from 'vue'
// 引入VueRouter插件
import Router from 'vue-router'
// 引入商品首页
import ShopIndex from '@/pages/ShopIndex'
// 引入商品详情页
import ShopDetail from '@/pages/ShopDetail'
// 引入购物车页面
import ShopCart from '@/pages/ShopCart'
// 引入地址组件
import ShopAddress from '@/pages/ShopAddress'
// 引入订单列表组件
import ShopOrders from '@/pages/ShopOrders'
// 引入订单确认组件
import ShopOrderConfirm from '@/pages/ShopOrderConfirm'
// 引入订单成功组件
import ShopOrderSuccess from '@/pages/ShopOrderSuccess'
// 使用VueRouter组件
Vue.use(Router)
// 导出VueRouter的实例
export default new Router({
  // mode: 'history',
  // 配置路由
  routes: [
    {
      path: '/',
      name: 'Index',
      component: ShopIndex
    },
    {
      path: '/detail/:productId',
      name: 'Detail',
      component: ShopDetail
    },
    {
      path: '/cart',
      name: 'Cart',
      component: ShopCart
    },
    {
      path: '/address',
      name: 'Address',
      component: ShopAddress
    },
    {
      path: '/orders',
      name: 'Orders',
      component: ShopOrders
    },
    {
      path: '/orderConfirm',
      name: 'OrderConfirm',
      component: ShopOrderConfirm
    },
    {
      path: '/orderSuccess',
      name: 'OrderSuccess',
      component: ShopOrderSuccess
    },
    {
      path: '*',
      name: 'Other',
      component: ShopIndex
    }
  ]
})
