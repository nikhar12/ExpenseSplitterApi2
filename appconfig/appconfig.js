let appconfig = {};

appconfig.db = "mongodb://127.0.0.1:27017/test1";
appconfig.port = 3000;


module.exports = 
{
    db: appconfig.db,
    port: appconfig.port
}