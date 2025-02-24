export default {
  meta: {
    title: {
      env: "server-and-client",
      value: "My SSR App"
    },
    description: {
      env: "server-only",
      value: "SSR rendered page for Kamogawa-yu in Kyoto"
    }
  },
  prerender: {
    partial: false // ✅ 明示的にプリレンダリングを有効化
  }
};
