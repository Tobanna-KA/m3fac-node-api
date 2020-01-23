let settings_db = require('../models');

module.exports.settings = {

    FIRST_USE: async () => {
        try{
            console.log('first_use')
            let first_use =  await settings_db.findOne({name: 'first_use'});
            console.log(first_use)
            if(!first_use || (first_use && !first_use.value)) return  {
                error: {message: 'first time use, please create super admin account'}
            };

            return { error: false};

        } catch (e) {
            console.log(e)
        }

    }
};