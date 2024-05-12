const CONFIG = {
  // profile setting (required)
  profile: {
    name: "John Dzilva",
    image: "/emoji/profile.png", // If you want to create your own notion avatar, check out https://notion-avatar.vercel.app

    //Random Image set
    isRandom: false,
    randomImage: "/emoji/profile", // If you want to create your own notion avatar, check out https://notion-avatar.vercel.app
    ext: ".png",
    maxNum: 6,

    role: "Engineer",
    bio: `Technology captivates my heart with its endless possibilities!`,
    email: "john@gmail.com",
    linkedin: "johndiesilva",
    github: "johndzilva",
    instagram: "",
  },
  projects: [
    {
      name: `projects`,
      href: "https://github.com/johndzilva",
    },
  ],
  // blog setting (required)
  blog: {
    title: "John Dz",
    description: "Welcome to John's Repo!",
    //테마
    theme: "auto", // ['light', 'dark', 'auto']
    themeToggle: true,
    themeColor: {
      dark: "#121826",
      light: "#fff",
    },
  },

  // CONFIG configration (required)
  link: "https://johndz.vercel.app",
  since: 2023, // If leave this empty, current year will be used.
  lang: "en-US", // ['en-US', 'zh-CN', 'zh-HK', 'zh-TW', 'ja-JP', 'es-ES', 'ko-KR'] // 날짜 포맷 형식 적용
  ogImageGenerateURL: "https://og-image-korean.vercel.app", // The link to generate OG image, don't end with a slash
  seo: {
    keywords: ["Blog", "Website", "Notion"],
  },

  // notion configuration (required)
  notionConfig: {
    pageId: process.env.NOTION_PAGE_ID,
  },

  // plugin configuration (optional)
  googleAnalytics: {
    enable: true,
    config: {
      measurementId: process.env.NEXT_PUBLIC_GOOGLE_MEASUREMENT_ID || "",
    },
  },
  googleSearchConsole: {
    enable: true,
    config: {
      siteVerification: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || "",
    },
  },
  googleAdsense: {
    enable: false,
    config: {
      client: process.env.NEXT_PUBLIC_GOOGLE_ADSENSE || "",
    },
  },
  utterances: {
    enable: true,
    config: {
      repo: "johndzilva/notion-blog",
      "issue-term": "og:title",
      label: "💬 Utterances",
    },
  },
  cusdis: {
    enable: false,
    config: {
      host: "https://cusdis.com",
      appid: "", // Embed Code -> data-app-id value
    },
  },
  isProd: process.env.NODE_ENV === "production", // distinguish between development and production environment (ref: https://vercel.com/docs/environment-variables#system-environment-variables)
}
module.exports = CONFIG
