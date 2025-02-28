import React from 'react';
import { hydrateRoot } from 'react-dom/client';

// ✅ `PageContext` を手動で型定義
export type PageContext = {
  Page: React.ComponentType;
  pageProps?: Record<string, unknown>;
  urlOriginal: string; // `PageContextBuiltInClient` に含まれていた重要なプロパティを手動追加
};

export function render(pageContext: PageContext) {
  const { Page, pageProps } = pageContext;
  hydrateRoot(document.getElementById('app')!, <Page {...pageProps} />);
}
