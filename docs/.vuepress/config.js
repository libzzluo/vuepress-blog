module.exports = {
  theme: 'antdocs',
  title: 'xu63\'s Blog',
  description: '自豪地使用VuePress (ˊᗜˋ*)',
  head: [ // 注入到当前页面的 HTML <head> 中的标签
    ['link', { rel: 'icon', href: '/images/photo.jpg' }],
    ['link', { rel: 'manifest', href: '/images/photo.jpg' }],
    ['link', { rel: 'apple-touch-icon', href: '/images/photo.jpg' }],
	['link', { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/katex@0.10.0-alpha/dist/katex.min.css'}],
    ['link', { rel: "stylesheet", href: "https://cdn.jsdelivr.net/github-markdown-css/2.2.1/github-markdown.css"}],
    ['meta', { 'http-quiv': 'pragma', cotent: 'no-cache'}],
    ['meta', { 'http-quiv': 'pragma', cotent: 'no-cache,must-revalidate'}],
    ['meta', { 'http-quiv': 'expires', cotent: '0'}]
  ],
  serviceWorker: true, // 是否开启 PWA
  base: '/', // 部署到github相关的配置
  markdown: {
    lineNumbers: true,
	extendMarkdown: md => {
            md.set({html: true})
            md.use(require('@neilsustc/markdown-it-katex'), {"throwOnError" : false, "errorColor" : " #cc0000"})
        }
  }, // 代码块是否显示行号
  themeConfig: {
    nav:[ // 导航栏配置
      {text: '文檔', link: '/docs/' },
      {text: '相片', link: '/pic/'},
      {text: '記錄', link: '/note/'},
	  {text: '總結', link: '/summary/'}
    ],
    // sidebar:{
    //   '/accumulate/': [
    //       {
    //         title: '前端积累',
    //         children: [
    //           '/accumulate/1.html',
    //           '/accumulate/2.html',
    //           '/accumulate/3.html',
    //           '/accumulate/4.html',
    //           '/accumulate/5.html',
    //           '/accumulate/6.html',
    //           '/accumulate/7.html',
    //           '/accumulate/8.html',
    //           '/accumulate/9.html',
    //           '/accumulate/10.html',
    //           '/accumulate/11.html',
    //         ]
    //       }
    //     ],
    //     '/algorithm/': [
    //       '/algorithm/', 
    //       {
    //         title: '第二组侧边栏下拉框的标题1',
    //         children: [
    //           '/algorithm/' 
    //         ]
    //       }
    //     ]
    // },
    sidebar: 'auto', // 侧边栏配置
    sidebarDepth: 2
    }
};
