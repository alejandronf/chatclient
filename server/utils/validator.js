var isRealString = (str) => {
    console.log('validating str', str);
    return (typeof str === 'string' && str.trim().length > 0);
}

module.exports = {isRealString};