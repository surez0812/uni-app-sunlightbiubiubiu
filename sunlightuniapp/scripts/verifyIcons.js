const fs = require('fs');
const path = require('path');

const tabbarPath = path.join(__dirname, '../static/tabbar');
const requiredFiles = [
  'home.png',
  'home-active.png',
  'user.png',
  'user-active.png'
];

requiredFiles.forEach(file => {
  const filePath = path.join(tabbarPath, file);
  if (fs.existsSync(filePath)) {
    console.log(`✅ ${file} exists`);
  } else {
    console.error(`❌ ${file} not found`);
  }
}); 