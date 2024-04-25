import{_ as s,o as n,c as a,R as p}from"./chunks/framework.3cbd3b87.js";const d=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"components/index.md","filePath":"components/index.md","lastUpdated":1714024249000}'),l={name:"components/index.md"},e=p(`<h3 id="快速上手" tabindex="-1">快速上手 <a class="header-anchor" href="#快速上手" aria-label="Permalink to &quot;快速上手&quot;">​</a></h3><div class="tip custom-block"><p class="custom-block-title">提示</p><p>oeos-components 是基于 vue3 + ts + Element-plus 再次封装的基础组件, 适用于创云融达公司内部的前端项目开发</p></div><h3 id="安装" tabindex="-1">安装 <a class="header-anchor" href="#安装" aria-label="Permalink to &quot;安装&quot;">​</a></h3><blockquote><p>npm</p></blockquote><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">npm</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">install</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">oeos-components</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">npm</span><span style="color:#24292E;"> </span><span style="color:#032F62;">install</span><span style="color:#24292E;"> </span><span style="color:#032F62;">oeos-components</span></span></code></pre></div><blockquote><p>pnpm</p></blockquote><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">pnpm</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">add</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">oeos-components</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">pnpm</span><span style="color:#24292E;"> </span><span style="color:#032F62;">add</span><span style="color:#24292E;"> </span><span style="color:#032F62;">oeos-components</span></span></code></pre></div><h3 id="使用" tabindex="-1">使用 <a class="header-anchor" href="#使用" aria-label="Permalink to &quot;使用&quot;">​</a></h3><blockquote><h4 id="前提条件-使用项目必须全局注册-element-plus组件库" tabindex="-1">前提条件：使用项目必须全局注册 Element-plus组件库 <a class="header-anchor" href="#前提条件-使用项目必须全局注册-element-plus组件库" aria-label="Permalink to &quot;前提条件：使用项目必须全局注册 Element-plus组件库&quot;">​</a></h4></blockquote><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">// main.ts</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> oeosV3Components </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;oeos-components&#39;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;oeos-components/dist/style.css&#39;</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">app</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">createApp</span><span style="color:#E1E4E8;">(App)</span></span>
<span class="line"><span style="color:#E1E4E8;">app.</span><span style="color:#B392F0;">use</span><span style="color:#E1E4E8;">(oeosV3Components)</span></span>
<span class="line"><span style="color:#E1E4E8;">app.</span><span style="color:#B392F0;">mount</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;#app&#39;</span><span style="color:#E1E4E8;">)</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">// main.ts</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> oeosV3Components </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;oeos-components&#39;</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;oeos-components/dist/style.css&#39;</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">app</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">createApp</span><span style="color:#24292E;">(App)</span></span>
<span class="line"><span style="color:#24292E;">app.</span><span style="color:#6F42C1;">use</span><span style="color:#24292E;">(oeosV3Components)</span></span>
<span class="line"><span style="color:#24292E;">app.</span><span style="color:#6F42C1;">mount</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;#app&#39;</span><span style="color:#24292E;">)</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h3 id="引入函数库方法" tabindex="-1">引入函数库方法 <a class="header-anchor" href="#引入函数库方法" aria-label="Permalink to &quot;引入函数库方法&quot;">​</a></h3><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">// 将oeos-components下的公共函数赋值到全局</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { utils } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;oeos-components&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">Object.</span><span style="color:#B392F0;">keys</span><span style="color:#E1E4E8;">(utils).</span><span style="color:#B392F0;">forEach</span><span style="color:#E1E4E8;">((</span><span style="color:#FFAB70;">v</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">app.config.globalProperties[v] </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> utils[v]</span></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 按需引入</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { $toast } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;oeos-components&#39;</span></span>
<span class="line"><span style="color:#B392F0;">$toast</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;我是成功提示&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#B392F0;">$toast</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;我是失败提示&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;e&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 方法列表</span></span>
<span class="line"><span style="color:#E1E4E8;">setStorage,</span></span>
<span class="line"><span style="color:#E1E4E8;">getStorage,</span></span>
<span class="line"><span style="color:#E1E4E8;">clearStorage,</span></span>
<span class="line"><span style="color:#E1E4E8;">isEmpty,</span></span>
<span class="line"><span style="color:#E1E4E8;">notEmpty,</span></span>
<span class="line"><span style="color:#E1E4E8;">merge,</span></span>
<span class="line"><span style="color:#E1E4E8;">clone,</span></span>
<span class="line"><span style="color:#E1E4E8;">uuid,</span></span>
<span class="line"><span style="color:#E1E4E8;">getType,</span></span>
<span class="line"><span style="color:#E1E4E8;">sleep,</span></span>
<span class="line"><span style="color:#E1E4E8;">validate,</span></span>
<span class="line"><span style="color:#E1E4E8;">asyncWrapper,</span></span>
<span class="line"><span style="color:#E1E4E8;">globalImageUrl,</span></span>
<span class="line"><span style="color:#E1E4E8;">copy,</span></span>
<span class="line"><span style="color:#E1E4E8;">addThousandSeparator</span></span>
<span class="line"><span style="color:#E1E4E8;">$toast,</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">// 将oeos-components下的公共函数赋值到全局</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { utils } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;oeos-components&#39;</span></span>
<span class="line"><span style="color:#24292E;">Object.</span><span style="color:#6F42C1;">keys</span><span style="color:#24292E;">(utils).</span><span style="color:#6F42C1;">forEach</span><span style="color:#24292E;">((</span><span style="color:#E36209;">v</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">app.config.globalProperties[v] </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> utils[v]</span></span>
<span class="line"><span style="color:#24292E;">})</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 按需引入</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { $toast } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;oeos-components&#39;</span></span>
<span class="line"><span style="color:#6F42C1;">$toast</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;我是成功提示&#39;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#6F42C1;">$toast</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;我是失败提示&#39;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&#39;e&#39;</span><span style="color:#24292E;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 方法列表</span></span>
<span class="line"><span style="color:#24292E;">setStorage,</span></span>
<span class="line"><span style="color:#24292E;">getStorage,</span></span>
<span class="line"><span style="color:#24292E;">clearStorage,</span></span>
<span class="line"><span style="color:#24292E;">isEmpty,</span></span>
<span class="line"><span style="color:#24292E;">notEmpty,</span></span>
<span class="line"><span style="color:#24292E;">merge,</span></span>
<span class="line"><span style="color:#24292E;">clone,</span></span>
<span class="line"><span style="color:#24292E;">uuid,</span></span>
<span class="line"><span style="color:#24292E;">getType,</span></span>
<span class="line"><span style="color:#24292E;">sleep,</span></span>
<span class="line"><span style="color:#24292E;">validate,</span></span>
<span class="line"><span style="color:#24292E;">asyncWrapper,</span></span>
<span class="line"><span style="color:#24292E;">globalImageUrl,</span></span>
<span class="line"><span style="color:#24292E;">copy,</span></span>
<span class="line"><span style="color:#24292E;">addThousandSeparator</span></span>
<span class="line"><span style="color:#24292E;">$toast,</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br></div></div><h3 id="自定义指令" tabindex="-1">自定义指令 <a class="header-anchor" href="#自定义指令" aria-label="Permalink to &quot;自定义指令&quot;">​</a></h3><p>不必注册, 直接使用</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">v-copy</span></span>
<span class="line"><span style="color:#e1e4e8;">v-number</span></span>
<span class="line"><span style="color:#e1e4e8;">v-focus</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">v-copy</span></span>
<span class="line"><span style="color:#24292e;">v-number</span></span>
<span class="line"><span style="color:#24292e;">v-focus</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h3 id="docs文档结构目录" tabindex="-1">docs文档结构目录 <a class="header-anchor" href="#docs文档结构目录" aria-label="Permalink to &quot;docs文档结构目录&quot;">​</a></h3><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">├─ examples               # VPDemo组件自动解析此文件夹下的所有.vue文件</span></span>
<span class="line"><span style="color:#e1e4e8;">├─ components             # .md文件</span></span>
<span class="line"><span style="color:#e1e4e8;">├─ public                 # 静态资源文件</span></span>
<span class="line"><span style="color:#e1e4e8;">├─ .vitepress</span></span>
<span class="line"><span style="color:#e1e4e8;">│  ├─ config              # 插件配置</span></span>
<span class="line"><span style="color:#e1e4e8;">|  │  ├─ global.ts        # 全局变量定义</span></span>
<span class="line"><span style="color:#e1e4e8;">|  │  └─ plugins.ts       # 自定义.md文件渲染</span></span>
<span class="line"><span style="color:#e1e4e8;">│  ├─ theme               # 主题配置</span></span>
<span class="line"><span style="color:#e1e4e8;">│  ├─ utils               # 文档展开隐藏代码高亮</span></span>
<span class="line"><span style="color:#e1e4e8;">│  ├─ vitepress</span></span>
<span class="line"><span style="color:#e1e4e8;">|  │  ├─ vp-demo          # VPDemo组件源码</span></span>
<span class="line"><span style="color:#e1e4e8;">|  │  ├─ style            # VPDemo组件样式</span></span>
<span class="line"><span style="color:#e1e4e8;">|  │  └─ index.ts         # 暴露VPDemo组件</span></span>
<span class="line"><span style="color:#e1e4e8;">│  └─ config.ts           # vitepress配置文件</span></span>
<span class="line"><span style="color:#e1e4e8;">├─ index.md               # 文档home页面</span></span>
<span class="line"><span style="color:#e1e4e8;">├─ tsconfig.json          # typescript 全局配置</span></span>
<span class="line"><span style="color:#e1e4e8;">└─ vite.config.ts         # vite 全局配置文件（支持tsx）</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">├─ examples               # VPDemo组件自动解析此文件夹下的所有.vue文件</span></span>
<span class="line"><span style="color:#24292e;">├─ components             # .md文件</span></span>
<span class="line"><span style="color:#24292e;">├─ public                 # 静态资源文件</span></span>
<span class="line"><span style="color:#24292e;">├─ .vitepress</span></span>
<span class="line"><span style="color:#24292e;">│  ├─ config              # 插件配置</span></span>
<span class="line"><span style="color:#24292e;">|  │  ├─ global.ts        # 全局变量定义</span></span>
<span class="line"><span style="color:#24292e;">|  │  └─ plugins.ts       # 自定义.md文件渲染</span></span>
<span class="line"><span style="color:#24292e;">│  ├─ theme               # 主题配置</span></span>
<span class="line"><span style="color:#24292e;">│  ├─ utils               # 文档展开隐藏代码高亮</span></span>
<span class="line"><span style="color:#24292e;">│  ├─ vitepress</span></span>
<span class="line"><span style="color:#24292e;">|  │  ├─ vp-demo          # VPDemo组件源码</span></span>
<span class="line"><span style="color:#24292e;">|  │  ├─ style            # VPDemo组件样式</span></span>
<span class="line"><span style="color:#24292e;">|  │  └─ index.ts         # 暴露VPDemo组件</span></span>
<span class="line"><span style="color:#24292e;">│  └─ config.ts           # vitepress配置文件</span></span>
<span class="line"><span style="color:#24292e;">├─ index.md               # 文档home页面</span></span>
<span class="line"><span style="color:#24292e;">├─ tsconfig.json          # typescript 全局配置</span></span>
<span class="line"><span style="color:#24292e;">└─ vite.config.ts         # vite 全局配置文件（支持tsx）</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div>`,17),o=[e];function c(t,r,i,y,E,b){return n(),a("div",null,o)}const u=s(l,[["render",c]]);export{d as __pageData,u as default};
