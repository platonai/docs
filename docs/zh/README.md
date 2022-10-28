---
home: true
heroImage: /hero.png
actionText: 快速上手 →
actionLink: /zh/guide/
features:
- title: 高质量的大规模数据采集和处理
  details: PulsarR 开发了一系列基础设施和前沿技术，来保证即使是大规模数据采集场景，也能达到最高标准的性能、质量和总体拥有成本。
- title: 网络即数据库范式
  details: PulsarR 像对待内部数据库一样对待外部网络，如果需要的数据不在本地存储中，或者现存版本不满足分析需要，则系统会从互联网上采集该数据的最新版本。我们还开发了 X-SQL 来直接查询互联网，并将网页转换成表格和图表。
- title: 支持浏览器渲染并将其作为数据采集的首要方法
  details: 将浏览器渲染作为数据采集的首要方法，我们在数据点规模、数据质量、人力成本和硬件成本之间实现了最佳平衡，并实现了最低的总体拥有成本。通过优化，如屏蔽不必要的资源文件，浏览器渲染的性能甚至可以与传统的单一资源采集方法相媲美。
- title: RPA
  details: PulsarR 包含一个 RPA 子系统，来实现网页交互：滚动、打字、屏幕捕获、鼠标拖放、点击等。该子系统和大家所熟知的 selenium, playwright, puppeteer 是类似的，但对所有行为进行了优化，譬如更真实的模拟操作，更好的执行性能，更好的并行性，更好的容错处理，等等。
- title: 传统的单一资源采集
  details: PulsarR 的默认采集方式是通过浏览器渲染来采集 完整的 网页数据，但如果您需要的数据可以通过单一接口获取，譬如可以通过某个 ajax 接口返回，也可以调用 PulsarR 的资源采集方法进行高速采集。
- title: 最前沿的信息提取技术
  details: 我们计划发布一个先进的人工智能，以显著的精度自动提取所有网页（譬如商品详情页）中的每一个字段，目前我们提供了一个 预览版本。


footer: MIT Licensed | Copyright © 2022-present Platon AI.
---

### 像数 1, 2, 3 一样容易

``` bash
# 安装
yarn global add vuepress # 或者：npm install -g vuepress

# 新建一个 markdown 文件
echo '# Hello VuePress!' > README.md

# 开始写作
vuepress dev .

# 构建静态文件
vuepress build .
```

::: warning 注意
请确保你的 Node.js 版本 >= 8.6。
:::
