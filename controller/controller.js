
const moment = require("moment");

exports.getInfo = (req, res) => {
    res.status(200).json({
        success:true,
        email: "bowoto47@gmail.com",
        current_datetime: moment().utc().format(), // ISO 8601 UTC format
        github_url: "https://github.com/jerrysHacktive/HNG12 Stage 0 Backend Task - Public API",
    });
};
