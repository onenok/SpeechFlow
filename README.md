
SpeechFlow
=========

專案概述
--
SpeechFlow 為基於 Vite + React 的前端範例專案，使用單頁應用（SPA）架構，後續導入路由、元件化, 視情況可能會轉用TypeScript。

技術棧
--
- 開發工具：Vite
- 前端框架：React（使用 @vitejs/plugin-react-swc）
- 語言：JavaScript + SWC（未來maybe可能會改用TypeScript）
- 套件管理：npm

主要檔案與目錄
--
- `index.html`：Vite 進入點，包含 `<div id="root"></div>`。
- `package.json`：專案依賴與常用 script (`dev`, `build`, `preview`, `lint`)。
- `vite.config.js`：Vite 設定，啟用 React SWC 插件。
- `src/main.jsx`：應用入口，建立 React root 並掛載 `App`。
- `src/App.jsx`：主要應用殼（目前負責頁面結構與範例內容）。
- `src/components/Footer.jsx`：已抽出的頁尾元件（含 `/privacy-policy` 與 `/terms-of-service` 連結）。
- `src/index.css` / `src/App.css`：全域與應用樣式。
- `public/` 與 `src/assets/`：靜態資源（logo 等）。
- `Changelog.md`：變更紀錄（請將重要變更寫入此檔）。

開發與執行
--
1. 安裝依賴：

```bash
npm install
```

2. 啟動開發伺服器：

```bash
npm run dev
```

3. 建置（production）：

```bash
npm run build
```

4. 本機預覽建置：

```bash
npm run preview
```

分支與 PR 流程
--
採用 Feature Branch + Pull Request 流程，`main` 分支受保護，禁止直接 push。所有功能修改請建立 feature branch，並以 PR 合併，包含必要的說明與變更紀錄連結。

目前狀態與注意事項
--
- 組件化：頁尾已從 `src/App.jsx` 抽離為 `src/components/Footer.jsx`，便於重用與測試。
- 路由：`/privacy-policy` 與 `/terms-of-service` 目前為普通連結；如需 SPA 行為，請安裝並設定 `react-router-dom`，將 `<a>` 換為 `<Link to="/...">`。
- 樣式整理：樣式已整合至 `src/index.css` 與 `src/App.css`，建議將元件專屬樣式拆分至 `src/components/*/*.css`（例如 `src/components/Footer.css`）。
- TypeScript 遷移：專案採用 JS 開發，未來可逐步將單一元件轉為 `.tsx` 並加入型別宣告。

追蹤紀錄
--
請將所有重要修改與設計決策記錄在 `Changelog.md`，並在 PR 說明中連結對應條目。

檔案位置
--
README 更新於：2026-02-04

