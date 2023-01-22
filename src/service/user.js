require("dotenv").config();
const user_repository = require('../repository/user')

const get = async () => {
    const meeting_note = user_repository.get_by_name()
    return meeting_note
}

module.exports = {get}