import React from "react";
import { renderToString } from "react-dom/server";
import { escapeInject, dangerouslySkipEscape } from "vite-plugin-ssr/server";
import type { PageContextBuiltIn } from "vite-plugin-ssr/types";

export { render };
export type PageContext = PageContextBuiltIn & {
  Page: React.ComponentType;
  pageProps?: Record<string, unknown>;
};

async function render(pageContext: PageContext) {
  const { Page, pageProps } = pageContext;
  
  if (!Page) {
    throw new Error("Page コンポーネントが定義されていません。");
  }

  const pageHtml = renderToString(<Page {...pageProps} />);

  return escapeInject`<!DOCTYPE html>
  <html lang="ja">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>SSR React App</title>
    </head>
    <body>
      <div id="app">${dangerouslySkipEscape(pageHtml)}</div>
    </body>
  </html>`;
}
