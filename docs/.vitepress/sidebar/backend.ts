/**后端路由 */
export const backendSideBar = [{
    text: '后端',
    items:[
      {
        text: 'nest.js',
        collapsed: false,
        items: [
          { text: '教学篇', link: '/teach/index' },
          { text: '教学篇1', link: '/teach/teach1' },
          { text: '教学篇2', link: '/teach/teach2' }
        ]
      },
      {
        text: 'mysql',
        collapsed: false,
        items: [
          { text: '总结篇', link: '/summarize/index' },
          { text: '总结篇1', link: '/summarize/summarize1' },
          { text: '总结篇2', link: '/summarize/summarize2' }
        ]
      },
      {
        text: 'orm',
        collapsed: false,
        items: [
          { text: '团队篇', link: '/team/index' },
          { text: '团队篇1', link: '/team/team1' },
          { text: '团队篇2', link: '/team/team2' }
        ]
      }
    ]
  }]