const { spawn } = require('child_process');
const fs = require('fs');
const path = require('path');

const Utils = {
    getApiServer() {
        return new Promise((resolve, reject) => {
            // check exist
            const exist = fs.existsSync(path.resolve(__dirname, '../server/app.js'));
            if(exist) {
                resolve(true);
                return;
            }

            const gitPrecess = spawn('git', ['clone', 'https://github.com/Binaryify/NeteaseCloudMusicApi.git', 'server']);
            gitPrecess.stdout.on('data', (data) => {
                console.log(`${data}`);
            });
            gitPrecess.stderr.on('data', (data) => {
                console.log(`stdout: ${data}`);
            });
            gitPrecess.on('close', (code) => {
                code ?  reject(false): resolve(true);
            });
        });
    },
    getConfig() {
        return {
            apiPort: 8211,
        }
    }
}

module.exports = Utils;