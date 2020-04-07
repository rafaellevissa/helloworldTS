import app from './app'

const PORT = 3000;
const HOST = '0.0.0.0';

if (process.env.PORTDOCKER){
    app.listen(+process.env.PORTDOCKER, HOST);
}else if(process.env.PORT){
    app.listen(process.env.PORT);
}else{
    app.listen(PORT, HOST);
}