const CONFIG = {
  // 首页弹窗设置 - 针对手机端精简了文案
  notice: {
    show: true,
    title: "欢迎光临",
    content:
      "你好！我是一名2025届毕业生。这里展示了我近期的一些小玩具作品。很高兴与你分享！",
    buttonText: "开启探索",
  },
  // 个人信息配置 (用于首屏)
  profile: {
    name: "我的小工具",
    subtitle: "热爱探索和钻研",
    description:
      "喜欢折腾，对未知技术充满好奇心。不仅能写业务代码，也热衷于深入系统底层开发与逆向分析。",
  },
  // 作品列表
  projects: [
    {
      title: "文献Agent助手",
      type: "image",
      cover: "./ai/1.jpg",
      src: "",
      tags: ["Agent", "AI", "Tools", "React"],
      media: [
        { type: "image", src: "./ai/1.jpg" },
        { type: "image", src: "./ai/2.jpg" },
      ],
      description: "知网文献查找助手，可以通过自然语言对话实现知网文献查找。",
    },
    {
      title: "网盘解析",
      type: "image",
      cover: "./ai/4.png",
      src: "",
      tags: ["Python", "套壳", "逆向分析", "React"],
      media: [
        { type: "image", src: "./ai/4.png" },
        { type: "image", src: "./ai/3.jpg" },
        { type: "image", src: "./ai/16.png" },
        { type: "video", src: "./ai/5.mp4" },
      ],
      description:
        "基于 Python 开发的网盘解析工具。支持夸克等网盘链接的自动化密码破解与直链提取，GitHub Actions定时尝试破解密码并更新远程文档，前端解析文档内容后处理。",
    },
    {
      title: "Python抢票脚本(演唱会)",
      type: "image",
      cover: "./ai/7.jpg",
      src: "",
      tags: ["Python", "自动化", "脚本"],
      media: [
        { type: "image", src: "./ai/7.jpg" },
        { type: "image", src: "./ai/6.jpg" },
        { type: "video", src: "./ai/8.mp4" },
      ],
      description:
        "Python脚本浏览器自动化，数字验证码通过ddddocr识别，滑块验证部分通过对itp（NOL WORLD）售票网站逆向分析，注入js实现百分百快速验证。",
    },
    {
      title: "微信小程序（AI推荐服务）",
      type: "image",
      cover: "./ai/9.jpg",
      src: "",
      tags: ["AI", "Spring Boot", "微信小程序", "全栈"],
      media: [
        { type: "image", src: "./ai/9.jpg" },
        { type: "image", src: "./ai/10.jpg" },
        { type: "image", src: "./ai/11.jpg" },
      ],
      description:
        "后端采用 Spring Boot 构建服务接口，前端使用微信小程序提供丝滑的用户体验，包含服务展示、在线预约等核心业务闭环，含管理端。",
    },
    {
      title: "系统通知监听App",
      type: "image",
      cover: "./ai/14.jpg",
      src: "",
      tags: ["Kotlin", "APP"],
      media: [
        { type: "image", src: "./ai/14.jpg" },
        { type: "image", src: "./ai/15.jpg" },
        { type: "image", src: "./ai/16.jpg" },
      ],
      description: "一款通过监听安卓系统消息通知实现某些自动化需求的APP",
    },
    {
      title: "局域网互传助手",
      type: "image",
      cover: "./ai/12.png",
      src: "",
      tags: ["P2P", "文件助手", "前端"],
      media: [
        { type: "image", src: "./ai/12.png" },
        { type: "image", src: "./ai/13.jpg" },
      ],
      description: "一个支持多文件同时向多人发送的局域网互传程序",
    },
  ],
};
