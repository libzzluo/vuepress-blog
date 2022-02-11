- **使得VuePress支持Mathjax数据公式**

  首先尝试过npm i  vuepress-plugin-mathjax但无效，删除时使用npm uninstall i  vuepress-plugin-mathjax，之后也尝试了markdown-it-katex等插件，都无效。

  最后的解决方案是换主题+用插件，用了[AntDocs](https://antdocs.pages.dev/)，实际效果大概是在原来主题的基础上改了点色调？(可能)

  另补充下VuePress的一些tips：

  package.json文件对应了该项目的各种信息，"scripts"里的参数对应了npm或者yarn后可以跟的参数，"dependencies"里显示了通过npm install或用yarn安装的依赖，这里参考了这个[链接](https://blog.chgtaxihe.top/pages/4f9f4f/#%E6%B8%B2%E6%9F%93%E6%95%B0%E5%AD%A6%E5%85%AC%E5%BC%8F)给出的方案：

  ```json
  "dependencies": {
      "@neilsustc/markdown-it-katex": "^1.0.0",
      "markdown-it": "^12.3.2",
      "vuepress": "^1.9.5",
      "vuepress-theme-antdocs": "^1.3.5"
    }
  ```

  修改后的config.js如下：

  ```json
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
  ```

  随后执行yarn build和yarn deploy部署到Github。

  部署时遇到一个问题，原因时VuePress没有局部安装，解决方法参考：https://github.com/zpfz/vuepress-theme-antdocs/issues/1

  最后推荐一下搜到的几个还不错的主题：

  [1] https://github.com/lyh543/vuepress-theme-blog-material

  [2] https://github.com/zpfz/vuepress-theme-antdocs

  

