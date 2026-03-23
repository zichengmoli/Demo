// 所有的自定义配置都放在这里
const CONFIG = {
    // 刚进入网站的弹窗内容
    notice: {
        show: true,
        title: "欢迎来到我的作品集",
        content: "这里展示了我近期开发的程序作品，包含 Android 逆向、自动化工具等。点击卡片可查看详情。",
        buttonText: "开始浏览"
    },
    // 作品列表：type 支持 'image' 或 'video'
    projects: [
        {
            title: "自动化解析脚本",
            type: "image",
            cover: "https://picsum.photos/800/450?random=1", 
            src: "https://picsum.photos/1200/800?random=1",
            description: "这是一个基于 Python 的自动化工具，支持跨平台链接提取与 GitHub Actions 自动运行。"
        },
        {
            title: "OnePlus 系统优化展示",
            type: "video",
            cover: "https://picsum.photos/800/450?random=2",
            src: "https://www.w3schools.com/html/mov_bbb.mp4", // 替换为你的视频链接
            description: "针对 OnePlus Ace 3 开发的系统模块，深度优化了内核调度与 TEE 安全环境。"
        },
        {
            title: "美容院展示小程序",
            type: "image",
            cover: "https://picsum.photos/800/450?random=3",
            src: "https://picsum.photos/1200/800?random=3",
            description: "使用 Spring Boot 后端 + 微信小程序前端开发的商业演示项目。"
        }
    ]
};
