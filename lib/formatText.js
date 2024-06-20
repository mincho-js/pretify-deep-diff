function formatText(template, variables) {
    return template.replace(/{(\w+)}/g, (_, key) => variables[key] || '');
}

module.exports = formatText;