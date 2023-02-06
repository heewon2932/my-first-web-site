const express = require('express');
const app = express();

app.listen(8080, function(){
    console.log('listening on 8080')
});

//누군가가 /pet 으로 방문을하면..
//pet관련된 안내문을 띄워주자

app.get('/pet', function(요청, 응답){
    응답.send('반갑습니다다람쥐');
});
  
app.get('/sex', function(요청, 응답){
    응답.send('반갑습니sl다다람쥐');
});

app.get('/', function(요청, 응답){
    응답.sendFile(__dirname + '/index.html');
});