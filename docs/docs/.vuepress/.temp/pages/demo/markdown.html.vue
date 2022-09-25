<template><div><p>VuePress basically generate pages from Markdown files. So you can use it to generate documentation or blog sites easily.</p>
<p>You should create and write Markdown files, so that VuePress can convert them to different pages according to file structure.</p>
<!-- more -->
<h2 id="markdown-introduction" tabindex="-1"><a class="header-anchor" href="#markdown-introduction" aria-hidden="true">#</a> Markdown Introduction</h2>
<p>If you are a new learner and don’t know how to write Markdown, please read <a href="https://vuepress-theme-hope.github.io/v2/cookbook/markdown/" target="_blank" rel="noopener noreferrer">Markdown Intro<ExternalLinkIcon/></a> and <a href="https://vuepress-theme-hope.github.io/v2/cookbook/markdown/demo.html" target="_blank" rel="noopener noreferrer">Markdown Demo<ExternalLinkIcon/></a>.</p>
<h2 id="markdown-config" tabindex="-1"><a class="header-anchor" href="#markdown-config" aria-hidden="true">#</a> Markdown Config</h2>
<p>VuePress introduce configuration for each markdown page using Frontmatter.</p>
<div class="custom-container info">
<p class="custom-container-title">Info</p>
<p>Frontmatter is a important concept in VuePress. If you don’t know it, you need to read <a href="https://vuepress-theme-hope.github.io/v2/cookbook/vuepress/page.html#front-matter" target="_blank" rel="noopener noreferrer">Frontmatter Introduction<ExternalLinkIcon/></a>.</p>
</div>
<h2 id="markdown-extension" tabindex="-1"><a class="header-anchor" href="#markdown-extension" aria-hidden="true">#</a> Markdown Extension</h2>
<p>The Markdown content in VuePress will be parsed by <a href="https://github.com/markdown-it/markdown-it" target="_blank" rel="noopener noreferrer">markdown-it<ExternalLinkIcon/></a>, which supports <a href="https://github.com/markdown-it/markdown-it#syntax-extensions" target="_blank" rel="noopener noreferrer">syntax extensions<ExternalLinkIcon/></a> via markdown-it plugins.</p>
<h3 id="vuepress-enhancement" tabindex="-1"><a class="header-anchor" href="#vuepress-enhancement" aria-hidden="true">#</a> VuePress Enhancement</h3>
<p>To enrich document writing, VuePress has extended Markdown syntax.</p>
<p>For these extensions, please read <a href="https://vuepress-theme-hope.github.io/v2/basic/vuepress/markdown.html" target="_blank" rel="noopener noreferrer">Markdown extensions in VuePress<ExternalLinkIcon/></a>.</p>
<h3 id="theme-enhancement" tabindex="-1"><a class="header-anchor" href="#theme-enhancement" aria-hidden="true">#</a> Theme Enhancement</h3>
<p>By using <a href="https://vuepress-theme-hope.github.io/v2/md-enhance/" target="_blank" rel="noopener noreferrer"><code v-pre>vuepress-plugin-md-enhance</code><ExternalLinkIcon/></a>, the theme extends more Markdown syntax and provides richer writing functions.</p>
<h4 id="custom-container" tabindex="-1"><a class="header-anchor" href="#custom-container" aria-hidden="true">#</a> Custom Container</h4>
<div v-pre>
<p>Safely use {{ variable }} in Markdown.</p>
</div>
<div class="custom-container info">
<p class="custom-container-title">Custom Title</p>
<p>A custom information container with <code v-pre>code</code>, <a href="#custom-container">link</a>.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> a <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></div>
<div class="custom-container tip">
<p class="custom-container-title">Custom Title</p>
<p>A custom tip container</p>
</div>
<div class="custom-container warning">
<p class="custom-container-title">Custom Title</p>
<p>A custom warning container</p>
</div>
<div class="custom-container danger">
<p class="custom-container-title">Custom Title</p>
<p>A custom danger container</p>
</div>
<details class="custom-container details"><summary>Custom Title</summary>
<p>A custom details container</p>
</details>
<details class="custom-container details"><summary>Code</summary>
<div class="language-markdown ext-md line-numbers-mode"><pre v-pre class="language-markdown"><code>::: v-pre

Safely use {{ variable }} in Markdown.

