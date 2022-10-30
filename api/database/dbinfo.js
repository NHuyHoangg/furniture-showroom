const mssql = require('mssql');

const SQL_DRIVER = 'SQL Server'; 
const SQL_SERVER = 'localhost'; 
const SQL_DATABASE = 'furniture_showroom'; 
const SQL_UID = 'tauhe'; 
const SQL_PWD = '123';

const config = {
    server: SQL_SERVER,
    database: SQL_DATABASE,
    user: SQL_UID,
    password: SQL_PWD,
    options: {
        encrypt: false,
        // trustedConnection: true,
        // trustServerCertificate: true,
        enableArithAbort: false,
        // instancename: 'SQLEXPRESS'
    },
    connectionTimeout: 300000,
    requestTimeout: 300000,
    pool: {
        idleTimeoutMillis: 300000,
        max: 100,
    }
};

const pool = new mssql.ConnectionPool(config);

module.exports = {
    pool
}
