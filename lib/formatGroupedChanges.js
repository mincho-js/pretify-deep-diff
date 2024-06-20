const formatGroupedChanges = (groupedChanges, locale, customTexts) => {
    let result = '';
    if (groupedChanges.added.length) {
        result += `${customTexts.addedTitle || locale.addedTitle}\n` + groupedChanges.added.join('\n') + '\n\n';
    }
    if (groupedChanges.deleted.length) {
        result += `${customTexts.deletedTitle || locale.deletedTitle}\n` + groupedChanges.deleted.join('\n') + '\n\n';
    }
    if (groupedChanges.edited.length) {
        result += `${customTexts.editedTitle || locale.editedTitle}\n` + groupedChanges.edited.join('\n') + '\n\n';
    }
    if (groupedChanges.arrayChange.length) {
        result += `${customTexts.arrayChangeTitle || locale.arrayChangeTitle}\n` + groupedChanges.arrayChange.join('\n') + '\n\n';
    }
    
    return result.trim();
}

module.exports = formatGroupedChanges;