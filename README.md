# 英语48音标真人点读卡（GitHub Pages / PWA）

这是一个适合 iPhone Safari 的 48 音标点读网页。

## 功能
- 48 个音标：20 元音 + 28 辅音
- 汉音辅助、口型提示、例词
- 真人 MP3 发音
- “下载离线音频”按钮
- 缓存 48/48 后，断网/飞行模式也能使用
- 可添加到 iPhone 主屏幕，像 App 一样打开

## 发布到 GitHub Pages
1. 新建一个 GitHub 仓库，例如 `english-ipa-48`
2. 把本项目所有文件上传到仓库根目录
3. Settings → Pages → Build and deployment → Source 选择 **GitHub Actions**
4. 推送到 `main` 后，Actions 会自动发布
5. 打开 Pages 地址

## iPhone 离线使用
1. Safari 打开 Pages 地址
2. 点“下载离线音频”
3. 等到显示“已缓存 48/48”
4. 分享 → 添加到主屏幕
5. 开飞行模式测试

## 音频来源
页面引用：
`resetsix/english-ipa` 项目中的音频路径（原项目说明音频参考自 boommanpro/phonetic_symbol_web / yyybabc）。

本仓库不重复上传第三方音频文件；离线缓存由用户浏览器在本机完成。


## V2 稳定性修复
- 已针对 iPhone / Safari 的 MP3 `Range` 分段请求做兼容处理。
- 离线缓存会逐条校验，只有实际缓存成功才计入 48/48。
- Service Worker 会清理旧版缓存，避免旧缓存干扰。
- GitHub Pages 使用 HTTPS，满足 Service Worker / PWA 要求。

## 建议验收
发布后按以下顺序测试：
1. 联网打开页面。
2. 点“下载离线音频”，必须显示 48/48。
3. 随机点 5 个音标确认有声音。
4. 打开飞行模式。
5. 彻底关闭并重新打开主屏幕 App。
6. 再随机点 5 个音标；仍能播放才算离线验收通过。
