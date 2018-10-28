module.exports = function make(...args) {
    let arrArgs = args.join(' ');

    function rdc(...args) {
        if (typeof args[0] == 'function') {
            return arrArgs.split(' ').map(n => +n).reduce(args[0]);
        } else {
            arrArgs += ' ' + args.join(' ');
            return rdc;
        }
    }

    return rdc;
}

