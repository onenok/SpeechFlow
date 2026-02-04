```Format the Changes Log
Changes (YYYY-MM-DD HH:MM:SS UTC 8 Unix timestamp: xxxxxxxxx):
- Summary: Short summary of changes.
Detailed list of changes:
- Added / Modified / Removed
    - File path
        - Purpose / Change
        - Key content (if applicable)
```

Changes (2026-02-03):

- Summary: 把頁尾從 `src/App.jsx` 拆出成獨立元件，便於未來維護與路由整合（SPA）。

- Added
	- `src/components/Footer.jsx`
		- Purpose: 獨立的 Footer 元件，包含隱私與服務條款連結與版權宣告。
		- Key content:
			```jsx
			export default function Footer() {
				return (
					<footer className="site-footer">
						<nav className="footer-nav">
							<a href="/privacy-policy">Privacy Policy</a> | <a href="/terms-of-service">Terms of Service</a>
						</nav>
						<p>© {new Date().getFullYear()} SpeechFlow</p>
					</footer>
				)
			}
			```

- Modified
	- `src/App.jsx`
		- Change: 匯入 `Footer` 並在主 fragment 結尾渲染 `<Footer />`。
		- Rationale: 將頁尾與主要頁面內容分離，方便測試、重用與未來 SSR/TS 轉換。
	- `DEV.md`
		- Change: 新增短版變更紀錄與本機驗證步驟（`npm install` / `npm run dev`）。
 
Changes (2026-02-03 16:01:05 UTC+8, Unix: 1770105665):

- Summary: 新增多個專案基礎檔案，並將樣式與入口點整理到 `src/` 以利開發流程。

- Added / Created
	- `package.json`
		- Purpose: 專案依賴與開發 script（`dev`, `build`, `preview`, `lint`）。
	- `vite.config.js`
		- Purpose: Vite 配置，啟用 `@vitejs/plugin-react-swc`。
	- `public/vite.svg` and `src/assets/react.svg`
		- Purpose: 靜態資源（logo）加入到專案中供展示。
	- `src/index.css`
		- Purpose: 全域基底樣式（字體、色彩、按鈕、佈局等）。
	- `src/App.css`
		- Purpose: App/組件樣式（logo、card、read-the-docs 等）。
	- `src/main.jsx`
		- Purpose: 應用進入點，使用 `createRoot` 將 `App` 掛載到 `#root`。

- Modified / Moved
	- `src/App.jsx`
		- Now imports `Footer` and renders `<Footer />` at the end.
	- CSS consolidation:
		- Previously-separated default styles were consolidated into `src/App.css` and `src/index.css` to centralize global and app-specific styling.