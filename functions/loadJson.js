const fs = require('fs');
module.exports.loadJson = function (filename) {
    const data = fs.readFileSync(`./assets/data/${filename}.json`, {encoding:'utf8', flag:'r'})
    if (data == "") {
        return "There was an error."
    }
    parsed = JSON.parse(data)

    return parsed
};

