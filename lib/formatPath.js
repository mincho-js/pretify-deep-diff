function formatPath(path) {
    return path ? path.join('.') : '';
}

module.exports = formatPath;