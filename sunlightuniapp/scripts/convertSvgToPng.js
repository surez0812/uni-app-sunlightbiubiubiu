const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const tabbarPath = path.join(__dirname, '../static/tabbar');

async function convertSvgToPng(svgPath, pngPath) {
  const svg = fs.readFileSync(svgPath);
  await sharp(svg)
    .resize(24, 24)
    .png()
    .toFile(pngPath);
}

async function convertAll() {
  const files = ['home', 'home-active', 'user', 'user-active'];
  
  for (const file of files) {
    await convertSvgToPng(
      path.join(tabbarPath, `${file}.svg`),
      path.join(tabbarPath, `${file}.png`)
    );
  }
}

convertAll().catch(console.error); 