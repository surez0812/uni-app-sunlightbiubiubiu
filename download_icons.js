const fs = require('fs');
const https = require('https');
const path = require('path');

// 图标URL
const icons = [
  {
    url: 'https://storage.googleapis.com/storage.catbird.ai/predictions/245356002474602496/9286aa9f-3968-4d73-91f6-0d4f8a98d051.png',
    filename: 'home.png'
  },
  {
    url: 'https://storage.googleapis.com/storage.catbird.ai/predictions/245356103016271872/1ed6b274-1891-497e-9331-0c2253d9a0b5.png',
    filename: 'home-active.png'
  },
  {
    url: 'https://storage.googleapis.com/storage.catbird.ai/predictions/245356190375239680/19a8f5c4-36aa-435f-b001-4d273c1ee2d7.png',
    filename: 'user.png'
  },
  {
    url: 'https://storage.googleapis.com/storage.catbird.ai/predictions/245356254728445952/2e8e99f1-e242-4740-aa39-59c7eaf78dc6.png',
    filename: 'user-active.png'
  }
];

// 目标目录
const targetDir = path.join(__dirname, 'sunlightuniapp', 'static', 'tabbar');

// 确保目录存在
if (!fs.existsSync(targetDir)) {
  fs.mkdirSync(targetDir, { recursive: true });
  console.log(`创建目录: ${targetDir}`);
}

// 下载图标
icons.forEach(icon => {
  const targetPath = path.join(targetDir, icon.filename);
  
  https.get(icon.url, (response) => {
    if (response.statusCode !== 200) {
      console.error(`下载失败: ${icon.url}, 状态码: ${response.statusCode}`);
      return;
    }
    
    const fileStream = fs.createWriteStream(targetPath);
    response.pipe(fileStream);
    
    fileStream.on('finish', () => {
      fileStream.close();
      console.log(`下载成功: ${icon.filename}`);
    });
  }).on('error', (err) => {
    console.error(`下载出错: ${icon.url}`, err.message);
  });
});
