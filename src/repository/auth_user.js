const notes = require("../model/auth_user");

const get_user = async (data) => await notes.find(data) //user data get
    
const create_user = async (data) => await notes.create(data);

module.exports = {
    get_user,
    create_user
};
