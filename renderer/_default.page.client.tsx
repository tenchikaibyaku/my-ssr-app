import React from 'react';
import { hydrateRoot } from 'react-dom/client';
import type { PageContextBuiltInClient } from "vike/client";

export type PageContext = PageContextBuiltInClient & {
  Page: React.ComponentType;
  pageProps?: Record<string, unknown>;
};

export function render(pageContext: PageContext) {
  const { Page, pageProps } = pageContext;
  hydrateRoot(document.getElementById('app')!, <Page {...pageProps} />);
}
