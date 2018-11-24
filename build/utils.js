const { spawn } = require('child_process');
const fs = require('fs');
const path = require('path');

const Utils = {
    getApiServer() {
        return new Promise((resolve, reject) => {
            // check exist
            const exist = fs.existsSync(path.resolve(__dirname, '../server/app.js'));
            if(exist) {
                resolve();
                return;
            }

            const gitPrecess = spawn('git', ['clone', 'https://github.com/Binaryify/NeteaseCloudMusicApi.git', 'server']);
            gitPrecess.stdout.on('data', (data) => {
                console.log(`stdout: ${data}`);
            });
            gitPrecess.stderr.on('data', (data) => {
                console.log(`stdout: ${data}`);
            });
            gitPrecess.on('close', (code) => {
                if (!code) resolve();
            });
        });
    }
}

module.exports = Utils;