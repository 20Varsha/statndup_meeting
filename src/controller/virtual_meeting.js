const constant = require("../constants/constants");
const virtual_meeting_service = require("../service/virtual_meeting")

const create = async (req, res) => {
    console.log("response");

    console.log("res", req);
    try {
        const result = await virtual_meeting_service.create(req.body)
        if (result) { res.status(200).json({ message: constant.NOTE_CREATED, result: result }) }
        else { res.status(500).json({ message: err.message }) }
    } catch (err) { res.status(500).json({ message: err.message }) }
}

const get = async (req, res) => {
    try {
        const result = await virtual_meeting_service.get();
        if (result) { res.status(200).json({ message: constant.FETCH_NOTE, count: result.length, data: result, error_code: 0 }) }
        else { res.status(500).json({ message: constant.ERROR, }) }
    } catch (err) { res.status(500).json({ message: err.message }) }
}

const remove = async (req, res) => {
    try {
        const result = await virtual_meeting_service.remove(req.params.id);
        if (result.error_code == 1001) return res.status(404).json({ message: constant.DATA_MISSING })
        res.status(200).json({ message: constant.NOTE_DELETE, result: result });
    } catch (err) { res.status(500).json({ message: err.message }) }
}

const update = async (req, res) => {
    try {
        const result = await virtual_meeting_service.update(req.params.id, req.body);
        if (result) {
            if (result.error_code === 1001) return res.status(404).json({ message: constant.DATA_MISSING })
            res.json({ message: constant.NOTE_UPDATED, result: result })
        }
    } catch (err) { res.status(500).json({ message: err.message }) }
}

module.exports = {
    create,
    get,
    remove,
    update
}
