module.exports = function(source) {
    return source.replace(/name/g, this.query.name);
}