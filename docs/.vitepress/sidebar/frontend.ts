/**前端路由 */
export const frontendSideBar = [{
  text: '前端',
  items:[
    {
      text: 'vue系列',
      collapsed: false,
      items: [
        { text: '教学篇', link: '/teach/index' },
        { text: '教学篇1', link: '/teach/teach1' },
        { text: '教学篇2', link: '/teach/teach2' }
      ]
    },
    {
      text: '图标',
      link: '/frontend/icon/index' 
    },
    {
      text: '动画',
      link: '/frontend/animista/index' 
    },
    {
      text: '插件',
      link: '/frontend/plugins/index' 
    },
    {
      text: '图表',
      link: '/frontend/echarts/index' 
    },
    {
      text: 'ag',
      collapsed: false,
      items: [
        { text: '团队篇', link: '/team/index' },
        { text: '团队篇1', link: '/team/team1' },
        { text: '团队篇2', link: '/team/team2' }
      ]
    }
  ]
}]