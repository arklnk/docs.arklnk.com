import{_ as e,o as a,c as i,e as d}from"../app.2fb2eae3.mjs";const s={},n=d(`<h1 id="\u8F85\u52A9\u547D\u4EE4" tabindex="-1"><a class="header-anchor" href="#\u8F85\u52A9\u547D\u4EE4" aria-hidden="true">#</a> \u8F85\u52A9\u547D\u4EE4</h1><p>\u5F00\u53D1\u6A21\u5F0F</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>git clone https://github.com/arklnk/ark-admin-zero.git
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>cd ark-admin-zero
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>docker-compose -f docker-compose-dev.yml up -d
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u8FDB\u5165\u5BB9\u5668</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>docker exec -it api /bin/sh
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u6620\u5C04\u5DE5\u5177</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>alias api=&quot;/server/build/dev/tools/api.sh&quot;
alias model=&quot;/server/build/dev/tools/model.sh&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="api" tabindex="-1"><a class="header-anchor" href="#api" aria-hidden="true">#</a> api</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>api [api\u6587\u4EF6\u6240\u5728\u76EE\u5F55] [api\u6587\u4EF6]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u4F8B\u5982api\u6587\u4EF6\u5728\uFF1A/app/core/cmd/api/core.api</p><p>\u5982\u679C\u8981\u751F\u6210\u4EE3\u7801\uFF0C\u5219\u53EF\u4EE5\u8FD0\u884C</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>api /app/core/cmd/api core.api
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u6216\u8005</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>cd /app/core/cmd/api
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>api ./ core.api
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="model" tabindex="-1"><a class="header-anchor" href="#model" aria-hidden="true">#</a> model</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>model [\u8868\u540D] [model\u4EE3\u7801\u76EE\u5F55]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u4F8B\u5982</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>model sys_user /app/core/model
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,21),l=[n];function t(r,c){return a(),i("div",null,l)}const u=e(s,[["render",t],["__file","tool.html.vue"]]);export{u as default};
