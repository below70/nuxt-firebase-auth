// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  runtimeConfig: {
    public: {
      firebaseApiKey: process.env.FIREBASE_API_KEY // can be overridden by NUXT_API_SECRET environment variable
    }
  },
  modules: ['@nuxtjs/tailwindcss']
})
