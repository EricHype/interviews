module.exports = {

    //AUTHENTICATION
    'secret': process.env.AUTH_SECRET || 'P2p$only!!!',
    userRoles: ['user', 'support', 'admin'],

    
    //DATABASE
    mongoUri : process.env.MONGODB_URI || 'mongodb://localhost:27017/prosper',
};