export const head =  [
  ['link', { rel: 'icon', href: '/awesome-bookmarks/logo.svg'}],
  ['link', { rel: 'preconnect', href: 'https://fonts.googleapis.com' }],
  // ['link', { rel: 'stylesheet', href: 'https://xxx.com/static/layui/css/layui.css' }],
  // ['script', { src: 'https://xxx.com/sdk.js'}]
  ['script', {}, `
    console.log('window', window);
    console.log('document', document);
    `
  ]
]