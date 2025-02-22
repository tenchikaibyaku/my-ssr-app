import React from 'react';

function Page({ message }: { message?: string }) {
  return (
    <div>
      <h1>鴨川湯 - Kyoto Sento</h1>
      <p>これはSSRでレンダリングされたページです。</p>
      <p>{message ?? 'ようこそ！'}</p> {/* ✅ `message` が undefined でもエラーにならないように修正 */}
    </div>
  );
}

// ✅ `vite-plugin-ssr` では `export default` はオブジェクトにする
export default { Page };
