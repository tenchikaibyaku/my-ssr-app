export default {
  meta: {
    title: {
      value: "My SSR App",
      env: "server-and-client"
    },
    description: {
      value: "SSR rendered page for Kamogawa-yu in Kyoto",
      env: "server-only"
    }
  },
  prerender: {
    partial: false
  }
};
