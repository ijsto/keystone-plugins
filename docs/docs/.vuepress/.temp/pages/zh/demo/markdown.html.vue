<template><div><p>VuePress 主要从 Markdown 文件生成页面。因此，你可以使用它轻松生成文档或博客站点。</p>
<p>你应该创建和编写 Markdown 文件，以便 VuePress 可以根据文件结构将它们转换为不同的页面。</p>
<!-- more -->
<h2 id="markdown-介绍" tabindex="-1"><a class="header-anchor" href="#markdown-介绍" aria-hidden="true">#</a> Markdown 介绍</h2>
<p>如果你是一个新手，还不会编写 Markdown，请先阅读 <a href="https://vuepress-theme-hope.github.io/v2/zh/cookbook/markdown/" target="_blank" rel="noopener noreferrer">Markdown 介绍<ExternalLinkIcon/></a> 和 <a href="https://vuepress-theme-hope.github.io/v2/zh/cookbook/markdown/demo.html" target="_blank" rel="noopener noreferrer">Markdown 演示<ExternalLinkIcon/></a>。</p>
<h2 id="markdown-配置" tabindex="-1"><a class="header-anchor" href="#markdown-配置" aria-hidden="true">#</a> Markdown 配置</h2>
<p>VuePress 通过 Frontmatter 为每个 Markdown 页面引入配置。</p>
<div class="custom-container info">
<p class="custom-container-title">Info</p>
<p>Frontmatter 是 VuePress 中很重要的一个概念，如果你不了解它，你需要阅读 <a href="https://vuepress-theme-hope.github.io/v2/zh/cookbook/vuepress/page.html#front-matter" target="_blank" rel="noopener noreferrer">Frontmatter 介绍<ExternalLinkIcon/></a>。</p>
</div>
<h2 id="markdown-扩展" tabindex="-1"><a class="header-anchor" href="#markdown-扩展" aria-hidden="true">#</a> Markdown 扩展</h2>
<p>VuePress 会使用 <a href="https://github.com/markdown-it/markdown-it" target="_blank" rel="noopener noreferrer">markdown-it<ExternalLinkIcon/></a> 来解析 Markdown 内容，因此可以借助于 markdown-it 插件来实现 <a href="https://github.com/markdown-it/markdown-it#syntax-extensions" target="_blank" rel="noopener noreferrer">语法扩展<ExternalLinkIcon/></a> 。</p>
<h3 id="vuepress-扩展" tabindex="-1"><a class="header-anchor" href="#vuepress-扩展" aria-hidden="true">#</a> VuePress 扩展</h3>
<p>为了丰富文档写作，VuePress 对 Markdown 语法进行了扩展。</p>
<p>关于这些扩展，请阅读 <a href="https://vuepress-theme-hope.github.io/v2/zh/cookbook/vuepress/markdown.html" target="_blank" rel="noopener noreferrer">VuePress 中的 Markdown 扩展<ExternalLinkIcon/></a>。</p>
<h3 id="主题扩展" tabindex="-1"><a class="header-anchor" href="#主题扩展" aria-hidden="true">#</a> 主题扩展</h3>
<p>通过 <a href="https://vuepress-theme-hope.github.io/v2/md-enhance/zh/" target="_blank" rel="noopener noreferrer"><code v-pre>vuepress-plugin-md-enhance</code><ExternalLinkIcon/></a>，主题扩展了更多 Markdown 语法，提供更加丰富的写作功能。</p>
<h4 id="自定义容器" tabindex="-1"><a class="header-anchor" href="#自定义容器" aria-hidden="true">#</a> 自定义容器</h4>
<div v-pre>
<p>安全的在 Markdown 中使用 {{ variable }}。</p>
</div>
<div class="custom-container info">
<p class="custom-container-title">自定义标题</p>
<p>信息容器，包含 <code v-pre>代码</code> 与 <a href="#%E8%87%AA%E5%AE%9A%E4%B9%89%E5%AE%B9%E5%99%A8">链接</a>。</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> a <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></div>
<div class="custom-container tip">
<p class="custom-container-title">自定义标题</p>
<p>提示容器</p>
</div>
<div class="custom-container warning">
<p class="custom-container-title">自定义标题</p>
<p>警告容器</p>
</div>
<div class="custom-container danger">
<p class="custom-container-title">自定义标题</p>
<p>危险容器</p>
</div>
<details class="custom-container details"><summary>自定义标题</summary>
<p>详情容器</p>
</details>
<details class="custom-container details"><summary>代码</summary>
<div class="language-markdown ext-md line-numbers-mode"><pre v-pre class="language-markdown"><code>::: v-pre

