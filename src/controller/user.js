const constant = require("../constants/constants");
const user_service = require("../service/user")

const get = async (req, res) => {
    try {
        const result = await user_service.get();
        if (result) {
            res.status(200).json({ message: constant.FETCH_USER, count: result.length, note: result, error_code: 0 })
        } else { res.status(500).json({ message: constant.ERROR, }) }
    } catch (err) { res.status(500).json({ message: err.message }) }
}

module.exports={get}