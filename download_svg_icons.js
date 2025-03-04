const fs = require('fs');
const https = require('https');
const path = require('path');

// 图标URL
const icons = [
  {
    url: 'https://storage.googleapis.com/storage.catbird.ai/predictions/245359590076723200/dd64fa48-7167-4cf5-8115-337caff4f7e7.svg',
    filename: 'home.svg'
  },
  {
    url: 'https://storage.googleapis.com/storage.catbird.ai/predictions/245359701364199424/245d4aa8-dc79-4339-a094-540176252161.svg',
    filename: 'home-active.svg'
  },
  {
    url: 'https://storage.googleapis.com/storage.catbird.ai/predictions/245359811804422144/17c6bd21-2170-4b73-9e9a-b2a890ce5fab.svg',
    filename: 'user.svg'
  },
  {
    url: 'https://storage.googleapis.com/storage.catbird.ai/predictions/245359902598512640/43efdbd1-2295-456c-875c-6873be873adc.svg',
    filename: 'user-active.svg'
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
