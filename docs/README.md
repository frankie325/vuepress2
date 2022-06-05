---
head:
 - - meta
    - name: foo
      content: yaml 数组语法
  - [meta, { name: bar , content: 方括号语法 }]
home: true
modules: # 指定首页展示模块
  - Banner
  - BannerBrand
  - Blog
  - MdContent
  - Footer
banner: # banner 模块的配置
#   heroText: __frank
#   tagline: 我的博客
#   heroImage: /avatar.jpg
#   heroImageStyle:
#     maxWidth: 200px
#     margin: 0 auto 2rem
  bgImage: /jojo.png
  bgImageStyle:
    height: 450px
bannerBrand: # bannerBrand 模块的配置
  heroText: __frank
  tagline: Enjoy when you can, and endure when you must.
#   heroImage: /avatar.jpg
#   heroImageStyle:
#     maxWidth: 200px
#     height: 100%
#     margin: 0 auto 2rem
  bgImage: /jojo.png
  bgImageStyle:
    height: 450px
#   buttons:
#     - { text: Guide, link: '/docs/guide/introduce' }
#     - { text: Default Style, link: '/docs/style-default-api/introduce', type: 'plain' }
blog: # blog 模块的配置
  socialLinks: # 社交 icon 请到 [Xions](https://www.xicons.org/#/zh-CN) 页面的 tabler 下获取，复制名称即可
    - { icon: 'BrandGithub', link: 'https://github.com/kfg1234' }
    - { icon: 'BrandTwitter', link: 'https://twitter.com/reco_luan' }
footer: # 底部模块的配置
  record: 域名备案文案
  recordLink: 域名备案地址
  cyberSecurityRecord: 公安备案文案
  cyberSecurityLink: 公安备案地址
  startYear: 2018
---