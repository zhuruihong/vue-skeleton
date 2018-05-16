# skeleton

> A example for PostOnline

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

备忘：
1. 使用unit test 依赖的模块

karma 一个 JavaScript 测试运行器，其在测试中的作用相当于开发构建中使用的 webpack 。

karma-webpack 连接 karma 和 webpack 的桥梁。不经过 webpack 编译命令是文件是无法独立运行的， karma 需要了解你的 webpack 配置，决定如何处理你的测试文件。

karma-phantomjs-launcher 是 phantomjs 在 karma 中的启动器，由此引出了 phantomjs。 PhantomJS 是一个没有界面的 “浏览器” ，内置了 JavaScript API，支持各种Web标准：DOM 处理、CSS 选择器、JSON、Canvas 和 SVG 等。在查找相关资料时，也发现了其他的常规浏览器 launcher ，比如：Chrome、Firefox、Safari、IE 等，以应对不同浏览器或多浏览器的测试需求。见 Browsers

karma-sourcemap-loader Karma 插件，生成文件的 sourcemap 。
karma-mocha 让你在 karma 中使用 Mocha 测试框架的插件，使用时还需要安装前置依赖 mocha 。
karma-sinon-chai 让你在 karma 中使用 sinon-chai 断言库的插件，前置依赖有 sinon-chai 、 sinon 、 chai …:confused:
karma-spec-reporter 用于将测试结果显示到控制台。
karma-coverage 生成代码覆盖率。

※※其中要使用 karma-phantomjs-launcher ，需要先安装 PhantomJS ，通过 phantomjs-prebuilt安装。
※※安装PhantomJS的过程中可能由于网络的原因，npm install安装可能不会成功，所以可以先将压缩包下载下来，然后复制到对应的目录，
删除node_modules和packag再重新执行npm install指令
Mac：
下载地址：https://github.com/Medium/phantomjs/releases/download/v2.1.1/phantomjs-2.1.1-macosx.zip
放置路径：/var/folders/45/4km6s76d2pzbpd5537g149lw0000gn/T/phantomjs/phantomjs-2.1.1-macosx.zip
Windows：
下载地址： https://github.com/Medium/phantomjs/releases/download/v2.1.1/phantomjs-2.1.1-windows.zip
放置路径：C:\Users\ZHAOXN~1\AppData\Local\Temp\phantomjs\phantomjs-2.1.1-windows.zip

2. 在skeleton/test/unit/specs/HelloWorld.spec.js中编写测试脚本;
3. 执行npm run unit进行自动测试。
