import { defineUserConfig } from "vuepress";
import { recoTheme } from "vuepress-theme-reco";

export default defineUserConfig({
    lang: "zh-CN",
    title: "kfg博客",
    description: "kfg的博客",
    theme: recoTheme({
        logo: "./avatar.jpg",
        author: "kfg",
        authorAvatar: "./avatar.jpg",
        // options
        autoSetCategory: true, // 自动设置分类
        autoAddCategoryToNavbar: true, // 自动将首页、分类和标签添加至头部导航条
        
    }),
});
