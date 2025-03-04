const fs = require('fs');
const path = require('path');
const { exec } = require('child_process');

// 图标路径
const tabbarDir = path.join(__dirname, 'sunlightuniapp', 'static', 'tabbar');
const svgFiles = [
  'home.svg',
  'home-active.svg',
  'user.svg',
  'user-active.svg'
];

// 确保目录存在
if (!fs.existsSync(tabbarDir)) {
  console.error(`目录不存在: ${tabbarDir}`);
  process.exit(1);
}

// 使用 convert 命令将 SVG 转换为 PNG
svgFiles.forEach(svgFile => {
  const svgPath = path.join(tabbarDir, svgFile);
  const pngFile = svgFile.replace('.svg', '.png');
  const pngPath = path.join(tabbarDir, pngFile);
  
  // 使用 ImageMagick 的 convert 命令进行转换
  // 设置大小为 24x24 像素，确保图标足够小
  const command = `convert -background none -density 300 -resize 24x24 ${svgPath} ${pngPath}`;
  
  console.log(`正在转换: ${svgFile} -> ${pngFile}`);
  exec(command, (error, stdout, stderr) => {
    if (error) {
      console.error(`转换失败: ${svgFile}`, error);
      return;
    }
    console.log(`转换成功: ${pngFile}`);
  });
});
