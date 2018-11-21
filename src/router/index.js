import Vue from 'vue'
import Router from 'vue-router'

import regist from '@/pages/regist/email'
import reset from '@/pages/regist/reset'
import login from '@/pages/login'
import main from '@/pages/main'
import basic from '@/pages/applyProcess/basicInformation'
import experience from '@/pages/applyProcess/experience'
import reservation from '@/pages/applyProcess/reservation'
import reservation1 from '@/pages/applyProcess/reservation1'
import contract from '@/pages/applyProcess/contract'
import afterSubmit from '@/pages/applyProcess/afterSubmit'
import center from '@/pages/center/soon'
import inviteDetail from '@/pages/center/inviteDetail'
import schedule from '@/pages/schedule/schedule'
import course from '@/pages/course/myCourses'
import finishCourse from '@/pages/course/finishCourse'
import homework from '@/pages/course/homework'
import checkHomework from '@/pages/course/checkHomework'
import comment from '@/pages/course/comment'
import evaluate from '@/pages/course/evaluate'
import datedCourse from '@/pages/course/datedCourse'
import uploadingCourseware from '@/pages/course/uploadingCourseware'
import summary from '@/pages/course/summary'
import report from '@/pages/course/report'
import common from '@/pages/common/question'
import commonContract from '@/pages/common/contract'
import addEvaluate from '@/pages/course/addEvaluate'
import addResult from '@/pages/course/addResult'
import viewResult from '@/pages/course/viewResult'
import viewEvaluate from '@/pages/course/viewEvaluate'
import room from '@/pages/room'
import preview from '@/pages/preview';
import completeInfo from '@/pages/applyProcess/completeInfo'
import basicEdit from '@/pages/center/basicInformation'
import experienceEdit from '@/pages/center/experience'
import index from '@/pages/index/index'
import about from '@/pages/index/about'
import admissions from '@/pages/index/admissions'
import concat from '@/pages/index/concat'
import enCourse from '@/pages/index/course'
import school from '@/pages/index/school'
import service from '@/pages/index/service'

Vue.use(Router)

