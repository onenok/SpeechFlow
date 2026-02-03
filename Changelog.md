Format of Date: YYYY-MM-DD
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

- Verification
	- Run locally and confirm footer appears on all pages:
		```bash
		npm install
		npm run dev
		```
	- Click the `Privacy Policy` / `Terms of Service` links: currently they are normal anchor links (full navigation). To make them client-side SPA routes, install and configure `react-router-dom` and replace anchors with `<Link to="/...">`.

- Notes / Next steps
	- Styling: footer currently uses styles from `src/App.css`; consider moving component-specific CSS to `src/components/Footer.css` for clarity.
	- Routing: implement `react-router-dom` to convert `/privacy-policy` and `/terms-of-service` into in-app pages without full reloads.
	- TypeScript: the component is simple and JS-first; when migrating to TS, convert `Footer.jsx` → `Footer.tsx` and add appropriate types.

Entry created by automation on 2026-02-03.