安全的在 Markdown 中使用 {{ variable }}。

:::

::: info 自定义标题

信息容器

:::

::: tip 自定义标题

提示容器

:::

::: warning 自定义标题

警告容器

:::

::: danger 自定义标题

危险容器

:::

::: details 自定义标题

详情容器

:::
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details>
<ul>
<li><a href="https://vuepress-theme-hope.github.io/v2/zh/guide/markdown/container.html" target="_blank" rel="noopener noreferrer">查看详情<ExternalLinkIcon/></a></li>
</ul>
<h4 id="代码块" tabindex="-1"><a class="header-anchor" href="#代码块" aria-hidden="true">#</a> 代码块</h4>
<CodeTabs :data='[{"title":"pnpm"},{"title":"yarn"},{"title":"npm"}]' :active="2">

<template #tab0="{ title, value, isActive }">
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">pnpm</span> <span class="token function">add</span> <span class="token parameter variable">-D</span> vuepress-theme-hope
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></template>
<template #tab1="{ title, value, isActive }">
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">yarn</span> <span class="token function">add</span> <span class="token parameter variable">-D</span> vuepress-theme-hope
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></template>
<template #tab2="{ title, value, isActive }">
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">npm</span> i <span class="token parameter variable">-D</span> vuepress-theme-hope
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></template>
</CodeTabs>
<ul>
<li><a href="https://vuepress-theme-hope.github.io/v2/zh/guide/markdown/code-tabs.html" target="_blank" rel="noopener noreferrer">查看详情<ExternalLinkIcon/></a></li>
</ul>
<h4 id="上下角标" tabindex="-1"><a class="header-anchor" href="#上下角标" aria-hidden="true">#</a> 上下角标</h4>
<p>19<sup>th</sup> H<sub>2</sub>O</p>
<ul>
<li><a href="https://vuepress-theme-hope.github.io/v2/zh/guide/markdown/sup-sub.html" target="_blank" rel="noopener noreferrer">查看详情<ExternalLinkIcon/></a></li>
</ul>
<h4 id="自定义对齐" tabindex="-1"><a class="header-anchor" href="#自定义对齐" aria-hidden="true">#</a> 自定义对齐</h4>
<div style="text-align:center">
<p>我是居中的</p>
</div>
<div style="text-align:right">
<p>我在右对齐</p>
</div>
<ul>
<li><a href="https://vuepress-theme-hope.github.io/v2/zh/guide/markdown/align.html" target="_blank" rel="noopener noreferrer">查看详情<ExternalLinkIcon/></a></li>
</ul>
<h4 id="attrs" tabindex="-1"><a class="header-anchor" href="#attrs" aria-hidden="true">#</a> Attrs</h4>
<p>一个拥有 ID 的 <strong id="word">单次</strong>。</p>
<ul>
<li><a href="https://vuepress-theme-hope.github.io/v2/zh/guide/markdown/attrs.html" target="_blank" rel="noopener noreferrer">查看详情<ExternalLinkIcon/></a></li>
</ul>
<h4 id="脚注" tabindex="-1"><a class="header-anchor" href="#脚注" aria-hidden="true">#</a> 脚注</h4>
<p>此文字有脚注<sup class="footnote-ref"><a href="#footnote1">[1]</a><a class="footnote-anchor" id="footnote-ref1" /></sup>.</p>
<ul>
<li><a href="https://vuepress-theme-hope.github.io/v2/zh/guide/markdown/footnote.html" target="_blank" rel="noopener noreferrer">查看详情<ExternalLinkIcon/></a></li>
</ul>
<h4 id="标记" tabindex="-1"><a class="header-anchor" href="#标记" aria-hidden="true">#</a> 标记</h4>
<p>你可以标记 <mark>重要的内容</mark> 。</p>
<ul>
<li><a href="https://vuepress-theme-hope.github.io/v2/zh/guide/markdown/mark.html" target="_blank" rel="noopener noreferrer">查看详情<ExternalLinkIcon/></a></li>
</ul>
<h4 id="任务列表" tabindex="-1"><a class="header-anchor" href="#任务列表" aria-hidden="true">#</a> 任务列表</h4>
<ul class="task-list-container">
<li class="task-list-item">
<p><input type="checkbox" class="task-list-item-checkbox" id="task-item-0" checked="checked" disabled="disabled"><label class="task-list-item-label" for="task-item-0"> 计划 1</label></p>
</li>
<li class="task-list-item">
<p><input type="checkbox" class="task-list-item-checkbox" id="task-item-1" disabled="disabled"><label class="task-list-item-label" for="task-item-1"> 计划 2</label></p>
</li>
<li>
<p><a href="https://vuepress-theme-hope.github.io/v2/zh/guide/markdown/tasklist.html" target="_blank" rel="noopener noreferrer">查看详情<ExternalLinkIcon/></a></p>
</li>
</ul>
<h3 id="图片增强" tabindex="-1"><a class="header-anchor" href="#图片增强" aria-hidden="true">#</a> 图片增强</h3>
<p>支持为图片设置颜色模式和大小</p>
<ul>
<li><a href="https://vuepress-theme-hope.github.io/v2/zh/guide/markdown/image.html" target="_blank" rel="noopener noreferrer">查看详情<ExternalLinkIcon/></a></li>
</ul>
<h4 id="图表" tabindex="-1"><a class="header-anchor" href="#图表" aria-hidden="true">#</a> 图表</h4>
<ChartJS id="chart-64a5691a" config="%7B%0A%20%20%22type%22%3A%20%22scatter%22%2C%0A%20%20%22data%22%3A%20%7B%0A%20%20%20%20%22datasets%22%3A%20%5B%0A%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%22label%22%3A%20%22%E6%95%A3%E7%82%B9%E6%95%B0%E6%8D%AE%E9%9B%86%22%2C%0A%20%20%20%20%20%20%20%20%22data%22%3A%20%5B%0A%20%20%20%20%20%20%20%20%20%20%7B%20%22x%22%3A%20-10%2C%20%22y%22%3A%200%20%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%7B%20%22x%22%3A%200%2C%20%22y%22%3A%2010%20%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%7B%20%22x%22%3A%2010%2C%20%22y%22%3A%205%20%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%7B%20%22x%22%3A%200.5%2C%20%22y%22%3A%205.5%20%7D%0A%20%20%20%20%20%20%20%20%5D%2C%0A%20%20%20%20%20%20%20%20%22backgroundColor%22%3A%20%22rgb(255%2C%2099%2C%20132)%22%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%5D%0A%20%20%7D%2C%0A%20%20%22options%22%3A%20%7B%0A%20%20%20%20%22scales%22%3A%20%7B%0A%20%20%20%20%20%20%22x%22%3A%20%7B%0A%20%20%20%20%20%20%20%20%22type%22%3A%20%22linear%22%2C%0A%20%20%20%20%20%20%20%20%22position%22%3A%20%22bottom%22%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D%0A" title="%E4%B8%80%E4%B8%AA%E6%95%A3%E7%82%B9%E5%9B%BE%E6%A1%88%E4%BE%8B" type="json"></ChartJS><ul>
<li><a href="https://vuepress-theme-hope.github.io/v2/zh/guide/markdown/chart.html" target="_blank" rel="noopener noreferrer">查看详情<ExternalLinkIcon/></a></li>
</ul>
<h4 id="echarts" tabindex="-1"><a class="header-anchor" href="#echarts" aria-hidden="true">#</a> Echarts</h4>
<ECharts id="echarts-64a568ac" config="%7B%0A%20%20%22xAxis%22%3A%20%7B%0A%20%20%20%20%22type%22%3A%20%22category%22%2C%0A%20%20%20%20%22data%22%3A%20%5B%22Mon%22%2C%20%22Tue%22%2C%20%22Wed%22%2C%20%22Thu%22%2C%20%22Fri%22%2C%20%22Sat%22%2C%20%22Sun%22%5D%0A%20%20%7D%2C%0A%20%20%22yAxis%22%3A%20%7B%0A%20%20%20%20%22type%22%3A%20%22value%22%0A%20%20%7D%2C%0A%20%20%22series%22%3A%20%5B%0A%20%20%20%20%7B%0A%20%20%20%20%20%20%22data%22%3A%20%5B150%2C%20230%2C%20224%2C%20218%2C%20135%2C%20147%2C%20260%5D%2C%0A%20%20%20%20%20%20%22type%22%3A%20%22line%22%0A%20%20%20%20%7D%0A%20%20%5D%0A%7D%0A" title="%E4%B8%80%E4%B8%AA%E6%8A%98%E7%BA%BF%E5%9B%BE%E6%A1%88%E4%BE%8B" type="json"></ECharts><ul>
<li><a href="https://vuepress-theme-hope.github.io/v2/zh/guide/markdown/echarts.html" target="_blank" rel="noopener noreferrer">查看详情<ExternalLinkIcon/></a></li>
</ul>
<h4 id="流程图" tabindex="-1"><a class="header-anchor" href="#流程图" aria-hidden="true">#</a> 流程图</h4>
<FlowChart id="flowchart-64a56868" code="cond%3D%3Econdition%3A%20%E6%98%AF%E5%90%A6%E6%89%A7%E8%A1%8C%E6%93%8D%E4%BD%9C%3F%0Aprocess%3D%3Eoperation%3A%20%E6%93%8D%E4%BD%9C%0Ae%3D%3Eend%3A%20%E7%BB%93%E6%9D%9F%0A%0Acond(yes)-%3Eprocess-%3Ee%0Acond(no)-%3Ee%0A" preset="vue"></FlowChart><ul>
<li><a href="https://vuepress-theme-hope.github.io/v2/zh/guide/markdown/flowchart.html" target="_blank" rel="noopener noreferrer">查看详情<ExternalLinkIcon/></a></li>
</ul>
<h4 id="mermaid" tabindex="-1"><a class="header-anchor" href="#mermaid" aria-hidden="true">#</a> Mermaid</h4>
<Mermaid id="mermaid-64a56828" code="flowchart%20TB%0A%20%20%20%20c1--%3Ea2%0A%20%20%20%20subgraph%20one%0A%20%20%20%20a1--%3Ea2%0A%20%20%20%20end%0A%20%20%20%20subgraph%20two%0A%20%20%20%20b1--%3Eb2%0A%20%20%20%20end%0A%20%20%20%20subgraph%20three%0A%20%20%20%20c1--%3Ec2%0A%20%20%20%20end%0A%20%20%20%20one%20--%3E%20two%0A%20%20%20%20three%20--%3E%20two%0A%20%20%20%20two%20--%3E%20c2%0A"></Mermaid><ul>
<li><a href="https://vuepress-theme-hope.github.io/v2/zh/guide/markdown/mermaid.html" target="_blank" rel="noopener noreferrer">查看详情<ExternalLinkIcon/></a></li>
</ul>
<h4 id="tex-语法" tabindex="-1"><a class="header-anchor" href="#tex-语法" aria-hidden="true">#</a> Tex 语法</h4>
<p class='katex-block'><span class="katex-display"><span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML" display="block"><semantics><mrow><mfrac><msup><mi mathvariant="normal">∂</mi><mi>r</mi></msup><mrow><mi mathvariant="normal">∂</mi><msup><mi>ω</mi><mi>r</mi></msup></mrow></mfrac><mrow><mo fence="true">(</mo><mfrac><msup><mi>y</mi><mi>ω</mi></msup><mi>ω</mi></mfrac><mo fence="true">)</mo></mrow><mo>=</mo><mrow><mo fence="true">(</mo><mfrac><msup><mi>y</mi><mi>ω</mi></msup><mi>ω</mi></mfrac><mo fence="true">)</mo></mrow><mrow><mo fence="true">{</mo><mo stretchy="false">(</mo><mi>log</mi><mo>⁡</mo><mi>y</mi><msup><mo stretchy="false">)</mo><mi>r</mi></msup><mo>+</mo><munderover><mo>∑</mo><mrow><mi>i</mi><mo>=</mo><mn>1</mn></mrow><mi>r</mi></munderover><mfrac><mrow><mo stretchy="false">(</mo><mo>−</mo><mn>1</mn><msup><mo stretchy="false">)</mo><mi>i</mi></msup><mi>r</mi><mo>⋯</mo><mo stretchy="false">(</mo><mi>r</mi><mo>−</mo><mi>i</mi><mo>+</mo><mn>1</mn><mo stretchy="false">)</mo><mo stretchy="false">(</mo><mi>log</mi><mo>⁡</mo><mi>y</mi><msup><mo stretchy="false">)</mo><mrow><mi>r</mi><mo>−</mo><mi>i</mi></mrow></msup></mrow><msup><mi>ω</mi><mi>i</mi></msup></mfrac><mo fence="true">}</mo></mrow></mrow><annotation encoding="application/x-tex">
\frac {\partial^r} {\partial \omega^r} \left(\frac {y^{\omega}} {\omega}\right)
= \left(\frac {y^{\omega}} {\omega}\right) \left\{(\log y)^r + \sum_{i=1}^r \frac {(-1)^i r \cdots (r-i+1) (\log y)^{r-i}} {\omega^i} \right\}
</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:2.4em;vertical-align:-0.95em;"></span><span class="mord"><span class="mopen nulldelimiter"></span><span class="mfrac"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:1.3714em;"><span style="top:-2.314em;"><span class="pstrut" style="height:3em;"></span><span class="mord"><span class="mord" style="margin-right:0.05556em;">∂</span><span class="mord"><span class="mord mathnormal" style="margin-right:0.03588em;">ω</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.5904em;"><span style="top:-2.989em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight" style="margin-right:0.02778em;">r</span></span></span></span></span></span></span></span></span></span><span style="top:-3.23em;"><span class="pstrut" style="height:3em;"></span><span class="frac-line" style="border-bottom-width:0.04em;"></span></span><span style="top:-3.677em;"><span class="pstrut" style="height:3em;"></span><span class="mord"><span class="mord"><span class="mord" style="margin-right:0.05556em;">∂</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.6644em;"><span style="top:-3.063em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight" style="margin-right:0.02778em;">r</span></span></span></span></span></span></span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.686em;"><span></span></span></span></span></span><span class="mclose nulldelimiter"></span></span><span class="mspace" style="margin-right:0.1667em;"></span><span class="minner"><span class="mopen delimcenter" style="top:0em;"><span class="delimsizing size3">(</span></span><span class="mord"><span class="mopen nulldelimiter"></span><span class="mfrac"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:1.3414em;"><span style="top:-2.314em;"><span class="pstrut" style="height:3em;"></span><span class="mord"><span class="mord mathnormal" style="margin-right:0.03588em;">ω</span></span></span><span style="top:-3.23em;"><span class="pstrut" style="height:3em;"></span><span class="frac-line" style="border-bottom-width:0.04em;"></span></span><span style="top:-3.677em;"><span class="pstrut" style="height:3em;"></span><span class="mord"><span class="mord"><span class="mord mathnormal" style="margin-right:0.03588em;">y</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.6644em;"><span style="top:-3.063em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mathnormal mtight" style="margin-right:0.03588em;">ω</span></span></span></span></span></span></span></span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.686em;"><span></span></span></span></span></span><span class="mclose nulldelimiter"></span></span><span class="mclose delimcenter" style="top:0em;"><span class="delimsizing size3">)</span></span></span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:3.0277em;vertical-align:-1.2777em;"></span><span class="minner"><span class="mopen delimcenter" style="top:0em;"><span class="delimsizing size3">(</span></span><span class="mord"><span class="mopen nulldelimiter"></span><span class="mfrac"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:1.3414em;"><span style="top:-2.314em;"><span class="pstrut" style="height:3em;"></span><span class="mord"><span class="mord mathnormal" style="margin-right:0.03588em;">ω</span></span></span><span style="top:-3.23em;"><span class="pstrut" style="height:3em;"></span><span class="frac-line" style="border-bottom-width:0.04em;"></span></span><span style="top:-3.677em;"><span class="pstrut" style="height:3em;"></span><span class="mord"><span class="mord"><span class="mord mathnormal" style="margin-right:0.03588em;">y</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.6644em;"><span style="top:-3.063em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mathnormal mtight" style="margin-right:0.03588em;">ω</span></span></span></span></span></span></span></span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.686em;"><span></span></span></span></span></span><span class="mclose nulldelimiter"></span></span><span class="mclose delimcenter" style="top:0em;"><span class="delimsizing size3">)</span></span></span><span class="mspace" style="margin-right:0.1667em;"></span><span class="minner"><span class="mopen delimcenter" style="top:0em;"><span class="delimsizing size4">{</span></span><span class="mopen">(</span><span class="mop">lo<span style="margin-right:0.01389em;">g</span></span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord mathnormal" style="margin-right:0.03588em;">y</span><span class="mclose"><span class="mclose">)</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.7144em;"><span style="top:-3.113em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight" style="margin-right:0.02778em;">r</span></span></span></span></span></span></span></span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">+</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mop op-limits"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:1.6514em;"><span style="top:-1.8723em;margin-left:0em;"><span class="pstrut" style="height:3.05em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mathnormal mtight">i</span><span class="mrel mtight">=</span><span class="mord mtight">1</span></span></span></span><span style="top:-3.05em;"><span class="pstrut" style="height:3.05em;"></span><span><span class="mop op-symbol large-op">∑</span></span></span><span style="top:-4.3em;margin-left:0em;"><span class="pstrut" style="height:3.05em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight" style="margin-right:0.02778em;">r</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:1.2777em;"><span></span></span></span></span></span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord"><span class="mopen nulldelimiter"></span><span class="mfrac"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:1.5017em;"><span style="top:-2.314em;"><span class="pstrut" style="height:3em;"></span><span class="mord"><span class="mord"><span class="mord mathnormal" style="margin-right:0.03588em;">ω</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.7507em;"><span style="top:-2.989em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight">i</span></span></span></span></span></span></span></span></span></span><span style="top:-3.23em;"><span class="pstrut" style="height:3em;"></span><span class="frac-line" style="border-bottom-width:0.04em;"></span></span><span style="top:-3.677em;"><span class="pstrut" style="height:3em;"></span><span class="mord"><span class="mopen">(</span><span class="mord">−</span><span class="mord">1</span><span class="mclose"><span class="mclose">)</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.8247em;"><span style="top:-3.063em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight">i</span></span></span></span></span></span></span></span><span class="mord mathnormal" style="margin-right:0.02778em;">r</span><span class="mspace" style="margin-right:0.1667em;"></span><span class="minner">⋯</span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mopen">(</span><span class="mord mathnormal" style="margin-right:0.02778em;">r</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">−</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mord mathnormal">i</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">+</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mord">1</span><span class="mclose">)</span><span class="mopen">(</span><span class="mop">lo<span style="margin-right:0.01389em;">g</span></span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord mathnormal" style="margin-right:0.03588em;">y</span><span class="mclose"><span class="mclose">)</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.8247em;"><span style="top:-3.063em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mathnormal mtight" style="margin-right:0.02778em;">r</span><span class="mbin mtight">−</span><span class="mord mathnormal mtight">i</span></span></span></span></span></span></span></span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.686em;"><span></span></span></span></span></span><span class="mclose nulldelimiter"></span></span><span class="mclose delimcenter" style="top:0em;"><span class="delimsizing size4">}</span></span></span></span></span></span></span></p>
<ul>
<li><a href="https://vuepress-theme-hope.github.io/v2/zh/guide/markdown/tex.html" target="_blank" rel="noopener noreferrer">查看详情<ExternalLinkIcon/></a></li>
</ul>
<h4 id="导入文件" tabindex="-1"><a class="header-anchor" href="#导入文件" aria-hidden="true">#</a> 导入文件</h4>
<ul>
<li>
<p><RouterLink to="/zh/demo/markdown.html">Markdown 展示</RouterLink></p>
</li>
<li>
<p><RouterLink to="/zh/demo/page.html">页面展示</RouterLink></p>
</li>
<li>
<p><RouterLink to="/zh/demo/disable.html">禁用展示</RouterLink></p>
</li>
<li>
<p><RouterLink to="/zh/demo/encrypt.html">加密展示</RouterLink></p>
</li>
</ul>
<ul>
<li><a href="https://vuepress-theme-hope.github.io/v2/zh/guide/markdown/include.html" target="_blank" rel="noopener noreferrer">查看详情<ExternalLinkIcon/></a></li>
</ul>
<h4 id="代码演示" tabindex="-1"><a class="header-anchor" href="#代码演示" aria-hidden="true">#</a> 代码演示</h4>

