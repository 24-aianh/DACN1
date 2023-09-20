
const helpers = require('../../../until/helper');

async function test(req, res) {
    try {
        const query = "SELECT * from Account";
        var a = await helpers.query(query);
        res.render("home", {result: a});
    }catch(err) {
        console.log(err);
    }
}

module.exports = {
    test
}