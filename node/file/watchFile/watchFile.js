var chokidar = require('chokidar');
let Client = require('ssh2-sftp-client');
var localBasePath = '/Users/xingweiz/desk/workspace/front-end/';
var remoteBasePath = '/opt/www/foundersc/kline-fzzq';
var watchPath = 'kline-fzzq'
var remoteReplace = 'kline-fzzq'



var watchList = [
    new RegExp(watchPath + '/dist/'),
    new RegExp(watchPath + '/html/'),
    new RegExp(watchPath + '/html-blocks/')
]

var watcher = chokidar.watch(watchPath, {
  ignored: /[\/\\]\./, persistent: true
});
 
var log = console.log.bind(console);



watcher.on('change', function(path) {
    for(let i = 0; i < watchList.length; i++) {
        const element = watchList[i];
        if (element.test(path)) {
            var remoteReplacePath = remoteBasePath + path.replace(new RegExp(remoteReplace), '')
            log('File', path, 'has been changed', '改了改了改了');
            log(localBasePath + path, remoteReplacePath, '????')
            put(localBasePath + path, remoteReplacePath)
        }
    }
})

function put(localPath,romotePath){
    let sftp = new Client();
    sftp.connect({
        host: '',
        port: '22',
        username: '',
        password: ''
    }).then(() => {
        return sftp.put(localPath, romotePath, [false], ['utf8']);
    }).then(() =>{
        console.log("上传完成");
    }).catch((err) => {
        console.log(err, 'catch error');
    });
}