:::

::: info Custom Title

A custom information container

:::

::: tip Custom Title

A custom tip container

:::

::: warning Custom Title

A custom warning container

:::

::: danger Custom Title

A custom danger container

:::

::: details Custom Title

A custom details container

:::
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details>
<ul>
<li><a href="https://vuepress-theme-hope.github.io/v2/guide/markdown/container.html" target="_blank" rel="noopener noreferrer">View Detail<ExternalLinkIcon/></a></li>
</ul>
<h4 id="tabs" tabindex="-1"><a class="header-anchor" href="#tabs" aria-hidden="true">#</a> Tabs</h4>
<Tabs :data='[{"title":"apple"},{"title":"banana"},{"title":"orange"}]' tab-id="fruit">
<template #tab0="{ title, value, isActive }">
<p>Apple</p>
</template>
<template #tab1="{ title, value, isActive }">
<p>Banana</p>
</template>
<template #tab2="{ title, value, isActive }">
<p>Orange</p>
</template>
</Tabs>
<ul>
<li><a href="https://vuepress-theme-hope.github.io/v2/guide/markdown/tabs.html" target="_blank" rel="noopener noreferrer">View Detail<ExternalLinkIcon/></a></li>
</ul>
<h4 id="code-tabs" tabindex="-1"><a class="header-anchor" href="#code-tabs" aria-hidden="true">#</a> Code Tabs</h4>
<CodeTabs :data='[{"title":"pnpm"},{"title":"yarn"},{"title":"npm"}]' :active="2" tab-id="shell">

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
<li><a href="https://vuepress-theme-hope.github.io/v2/guide/markdown/code-tabs.html" target="_blank" rel="noopener noreferrer">View Detail<ExternalLinkIcon/></a></li>
</ul>
<h4 id="superscript-and-subscript" tabindex="-1"><a class="header-anchor" href="#superscript-and-subscript" aria-hidden="true">#</a> Superscript and Subscript</h4>
<p>19<sup>th</sup> H<sub>2</sub>O</p>
<ul>
<li><a href="https://vuepress-theme-hope.github.io/v2/guide/markdown/sup-sub.html" target="_blank" rel="noopener noreferrer">View Detail<ExternalLinkIcon/></a></li>
</ul>
<h4 id="align" tabindex="-1"><a class="header-anchor" href="#align" aria-hidden="true">#</a> Align</h4>
<div style="text-align:center">
<p>I am center</p>
</div>
<div style="text-align:right">
<p>I am right align</p>
</div>
<ul>
<li><a href="https://vuepress-theme-hope.github.io/v2/guide/markdown/align.html" target="_blank" rel="noopener noreferrer">View Detail<ExternalLinkIcon/></a></li>
</ul>
<h4 id="attrs" tabindex="-1"><a class="header-anchor" href="#attrs" aria-hidden="true">#</a> Attrs</h4>
<p>A <strong id="word">word</strong> having id.</p>
<ul>
<li><a href="https://vuepress-theme-hope.github.io/v2/guide/markdown/attrs.html" target="_blank" rel="noopener noreferrer">View Detail<ExternalLinkIcon/></a></li>
</ul>
<h4 id="footnote" tabindex="-1"><a class="header-anchor" href="#footnote" aria-hidden="true">#</a> Footnote</h4>
<p>This text has footnote<sup class="footnote-ref"><a href="#footnote1">[1]</a><a class="footnote-anchor" id="footnote-ref1" /></sup>.</p>
<ul>
<li><a href="https://vuepress-theme-hope.github.io/v2/guide/markdown/footnote.html" target="_blank" rel="noopener noreferrer">View Detail<ExternalLinkIcon/></a></li>
</ul>
<h4 id="mark" tabindex="-1"><a class="header-anchor" href="#mark" aria-hidden="true">#</a> Mark</h4>
<p>You can mark <mark>important words</mark> .</p>
<ul>
<li><a href="https://vuepress-theme-hope.github.io/v2/guide/markdown/mark.html" target="_blank" rel="noopener noreferrer">View Detail<ExternalLinkIcon/></a></li>
</ul>
<h4 id="tasklist" tabindex="-1"><a class="header-anchor" href="#tasklist" aria-hidden="true">#</a> Tasklist</h4>
<ul class="task-list-container">
<li class="task-list-item">
<p><input type="checkbox" class="task-list-item-checkbox" id="task-item-0" checked="checked" disabled="disabled"><label class="task-list-item-label" for="task-item-0"> Plan A</label></p>
</li>
<li class="task-list-item">
<p><input type="checkbox" class="task-list-item-checkbox" id="task-item-1" disabled="disabled"><label class="task-list-item-label" for="task-item-1"> Plan B</label></p>
</li>
<li>
<p><a href="https://vuepress-theme-hope.github.io/v2/guide/markdown/tasklist.html" target="_blank" rel="noopener noreferrer">View Detail<ExternalLinkIcon/></a></p>
</li>
</ul>
<h4 id="image-enhancement" tabindex="-1"><a class="header-anchor" href="#image-enhancement" aria-hidden="true">#</a> Image Enhancement</h4>
<p>Support setting color scheme and size</p>
<ul>
<li><a href="https://vuepress-theme-hope.github.io/v2/guide/markdown/image.html" target="_blank" rel="noopener noreferrer">View Detail<ExternalLinkIcon/></a></li>
</ul>
<h4 id="chart" tabindex="-1"><a class="header-anchor" href="#chart" aria-hidden="true">#</a> Chart</h4>
<ChartJS id="chart-64a56866" config="%7B%0A%20%20%22type%22%3A%20%22scatter%22%2C%0A%20%20%22data%22%3A%20%7B%0A%20%20%20%20%22datasets%22%3A%20%5B%0A%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%22label%22%3A%20%22Scatter%20Dataset%22%2C%0A%20%20%20%20%20%20%20%20%22data%22%3A%20%5B%0A%20%20%20%20%20%20%20%20%20%20%7B%20%22x%22%3A%20-10%2C%20%22y%22%3A%200%20%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%7B%20%22x%22%3A%200%2C%20%22y%22%3A%2010%20%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%7B%20%22x%22%3A%2010%2C%20%22y%22%3A%205%20%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%7B%20%22x%22%3A%200.5%2C%20%22y%22%3A%205.5%20%7D%0A%20%20%20%20%20%20%20%20%5D%2C%0A%20%20%20%20%20%20%20%20%22backgroundColor%22%3A%20%22rgb(255%2C%2099%2C%20132)%22%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%5D%0A%20%20%7D%2C%0A%20%20%22options%22%3A%20%7B%0A%20%20%20%20%22scales%22%3A%20%7B%0A%20%20%20%20%20%20%22x%22%3A%20%7B%0A%20%20%20%20%20%20%20%20%22type%22%3A%20%22linear%22%2C%0A%20%20%20%20%20%20%20%20%22position%22%3A%20%22bottom%22%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D%0A" title="A%20Scatter%20Chart" type="json"></ChartJS><ul>
<li><a href="https://vuepress-theme-hope.github.io/v2/guide/markdown/chart.html" target="_blank" rel="noopener noreferrer">View Detail<ExternalLinkIcon/></a></li>
</ul>
<h4 id="echarts" tabindex="-1"><a class="header-anchor" href="#echarts" aria-hidden="true">#</a> Echarts</h4>
<ECharts id="echarts-64a56822" config="%7B%0A%20%20%22xAxis%22%3A%20%7B%0A%20%20%20%20%22type%22%3A%20%22category%22%2C%0A%20%20%20%20%22data%22%3A%20%5B%22Mon%22%2C%20%22Tue%22%2C%20%22Wed%22%2C%20%22Thu%22%2C%20%22Fri%22%2C%20%22Sat%22%2C%20%22Sun%22%5D%0A%20%20%7D%2C%0A%20%20%22yAxis%22%3A%20%7B%0A%20%20%20%20%22type%22%3A%20%22value%22%0A%20%20%7D%2C%0A%20%20%22series%22%3A%20%5B%0A%20%20%20%20%7B%0A%20%20%20%20%20%20%22data%22%3A%20%5B150%2C%20230%2C%20224%2C%20218%2C%20135%2C%20147%2C%20260%5D%2C%0A%20%20%20%20%20%20%22type%22%3A%20%22line%22%0A%20%20%20%20%7D%0A%20%20%5D%0A%7D%0A" title="A%20line%20chart" type="json"></ECharts><ul>
<li><a href="https://vuepress-theme-hope.github.io/v2/guide/markdown/echarts.html" target="_blank" rel="noopener noreferrer">View Detail<ExternalLinkIcon/></a></li>
</ul>
<h4 id="flowchart" tabindex="-1"><a class="header-anchor" href="#flowchart" aria-hidden="true">#</a> Flowchart</h4>
<FlowChart id="flowchart-64a567b4" code="cond%3D%3Econdition%3A%20Process%3F%0Aprocess%3D%3Eoperation%3A%20Process%0Ae%3D%3Eend%3A%20End%0A%0Acond(yes)-%3Eprocess-%3Ee%0Acond(no)-%3Ee%0A" preset="vue"></FlowChart><ul>
<li><a href="https://vuepress-theme-hope.github.io/v2/guide/markdown/flowchart.html" target="_blank" rel="noopener noreferrer">View Detail<ExternalLinkIcon/></a></li>
</ul>
<h4 id="mermaid" tabindex="-1"><a class="header-anchor" href="#mermaid" aria-hidden="true">#</a> Mermaid</h4>
<Mermaid id="mermaid-64a56774" code="flowchart%20TB%0A%20%20%20%20c1--%3Ea2%0A%20%20%20%20subgraph%20one%0A%20%20%20%20a1--%3Ea2%0A%20%20%20%20end%0A%20%20%20%20subgraph%20two%0A%20%20%20%20b1--%3Eb2%0A%20%20%20%20end%0A%20%20%20%20subgraph%20three%0A%20%20%20%20c1--%3Ec2%0A%20%20%20%20end%0A%20%20%20%20one%20--%3E%20two%0A%20%20%20%20three%20--%3E%20two%0A%20%20%20%20two%20--%3E%20c2%0A"></Mermaid><ul>
<li><a href="https://vuepress-theme-hope.github.io/v2/guide/markdown/mermaid.html" target="_blank" rel="noopener noreferrer">View Detail<ExternalLinkIcon/></a></li>
</ul>
<h4 id="tex" tabindex="-1"><a class="header-anchor" href="#tex" aria-hidden="true">#</a> Tex</h4>
<p class='katex-block'><span class="katex-display"><span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML" display="block"><semantics><mrow><mfrac><msup><mi mathvariant="normal">∂</mi><mi>r</mi></msup><mrow><mi mathvariant="normal">∂</mi><msup><mi>ω</mi><mi>r</mi></msup></mrow></mfrac><mrow><mo fence="true">(</mo><mfrac><msup><mi>y</mi><mi>ω</mi></msup><mi>ω</mi></mfrac><mo fence="true">)</mo></mrow><mo>=</mo><mrow><mo fence="true">(</mo><mfrac><msup><mi>y</mi><mi>ω</mi></msup><mi>ω</mi></mfrac><mo fence="true">)</mo></mrow><mrow><mo fence="true">{</mo><mo stretchy="false">(</mo><mi>log</mi><mo>⁡</mo><mi>y</mi><msup><mo stretchy="false">)</mo><mi>r</mi></msup><mo>+</mo><munderover><mo>∑</mo><mrow><mi>i</mi><mo>=</mo><mn>1</mn></mrow><mi>r</mi></munderover><mfrac><mrow><mo stretchy="false">(</mo><mo>−</mo><mn>1</mn><msup><mo stretchy="false">)</mo><mi>i</mi></msup><mi>r</mi><mo>⋯</mo><mo stretchy="false">(</mo><mi>r</mi><mo>−</mo><mi>i</mi><mo>+</mo><mn>1</mn><mo stretchy="false">)</mo><mo stretchy="false">(</mo><mi>log</mi><mo>⁡</mo><mi>y</mi><msup><mo stretchy="false">)</mo><mrow><mi>r</mi><mo>−</mo><mi>i</mi></mrow></msup></mrow><msup><mi>ω</mi><mi>i</mi></msup></mfrac><mo fence="true">}</mo></mrow></mrow><annotation encoding="application/x-tex">
\frac {\partial^r} {\partial \omega^r} \left(\frac {y^{\omega}} {\omega}\right)
= \left(\frac {y^{\omega}} {\omega}\right) \left\{(\log y)^r + \sum_{i=1}^r \frac {(-1)^i r \cdots (r-i+1) (\log y)^{r-i}} {\omega^i} \right\}
</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:2.4em;vertical-align:-0.95em;"></span><span class="mord"><span class="mopen nulldelimiter"></span><span class="mfrac"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:1.3714em;"><span style="top:-2.314em;"><span class="pstrut" style="height:3em;"></span><span class="mord"><span class="mord" style="margin-right:0.05556em;">∂</span><span class="mord"><span class="mord mathnormal" style="margin-right:0.03588em;">ω</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.5904em;"><span style="top:-2.989em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight" style="margin-right:0.02778em;">r</span></span></span></span></span></span></span></span></span></span><span style="top:-3.23em;"><span class="pstrut" style="height:3em;"></span><span class="frac-line" style="border-bottom-width:0.04em;"></span></span><span style="top:-3.677em;"><span class="pstrut" style="height:3em;"></span><span class="mord"><span class="mord"><span class="mord" style="margin-right:0.05556em;">∂</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.6644em;"><span style="top:-3.063em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight" style="margin-right:0.02778em;">r</span></span></span></span></span></span></span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.686em;"><span></span></span></span></span></span><span class="mclose nulldelimiter"></span></span><span class="mspace" style="margin-right:0.1667em;"></span><span class="minner"><span class="mopen delimcenter" style="top:0em;"><span class="delimsizing size3">(</span></span><span class="mord"><span class="mopen nulldelimiter"></span><span class="mfrac"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:1.3414em;"><span style="top:-2.314em;"><span class="pstrut" style="height:3em;"></span><span class="mord"><span class="mord mathnormal" style="margin-right:0.03588em;">ω</span></span></span><span style="top:-3.23em;"><span class="pstrut" style="height:3em;"></span><span class="frac-line" style="border-bottom-width:0.04em;"></span></span><span style="top:-3.677em;"><span class="pstrut" style="height:3em;"></span><span class="mord"><span class="mord"><span class="mord mathnormal" style="margin-right:0.03588em;">y</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.6644em;"><span style="top:-3.063em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mathnormal mtight" style="margin-right:0.03588em;">ω</span></span></span></span></span></span></span></span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.686em;"><span></span></span></span></span></span><span class="mclose nulldelimiter"></span></span><span class="mclose delimcenter" style="top:0em;"><span class="delimsizing size3">)</span></span></span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:3.0277em;vertical-align:-1.2777em;"></span><span class="minner"><span class="mopen delimcenter" style="top:0em;"><span class="delimsizing size3">(</span></span><span class="mord"><span class="mopen nulldelimiter"></span><span class="mfrac"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:1.3414em;"><span style="top:-2.314em;"><span class="pstrut" style="height:3em;"></span><span class="mord"><span class="mord mathnormal" style="margin-right:0.03588em;">ω</span></span></span><span style="top:-3.23em;"><span class="pstrut" style="height:3em;"></span><span class="frac-line" style="border-bottom-width:0.04em;"></span></span><span style="top:-3.677em;"><span class="pstrut" style="height:3em;"></span><span class="mord"><span class="mord"><span class="mord mathnormal" style="margin-right:0.03588em;">y</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.6644em;"><span style="top:-3.063em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mathnormal mtight" style="margin-right:0.03588em;">ω</span></span></span></span></span></span></span></span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.686em;"><span></span></span></span></span></span><span class="mclose nulldelimiter"></span></span><span class="mclose delimcenter" style="top:0em;"><span class="delimsizing size3">)</span></span></span><span class="mspace" style="margin-right:0.1667em;"></span><span class="minner"><span class="mopen delimcenter" style="top:0em;"><span class="delimsizing size4">{</span></span><span class="mopen">(</span><span class="mop">lo<span style="margin-right:0.01389em;">g</span></span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord mathnormal" style="margin-right:0.03588em;">y</span><span class="mclose"><span class="mclose">)</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.7144em;"><span style="top:-3.113em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight" style="margin-right:0.02778em;">r</span></span></span></span></span></span></span></span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">+</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mop op-limits"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:1.6514em;"><span style="top:-1.8723em;margin-left:0em;"><span class="pstrut" style="height:3.05em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mathnormal mtight">i</span><span class="mrel mtight">=</span><span class="mord mtight">1</span></span></span></span><span style="top:-3.05em;"><span class="pstrut" style="height:3.05em;"></span><span><span class="mop op-symbol large-op">∑</span></span></span><span style="top:-4.3em;margin-left:0em;"><span class="pstrut" style="height:3.05em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight" style="margin-right:0.02778em;">r</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:1.2777em;"><span></span></span></span></span></span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord"><span class="mopen nulldelimiter"></span><span class="mfrac"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:1.5017em;"><span style="top:-2.314em;"><span class="pstrut" style="height:3em;"></span><span class="mord"><span class="mord"><span class="mord mathnormal" style="margin-right:0.03588em;">ω</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.7507em;"><span style="top:-2.989em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight">i</span></span></span></span></span></span></span></span></span></span><span style="top:-3.23em;"><span class="pstrut" style="height:3em;"></span><span class="frac-line" style="border-bottom-width:0.04em;"></span></span><span style="top:-3.677em;"><span class="pstrut" style="height:3em;"></span><span class="mord"><span class="mopen">(</span><span class="mord">−</span><span class="mord">1</span><span class="mclose"><span class="mclose">)</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.8247em;"><span style="top:-3.063em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight">i</span></span></span></span></span></span></span></span><span class="mord mathnormal" style="margin-right:0.02778em;">r</span><span class="mspace" style="margin-right:0.1667em;"></span><span class="minner">⋯</span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mopen">(</span><span class="mord mathnormal" style="margin-right:0.02778em;">r</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">−</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mord mathnormal">i</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">+</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mord">1</span><span class="mclose">)</span><span class="mopen">(</span><span class="mop">lo<span style="margin-right:0.01389em;">g</span></span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord mathnormal" style="margin-right:0.03588em;">y</span><span class="mclose"><span class="mclose">)</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.8247em;"><span style="top:-3.063em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mathnormal mtight" style="margin-right:0.02778em;">r</span><span class="mbin mtight">−</span><span class="mord mathnormal mtight">i</span></span></span></span></span></span></span></span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.686em;"><span></span></span></span></span></span><span class="mclose nulldelimiter"></span></span><span class="mclose delimcenter" style="top:0em;"><span class="delimsizing size4">}</span></span></span></span></span></span></span></p>
<ul>
<li><a href="https://vuepress-theme-hope.github.io/v2/guide/markdown/tex.html" target="_blank" rel="noopener noreferrer">View Detail<ExternalLinkIcon/></a></li>
</ul>
<h4 id="include-files" tabindex="-1"><a class="header-anchor" href="#include-files" aria-hidden="true">#</a> Include files</h4>
<ul>
<li>
<p><RouterLink to="/demo/markdown.html">Markdown Enhance</RouterLink></p>
</li>
<li>
<p><RouterLink to="/demo/page.html">Page Config</RouterLink></p>
</li>
<li>
<p><RouterLink to="/demo/disable.html">Function Disable</RouterLink></p>
</li>
<li>
<p><RouterLink to="/demo/encrypt.html">Encryption Demo</RouterLink></p>
</li>
</ul>
<ul>
<li><a href="https://vuepress-theme-hope.github.io/v2/guide/markdown/include.html" target="_blank" rel="noopener noreferrer">View Detail<ExternalLinkIcon/></a></li>
</ul>
<h4 id="code-demo" tabindex="-1"><a class="header-anchor" href="#code-demo" aria-hidden="true">#</a> Code Demo</h4>

