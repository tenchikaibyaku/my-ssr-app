import React from 'react';
import { hydrateRoot } from 'react-dom/client';

export function render(pageContext: any) {
  const { Page } = pageContext;
  hydrateRoot(document.getElementById('app')!, <Page />);
}
