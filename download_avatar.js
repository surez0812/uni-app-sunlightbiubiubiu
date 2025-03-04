const https = require('https');
const fs = require('fs');
const path = require('path');

// 头像图片URL
const avatarUrl = 'https://storage.googleapis.com/storage.catbird.ai/predictions/245267088044855296/b04cb417-9a97-4550-8ce5-7f13a6f7db44.svg';

// 目标保存路径
const targetDir = path.join(__dirname, 'sunlightuniapp/static/images');
const targetPath = path.join(targetDir, 'avatar.svg');

// 确保目录存在
if (!fs.existsSync(targetDir)) {
  fs.mkdirSync(targetDir, { recursive: true });
}

// 下载图片
https.get(avatarUrl, (response) => {
  if (response.statusCode !== 200) {
    console.error(`Failed to download image: ${response.statusCode}`);
    return;
  }

  const fileStream = fs.createWriteStream(targetPath);
  response.pipe(fileStream);

  fileStream.on('finish', () => {
    fileStream.close();
    console.log(`Avatar downloaded and saved to: ${targetPath}`);
  });
}).on('error', (err) => {
  console.error(`Error downloading avatar: ${err.message}`);
});
