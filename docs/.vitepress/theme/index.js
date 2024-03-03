import DefaultTheme from 'vitepress/theme'

import ElementPlus from 'element-plus'
console.log(`ElementPlus`, ElementPlus)
import 'element-plus/theme-chalk/dark/css-vars.css'
import 'element-plus/dist/index.css'
import locale from 'element-plus/es/locale/lang/zh-cn'
// 图标并进行全局注册
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import * as echarts from 'echarts' // 引入echarts

import { VPDemo } from '../vitepress'
// 基于element-plus二次封装基础组件
import oeosV3Components from '../../../packages/index.js'
// import '../../public/css/index.css'

export default {
  ...DefaultTheme,
  enhanceApp(ctx) {
    DefaultTheme.enhanceApp(ctx)
    ctx.app.config.globalProperties.$echarts = echarts // 全局使用
    // 注册ElementPlus
    ctx.app.use(ElementPlus, {
      locale, // 语言设置
    })
    ctx.app.component('Demo', VPDemo)
    // 注册所有图标
    for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
      ctx.app.component(key, component)
    }
    // 全局注册基础组件
    ctx.app.use(oeosV3Components)

    // ctx.app.component('Demo', VPDemo)
  },
}
