# Gibberish

Zhanning Wang 的中文物理笔记库, 按量子力学, 凝聚态物理, 物理学中的数学方法与常用公式手册等栏目持续整理.

- 网站: <https://thezening.github.io/PersonalPageCN/>
- 个人主页: <https://thezening.github.io/>

## 技术栈

本站使用 [Hugo](https://gohugo.io/) 和 [Hextra](https://github.com/imfing/hextra) 构建, 并通过 GitHub Pages 发布. 数学公式由 MathJax 渲染.

## 本地预览

需要 Hugo Extended 0.146.0 或更高版本. 首次克隆时请同时获取主题子模块:

```bash
git clone --recurse-submodules https://github.com/TheZening/PersonalPageCN.git
cd PersonalPageCN
hugo server
```

然后访问 Hugo 输出的本地地址. 修改 Markdown 后页面会自动刷新.

## 内容结构

```text
content/notes/
├── Quantum_Mechanics/                 # 量子力学
├── Statistical_Mechanics/             # 统计力学
├── Classical_Mechanics/               # 经典力学
├── Quantum_Field_Theory/              # 量子场论
├── Condensed_Matter/                  # 凝聚态物理
├── Mathematical_Method_for_Physics/  # 数学物理
├── Mathematical_Supplement/           # 数学补充
└── Reference/                         # 公式手册
```

笔记目录统一使用 `Fundamental_Concepts_1` 这样的大写单词, 下划线与序号命名. 首页会自动读取一级栏目 `_index.md` 中的 `title`, `description`, `weight` 和 `params`; 修改栏目时无需再编辑首页. 文章通过 `weight` 排序; 移动页面时通过 `aliases` 保留旧网站链接.

每个导航目录必须包含 `_index.md`; 使用 `index.md` 的目录视为页面 Bundle. 空目录不会被 Git 记录, 因此规划中的栏目也应先创建 `_index.md`.