<CodeDemo id="code-demo-531a6052" type="normal" title="A%20normal%20demo" code="%7B%22html%22%3A%22%3Ch1%3EVuePress%20Theme%20Hope%3C%2Fh1%3E%5Cn%3Cp%3EIs%20%3Cspan%20id%3D%5C%22very%5C%22%3Every%3C%2Fspan%3E%20powerful!%3C%2Fp%3E%5Cn%22%2C%22js%22%3A%22document.querySelector(%5C%22%23very%5C%22).addEventListener(%5C%22click%5C%22%2C%20()%20%3D%3E%20%7B%5Cn%20%20alert(%5C%22Very%20powerful!%5C%22)%3B%5Cn%7D)%3B%5Cn%22%2C%22css%22%3A%22span%20%7B%5Cn%20%20color%3A%20red%3B%5Cn%7D%5Cn%22%7D">
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">></span></span>VuePress Theme Hope<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span>Is <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>very<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>very<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span> powerful!<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">"#very"</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">"click"</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">"Very powerful!"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-css ext-css line-numbers-mode"><pre v-pre class="language-css"><code><span class="token selector">span</span> <span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></CodeDemo><ul>
<li><a href="https://vuepress-theme-hope.github.io/v2/guide/markdown/demo.html" target="_blank" rel="noopener noreferrer">View Detail<ExternalLinkIcon/></a></li>
</ul>
<h4 id="stylize" tabindex="-1"><a class="header-anchor" href="#stylize" aria-hidden="true">#</a> Stylize</h4>
<p>Donate Mr.Hope a cup of coffee. <Badge type="tip">Recommanded</Badge></p>
<ul>
<li><a href="https://vuepress-theme-hope.github.io/v2/guide/markdown/stylize.html" target="_blank" rel="noopener noreferrer">View Detail<ExternalLinkIcon/></a></li>
</ul>
<h4 id="playground" tabindex="-1"><a class="header-anchor" href="#playground" aria-hidden="true">#</a> Playground</h4>
<Playground key="55548a79" title="TS%20demo" link="https%3A%2F%2Fwww.typescriptlang.org%2Fplay%23code%2FMYewdgzgLgBAthA5jAvDARACwKYBtcgwDuIATrgCboDcAULaJLBAA7YCGA1qjABQKIAXDGikAlmEQBKVAD4YjCCFzYAdAUT8kUurVYdOW6XSA">
</Playground>
<ul>
<li><a href="https://vuepress-theme-hope.github.io/v2/guide/markdown/playground.html" target="_blank" rel="noopener noreferrer">View Detail<ExternalLinkIcon/></a></li>
</ul>
<h4 id="vue-playground" tabindex="-1"><a class="header-anchor" href="#vue-playground" aria-hidden="true">#</a> Vue Playground</h4>
<VuePlayground title="Vue%20Playground" key="4a03eb72" settings="%7B%7D" files="eyJBcHAudnVlIjoiPHNjcmlwdCBzZXR1cD5cbmltcG9ydCB7IHJlZiB9IGZyb20gXCJ2dWVcIjtcblxuY29uc3QgbXNnID0gcmVmKFwiSGVsbG8gV29ybGQhXCIpO1xuPC9zY3JpcHQ%2BXG5cbjx0ZW1wbGF0ZT5cbiAgPGgxPnt7IG1zZyB9fTwvaDE%2BXG4gIDxpbnB1dCB2LW1vZGVsPVwibXNnXCIgLz5cbjwvdGVtcGxhdGU%2BXG4ifQ%3D%3D">
</VuePlayground>
<ul>
<li><a href="https://vuepress-theme-hope.github.io/v2/guide/markdown/vue-playground.html" target="_blank" rel="noopener noreferrer">View Detail<ExternalLinkIcon/></a></li>
</ul>
<h4 id="presentation" tabindex="-1"><a class="header-anchor" href="#presentation" aria-hidden="true">#</a> Presentation</h4>
<Presentation id="presentation-64a55fac" data-code="%0A%23%23%20Slide%201%0A%0AA%20paragraph%20with%20some%20text%20and%20a%20%5Blink%5D(https%3A%2F%2Fmrhope.site)%0A%0A---%0A%0A%23%23%20Slide%202%0A%0A-%20Item%201%0A-%20Item%202%0A%0A---%0A%0A%23%23%20Slide%203.1%0A%0A%60%60%60js%0Aconst%20a%20%3D%201%3B%0A%60%60%60%0A%0A--%0A%0A%23%23%20Slide%203.2%0A%0A%24%24%0AJ(%5Ctheta_0%2C%5Ctheta_1)%20%3D%20%5Csum_%7Bi%3D0%7D%0A%24%24%0A" theme="auto"></Presentation><ul>
<li><a href="https://vuepress-theme-hope.github.io/v2/guide/markdown/presentation.html" target="_blank" rel="noopener noreferrer">View Detail<ExternalLinkIcon/></a></li>
</ul>
<hr class="footnotes-sep">
<section class="footnotes">
<ol class="footnotes-list">
<li id="footnote1" class="footnote-item"><p>This is footnote content <a href="#footnote-ref1" class="footnote-backref">↩︎</a></p>
</li>
</ol>
</section>
</div></template>


