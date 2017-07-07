const path = require('path');

module.exports = {
    appHtml: path.resolve(__dirname, '../public/index.html'),
    appJs: path.join(__dirname, '../src/index.tsx'),
    distFolder: path.join(__dirname, '../dist'),
    srcFolder: path.join(__dirname, '../src')
}
