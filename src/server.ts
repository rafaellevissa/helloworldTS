import app from './app'

const PORT = 3000;
const HOST = '0.0.0.0';

if (process.env.PORTDOCKER){
    app.listen(+process.env.PORTDOCKER, HOST);
}else if(process.env.PORT){ //Heroku
    app.listen(process.env.PORT);
}else{ //local
    app.listen(PORT, HOST);
}