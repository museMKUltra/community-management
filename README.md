# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

## Demo

### Goal

介面的仿真程度

### Environment

- React + Vite (develop)
- gh-pages (deploy)

### Process

1. 檢視介面上需要用到的 token (css variables)
2. 頁面需要呈現的 data (json files)
3. 整理會要用到的 assets (icons, pictures)

### Components

1. 較小且複用程度高的元件 (component)
2. 關聯度高需要和特定元件配合 (feature layers)
3. 區域負責排版與背景樣式 (layout)

### Interactions

#### Tabs

1. TabButton 負責單純 button 的樣式與事件觸發 (component)
2. useTabs 處理 tab 點擊後切換對應 content 的邏輯 (custom hook)
3. TabBox 賦予 tab 區塊的排版與客製樣式 (layout)

### Discussion

1. 部分少用的特例 (space 6px, border-radius 10px/50px)
2. 許多顏色的使用包含透明度 (should include rgb & opacity rather than rex only)
3. 部分客製的 divider & linear gradient
4. 客製的 scroll bar 暫不處理
5. RWD 的程度與裝置的限制，影響排版的取捨與彈性的程度
6. 其它 UI 上的互動，影響切排預留的事件操作與資料存取
