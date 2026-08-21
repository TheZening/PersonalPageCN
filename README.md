# Gibberish

Zhanning Wang 的中文物理笔记库, 按量子力学, 凝聚态物理, 物理学中的数学方法与常用公式手册等栏目持续整理.

- 网站: <https://thezening.github.io/PersonalPageCN/>
- 个人主页: <https://thezening.github.io/>

## 技术栈

本站使用 [Hugo](https://gohugo.io/) 和 [Hextra](https://github.com/imfing/hextra) 构建, 并通过 GitHub Pages 发布. 数学公式由 MathJax 渲染. 行内公式统一使用 `$...$`; 块级公式的开闭 `$$` 必须各自独占一行, 公式直接写在两行 `$$` 之间, 不再嵌套 `equation` 环境.

## 本地预览

需要 Hugo Extended 0.146.0 或更高版本. 首次克隆时请同时获取主题子模块:

```bash
git clone --recurse-submodules https://github.com/TheZening/PersonalPageCN.git
cd PersonalPageCN
hugo server
```

然后访问 Hugo 输出的本地地址. 修改 Markdown 后页面会自动刷新.

## 费曼图

费曼图使用 TikZ-Feynman 编写, 在本地生成 SVG 后由 Hugo 短代码载入. 源文件位于 `assets/feynman-src/`, 生成文件位于 `assets/feynman/`.

每幅图都是一个自包含的 `standalone` 文档. 必须在加载 TikZ 前选择 dvisvgm 驱动:

```tex
\def\pgfsysdriver{pgfsys-dvisvgm.def}
\documentclass[dvisvgm,tikz,border=8pt]{standalone}
\usepackage[compat=1.1.0]{tikz-feynman}

\begin{document}
\begin{tikzpicture}
  \begin{feynman}
    % 顶点和传播线
  \end{feynman}
\end{tikzpicture}
\end{document}
```

为了让陈旧检查可靠, 源文件不能使用 `\input`, `\include` 或 `\includegraphics`; 需要的绘图定义应直接写在同一个文件中.

生成全部费曼图:

```bash
./scripts/build-feynman-diagrams.sh
```

只生成一幅图时, 可以传入相对于源目录的名称, `.tex` 后缀可以省略:

```bash
./scripts/build-feynman-diagrams.sh examples/qed_tree_scattering
```

在 Markdown 帖子中插入生成后的图:

```text
{{< feynman src="examples/qed_tree_scattering" alt="两条费米子线通过一条光子内线连接" caption="电子与缪子散射的树图" >}}
```

必须显式提供 `alt` 来说明图中的物理结构. `caption` 是可选的纯文本图题. `size` 可选值为 `small`, `medium`, `large` 和 `full`; 默认使用 `medium`. 单色透明图默认使用 `theme="invert"` 适配深色模式; 彩色图应显式使用 `theme="native"`.

生成的 SVG 与 `.tex` 源文件一起提交. 部署流程运行 `./scripts/build-feynman-diagrams.sh --check`, 如果 SVG 缺失或已经落后于源文件, 构建会直接失败. 当前图形流水线按单色图设计, 深色主题会自动反转线条与标签颜色.

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