<CodeDemo id="code-demo-3c31404e" type="normal" title="%E4%B8%80%E4%B8%AA%E6%99%AE%E9%80%9A%20Demo" code="%7B%22html%22%3A%22%3Ch1%3EVuePress%20Theme%20Hope%3C%2Fh1%3E%5Cn%3Cp%3E%3Cspan%20id%3D%5C%22very%5C%22%3E%E9%9D%9E%E5%B8%B8%3C%2Fspan%3E%E5%BC%BA%E5%A4%A7!%3C%2Fp%3E%5Cn%22%2C%22js%22%3A%22document.querySelector(%5C%22%23very%5C%22).addEventListener(%5C%22click%5C%22%2C%20()%20%3D%3E%20%7B%5Cn%20%20alert(%5C%22%E9%9D%9E%E5%B8%B8%E5%BC%BA%E5%A4%A7%5C%22)%3B%5Cn%7D)%3B%5Cn%22%2C%22css%22%3A%22span%20%7B%5Cn%20%20color%3A%20red%3B%5Cn%7D%5Cn%22%7D">
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">></span></span>VuePress Theme Hope<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>very<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>非常<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span>强大!<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">"#very"</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">"click"</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">"非常强大"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-css ext-css line-numbers-mode"><pre v-pre class="language-css"><code><span class="token selector">span</span> <span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></CodeDemo><ul>
<li><a href="https://vuepress-theme-hope.github.io/v2/zh/guide/markdown/demo.html" target="_blank" rel="noopener noreferrer">查看详情<ExternalLinkIcon/></a></li>
</ul>
<h4 id="样式化" tabindex="-1"><a class="header-anchor" href="#样式化" aria-hidden="true">#</a> 样式化</h4>
<p>向 Mr.Hope 捐赠一杯咖啡。 <Badge type="tip">Recommanded</Badge></p>
<ul>
<li><a href="https://vuepress-theme-hope.github.io/v2/zh/guide/markdown/stylize.html" target="_blank" rel="noopener noreferrer">查看详情<ExternalLinkIcon/></a></li>
</ul>
<h4 id="交互演示" tabindex="-1"><a class="header-anchor" href="#交互演示" aria-hidden="true">#</a> 交互演示</h4>
<Playground key="5847d57f" title="TS%20%E6%A1%88%E4%BE%8B" link="https%3A%2F%2Fwww.typescriptlang.org%2Fplay%23code%2FMYewdgzgLgBAthA5jAvDARACwKYBtcgwDuIATrgCboDcAULaJLBAA7YCGA1qjABQKIAXDGikAlmEQBKVAD4YjCCFzYAdAUT8kUurVYdOW6XSA">
</Playground>
<ul>
<li><a href="https://vuepress-theme-hope.github.io/v2/zh/guide/markdown/playground.html" target="_blank" rel="noopener noreferrer">查看详情<ExternalLinkIcon/></a></li>
</ul>
<h4 id="vue-交互演示" tabindex="-1"><a class="header-anchor" href="#vue-交互演示" aria-hidden="true">#</a> Vue 交互演示</h4>
<VuePlayground title="Vue%20%E4%BA%A4%E4%BA%92%E6%BC%94%E7%A4%BA" key="44e05a1a" settings="%7B%7D" files="eyJBcHAudnVlIjoiPHNjcmlwdCBzZXR1cD5cbmltcG9ydCB7IHJlZiB9IGZyb20gXCJ2dWVcIjtcblxuY29uc3QgbXNnID0gcmVmKFwiSGVsbG8gV29ybGQhXCIpO1xuPC9zY3JpcHQ%2BXG5cbjx0ZW1wbGF0ZT5cbiAgPGgxPnt7IG1zZyB9fTwvaDE%2BXG4gIDxpbnB1dCB2LW1vZGVsPVwibXNnXCIgLz5cbjwvdGVtcGxhdGU%2BXG4ifQ%3D%3D">
</VuePlayground>
<ul>
<li><a href="https://vuepress-theme-hope.github.io/v2/zh/guide/markdown/vue-playground.html" target="_blank" rel="noopener noreferrer">查看详情<ExternalLinkIcon/></a></li>
</ul>
<h4 id="幻灯片" tabindex="-1"><a class="header-anchor" href="#幻灯片" aria-hidden="true">#</a> 幻灯片</h4>
<Presentation id="presentation-64a56060" data-code="%0A%23%23%20%E5%B9%BB%E7%81%AF%E7%89%87%201%0A%0A%E4%B8%80%E4%B8%AA%E6%9C%89%E6%96%87%E5%AD%97%E5%92%8C%20%5B%E9%93%BE%E6%8E%A5%5D(https%3A%2F%2Fmrhope.site)%20%E7%9A%84%E6%AE%B5%E8%90%BD%0A%0A---%0A%0A%23%23%20%E5%B9%BB%E7%81%AF%E7%89%87%202%0A%0A-%20%E9%A1%B9%E7%9B%AE%201%0A-%20%E9%A1%B9%E7%9B%AE%202%0A%0A---%0A%0A%23%23%20%E5%B9%BB%E7%81%AF%E7%89%87%203.1%0A%0A%60%60%60js%0Aconst%20a%20%3D%201%3B%0A%60%60%60%0A%0A--%0A%0A%23%23%20%E5%B9%BB%E7%81%AF%E7%89%87%203.2%0A%0A%24%24%0AJ(%5Ctheta_0%2C%5Ctheta_1)%20%3D%20%5Csum_%7Bi%3D0%7D%0A%24%24%0A" theme="auto"></Presentation><ul>
<li><a href="https://vuepress-theme-hope.github.io/v2/zh/guide/markdown/presentation.html" target="_blank" rel="noopener noreferrer">查看详情<ExternalLinkIcon/></a></li>
</ul>
<hr class="footnotes-sep">
<section class="footnotes">
<ol class="footnotes-list">
<li id="footnote1" class="footnote-item"><p>这是脚注内容 <a href="#footnote-ref1" class="footnote-backref">↩︎</a></p>
</li>
</ol>
</section>
</div></template>


