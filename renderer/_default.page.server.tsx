import React from "react";
import { renderToString } from "react-dom/server";
import { escapeInject, dangerouslySkipEscape } from "vike/server";

// ✅ `PageContext` を手動で型定義
export type PageContext = {
  Page: React.ComponentType;
  pageProps?: Record<string, unknown>;
  urlOriginal: string; // `PageContextBuiltIn` で提供されていたプロパティを手動追加
};

export { render };

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
      <title>鴨川湯 紹介ページ</title>
    </head>
    <body>
      <div id="app">${dangerouslySkipEscape(pageHtml)}</div>
    </body>
  </html>`;
}
