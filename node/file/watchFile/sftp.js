let Client = require('ssh2-sftp-client');

function put(localPath,romotePath){
    let sftp = new Client();
    sftp.connect({
        host: '120.76.25.189',
        port: '22',
        username: 'root',
        password: 'Moguce2017'
    }).then(() => {
        return sftp.put(localPath, romotePath, [false], ['utf8']);
    }).then(() =>{
        console.log("上传完成");
    }).catch((err) => {
        console.log(err, 'catch error');
    });
}

put('/Users/xingweiz/desk/code/study/node/file/watchFile/test/test.txt', '/opt/www/foundersc/kline-fzzq/test.txt')