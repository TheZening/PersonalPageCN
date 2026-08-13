# 物理杂谈

Zhanning Wang 的中文物理笔记库，内容涵盖量子力学、凝聚态物理、数学物理与常用公式手册。

- 网站：<https://thezening.github.io/PersonalPageCN/>
- 个人主页：<https://thezening.github.io/>

## 技术栈

本站使用 [Hugo](https://gohugo.io/) 和 [Hextra](https://github.com/imfing/hextra) 构建，并通过 GitHub Pages 发布。数学公式由 MathJax 渲染。

## 本地预览

需要 Hugo Extended 0.146.0 或更高版本。首次克隆时请同时获取主题子模块：

```bash
git clone --recurse-submodules https://github.com/TheZening/PersonalPageCN.git
cd PersonalPageCN
hugo server
```

然后访问 Hugo 输出的本地地址。修改 Markdown 后页面会自动刷新。

## 内容结构

```text
content/notes/
├── quantum-mechanics/      # 量子力学
├── condensed-matter/       # 凝聚态物理
├── mathematical-physics/   # 数学物理
└── reference/              # 公式手册
```

各级 `_index.md` 定义导航标题和顺序；文章通过 `weight` 排序，并通过 `aliases` 保留旧网站链接。
