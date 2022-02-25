import loadable from '@/utils/loadable';

const routes = [
  {
    path: '/index',
    exact: true,
    name: 'Index',
    component: loadable(() => import(/* webpackChunkName: 'index' */ '@/views/Index')),
    auth: [1],
  },
  {
    path: '/public/button',
    exact: false,
    name: '按钮',
    component: loadable(() => import(/* webpackChunkName: 'button' */ '@/views/PublicView/Button')),
    auth: [1],
  },
  {
    path: '/public/icon',
    exact: false,
    name: '图标',
    component: loadable(() => import(/* webpackChunkName: 'icon' */ '@/views/PublicView/Icon')),
    auth: [1],
  },
  {
    path: '/nav/dropdown',
    exact: false,
    name: '下拉菜单',
    component: loadable(() => import(/* webpackChunkName: 'dropdown' */ '@/views/NavView/Dropdown')),
  },
  {
    path: '/nav/menu',
    exact: false,
    name: '下拉菜单',
    component: loadable(() => import(/* webpackChunkName: 'menu' */ '@/views/NavView/Menu')),
  },
  {
    path: '/nav/steps',
    exact: false,
    name: '步骤条',
    component: loadable(() => import(/* webpackChunkName: 'step' */ '@/views/NavView/Step')),
  },
  {
    path: '/form/base-form',
    exact: false,
    name: '表单',
    component: loadable(() => import(/* webpackChunkName: 'formBase' */ '@/views/FormView/FormBaseView')),
  },
  {
    path: '/form/step-form',
    exact: false,
    name: '表单',
    component: loadable(() => import(/* webpackChunkName: 'formStep' */ '@/views/FormView/FormStepView')),
  },
  {
    path: '/show/table',
    exact: false,
    name: '表格',
    component: loadable(() => import(/* webpackChunkName: 'table' */ '@/views/ShowView/Table')),
  },
  {
    path: '/show/collapse',
    exact: false,
    name: '折叠面板',
    component: loadable(() => import(/* webpackChunkName: 'collapse' */ '@/views/ShowView/Collapse')),
  },
  {
    path: '/show/tree',
    exact: false,
    name: '树形控件',
    component: loadable(() => import(/* webpackChunkName: 'tree' */ '@/views/ShowView/Tree')),
  },
  {
    path: '/show/tabs',
    exact: false,
    name: '标签页',
    component: loadable(() => import(/* webpackChunkName: 'tabs' */ '@/views/ShowView/Tabs')),
  },
  {
    path: '/others/progress',
    exact: false,
    name: '进度条',
    component: loadable(() => import(/* webpackChunkName: 'progress' */ '@/views/Others/Progress')),
    auth: [1],
  },
  {
    path: '/others/animation',
    exact: false,
    name: '动画',
    component: loadable(() => import(/* webpackChunkName: 'animation' */ '@/views/Others/Animation')),
    auth: [1],
  },
  {
    path: '/others/editor',
    exact: false,
    name: '富文本',
    component: loadable(() => import(/* webpackChunkName: 'editor' */ '@/views/Others/Editor')),
    auth: [1],
  },
  {
    path: '/others/upload',
    exact: false,
    name: '上传',
    component: loadable(() => import(/* webpackChunkName: 'upload' */ '@/views/Others/Upload')),
    auth: [1],
  },
  {
    path: '/one/two/three',
    exact: false,
    name: '三级',
    component: loadable(() => import(/* webpackChunkName: 'three' */ '@/views/TestView')),
  },
  {
    path: '/about',
    exact: false,
    name: '关于',
    component: loadable(() => import(/* webpackChunkName: 'about' */ '@/views/About')),
    auth: [1],
  },
  {
    path: '/demo/001',
    exact: false,
    name: '练习-001',
    component: loadable(() => import(/* webpackChunkName: 'demo-001' */ '@/views/Demo/001')),
  },
  {
    path: '/demo/002',
    exact: false,
    name: '练习-002',
    component: loadable(() => import(/* webpackChunkName: 'demo-002' */ '@/views/Demo/002')),
  },
];

export default routes;
