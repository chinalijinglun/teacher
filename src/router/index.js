import Vue from 'vue'
import Router from 'vue-router'
import regist from '@/pages/regist/email'
import login from '@/pages/login'
import main from '@/pages/main'
import basic from '@/pages/applyProcess/basicInformation'
import basic1 from '@/pages/applyProcess/basicInformation1'
import basic2 from '@/pages/applyProcess/basicInformation2'
import reservation from '@/pages/applyProcess/reservation'
import reservation1 from '@/pages/applyProcess/reservation1'
import contract from '@/pages/applyProcess/contract'
import center from '@/pages/center/soon'
import schedule from '@/pages/schedule/schedule'

Vue.use(Router)

export default new Router({
    routes: [
        //注册
        //邮箱注册
        {
            title: '注册页',
            path: '/regist',
            name: 'regist',
            component: regist
        },
        //登录
        {
            title: '登录',
            path: '/login',
            name: 'login',
            component: login
        },
        {
            title: '基本信息',
            path: '/basic',
            name: 'basic',
            component: basic
        },
        {
            title: '基本信息1',
            path: '/basic1',
            name: 'basic1',
            component: basic1
        },
        {
            title: '基本信息2',
            path: '/basic2',
            name: 'basic2',
            component: basic2
        },
        {
            title: '预约面试',
            path: '/reservation',
            name: 'reservation',
            component: reservation
        },
        {
            title: '预约面试',
            path: '/reservation1',
            name: 'reservation1',
            component: reservation1
        },
        {
            title: '签约',
            path: '/contract',
            name: 'contract',
            component: contract
        },
        {
            // 主页
            title: '首页',
            path: '/main',
            name: 'main',
            component: main,
        },
        {
            title: '个人中心',
            path: '/center',
            name: 'center',
            component: main,
            children: [
                {
                    path: '',
                    component: center
                }
            ]
        },{
            title: '课程表',
            path: '/schedule',
            name: 'schedule',
            component: main,
            children: [
                {
                    path: '',
                    component: schedule
                }
            ]
        }
    ]
})
