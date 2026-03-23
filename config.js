const CONFIG = {
    // 首页弹窗设置 - 针对手机端精简了文案
    notice: {
        show: true,
        title: "👋 欢迎光临",
        content: "你好！我是一名2025届毕业生。这里展示了我近期在逆向工程、自动化脚本以及全栈开发方面的实践成果。很高兴与你分享！",
        buttonText: "开启探索"
    },
    // 个人信息配置 (用于首屏)
    profile: {
        name: "我的作品集",
        subtitle: "专注底层探索与全栈开发",
        description: "热爱折腾，对未知技术充满好奇心。不仅能写业务代码，也热衷于深入系统底层开发与逆向分析。"
    },
    // 作品列表
    projects: [
        {
            title: "Ubuntu on OnePlus Ace 3",
            type: "image",
            cover: "https://images.unsplash.com/photo-1629654297299-c8506221ca97?auto=format&fit=crop&w=800&q=80", 
            src: "https://images.unsplash.com/photo-1629654297299-c8506221ca97?auto=format&fit=crop&w=1200&q=80",
            tags: ["Linux", "系统移植", "Rootfs"],
            description: "在移动设备上原生运行完整 Linux 发行版的探索项目。完成了设备的重新分区、Ubuntu rootfs 镜像的刷入与底层环境配置，实现了移动端与桌面级系统的跨界融合。"
        },
        {
            title: "全平台自动化解析引擎",
            type: "image",
            cover: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&q=80",
            src: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1200&q=80",
            tags: ["Python", "爬虫", "CI/CD"],
            description: "基于 Python 开发的高效解析工具。支持夸克等网盘链接的自动化密码破解与直链提取，并成功集成至 GitHub Actions，实现了云端全自动化工作流。"
        },
        {
            title: "美容沙龙全端解决方案",
            type: "image",
            cover: "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=800&q=80",
            src: "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1200&q=80",
            tags: ["Spring Boot", "微信小程序", "全栈"],
            description: "一套完整的商业级美容院线上系统。后端采用 Spring Boot 构建稳健的服务接口，前端使用微信小程序提供丝滑的用户体验，包含服务展示、在线预约等核心业务闭环。"
        }
    ]
};