export default new Router({
	routes: [
		//注册
		//邮箱注册
		{
			title: '教室',
			path: '',
			name: 'index',
			component: index
		},
		{
			title: '首页',
			path: '/en/index',
			name: 'index',
			component: index
		},
		{
			title: '关于我们',
			path: '/en/about',
			name: 'about',
			component: about
		},
		{
			title: '招生入学',
			path: '/en/admissions',
			name: 'admissions',
			component: admissions
		},
		{
			title: '联系我们',
			path: '/en/concat',
			name: 'concat',
			component: concat
		},
		{
			title: '课程体系',
			path: '/en/course',
			name: 'enCourse',
			component: enCourse
		},
		{
			title: '师资团队',
			path: '/en/school',
			name: 'school',
			component: school
		},
		{
			title: '教学服务',
			path: '/en/service',
			name: 'service',
			component: service
		},
		{
			title: '教室',
			path: '/room',
			name: 'room',
			component: room
		},
		{
			title: '教室',
			path: '/room',
			name: 'room',
			component: room
		},
		{
			title: '编辑',
			path: '/basicEdit',
			name: 'basicEdit',
			component: basicEdit
		},
		{
			title: '编辑',
			path: '/experienceEdit',
			name: 'experienceEdit',
			component: experienceEdit
		},
		{
			title: '预览',
			path: '/preview',
			name: 'preview',
			component: preview
		},
		{
			title: '补充资料',
			path: '/completeInfo',
			name: 'completeInfo',
			component: completeInfo
		},
		{
			title: 'My center',
			path: '/center',
			redirect: { name: 'center' }
		},
		{
			title: '注册页',
			path: '/regist',
			name: 'regist',
			component: regist
		},
		{
			title: '重置密码',
			path: '/reset',
			name: 'reset',
			component: reset
		},
		//Login
		{
			title: 'Login',
			path: '/login',
			name: 'login',
			component: login
		},
		{
			title: 'basic',
			path: '/basic',
			name: 'basic',
			component: basic
		},
		{
			title: 'experience',
			path: '/experience',
			name: 'experience',
			component: experience
		},
		{
			title: '预约面试',
			path: '/reservation',
			name: 'reservation',
			component: reservation
		},
		{
			title: '预约面试',
			path: '/reservation-result',
			name: 'reservation-result',
			component: reservation1
		},
		{
			title: '签约',
			path: '/contract',
			name: 'contract',
			component: contract
		},
		{
			title: '提交后预约',
			path: '/afterSubmit',
			name: 'afterSubmit',
			component: afterSubmit
		},
		{
			// 主页
			title: '首页',
			path: '/main',
			name: 'main',
			component: main,
		},
		{
			title: 'My center',
			path: '/center',
			component: main,
			children: [
				{
					path: '',
					name: 'center',
					component: center
				},
				{
					path: 'inviteDetail',
					name: 'inviteDetail',
					component: inviteDetail
				}
			]
		}, {
			title: 'Schedule',
			path: '/schedule',
			name: 'schedule',
			component: main,
			children: [
				{
					path: '',
					component: schedule
				}
			]
		}, {
			title: 'My courses',
			path: '/course',
			name: 'course',
			component: main,
			children: [
				{
					path: '',
					component: course
				}
			]
		}, {
			title: 'Completed course',
			path: '/finish-course',
			name: 'finish-course',
			component: main,
			children: [
				{
					path: '',
					component: finishCourse
				}
			]
		}, {
			title: 'Homework',
			path: '/homework',
			name: 'homework',
			component: main,
			children: [
				{
					path: '',
					component: homework
				}
			]
		}, {
			title: 'Check the homework',
			path: '/check-homework',
			name: 'check-homework',
			component: main,
			children: [
				{
					path: '',
					component: checkHomework
				}
			]
		}, {
			title: 'Comment',
			path: '/comment',
			name: 'comment',
			component: main,
			children: [
				{
					path: '',
					component: comment
				}
			]
		}, {
			title: 'Evaluate',
			path: '/evaluate',
			name: 'evaluate',
			component: main,
			children: [
				{
					path: '',
					component: evaluate
				}
			]
		}, {
			title: 'Booked course',
			path: '/dated-course',
			name: 'dated-course',
			component: main,
			children: [
				{
					path: '',
					component: datedCourse
				}
			]
		}, {
			title: '上传课件',
			path: '/uploading-courseware',
			name: 'uploading-courseware',
			component: main,
			children: [
				{
					path: '',
					component: uploadingCourseware
				}
			]
		}, {
			title: 'Class summary',
			path: '/summary',
			name: 'summary',
			component: main,
			children: [
				{
					path: '',
					component: summary
				}
			]
		}, {
			title: 'Transcripts',
			path: '/report',
			name: 'report',
			component: main,
			children: [
				{
					path: '',
					component: report
				}
			]
		}, {
			title: 'Transcripts',
			path: '/common',
			name: 'common',
			component: main,
			children: [
				{
					path: '/common/faq',
					component: common
				},
				{
					path: '/common/contract',
					name: 'commonContract',
					component: commonContract
				}
			]
		}, {
			title: '添加评价',
			path: '/add-evaluate',
			name: 'add-evaluate',
			component: main,
			children: [
				{
					path: '',
					component: addEvaluate
				}
			]
		}, {
			title: '添加评价',
			path: '/add-result',
			name: 'add-result',
			component: main,
			children: [
				{
					path: '',
					component: addResult
				}
			]
		}, {
			title: '查看评价',
			path: '/view-result',
			name: 'view-result',
			component: main,
			children: [
				{
					path: '',
					component: viewResult
				}
			]
		}, {
			title: '查看小结',
			path: '/view-evaluate',
			name: 'view-evaluate',
			component: main,
			children: [
				{
					path: '',
					component: viewEvaluate
				}
			]
		}
	]
})
