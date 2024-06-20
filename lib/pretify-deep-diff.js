const diff = require('deep-diff');
const formatText = require('./formatText');
const formatPath = require('./formatPath');
const formatGroupedChanges = require('./formatGroupedChanges');
const enLocale = require('../locales/en.json');
const ruLocale = require('../locales/ru.json');

const locales = {
    en: enLocale,
    ru: ruLocale
};

function pretifyDeepDiff(changes, options = {}) {
    const locale = locales[options.locale] || locales['en'];
    const customTexts = options.customTexts || {};

    if (!changes || !Array.isArray(changes)) {
        return 'No changes detected.';
    }

    const groupedChanges = {
        added: [],
        deleted: [],
        edited: [],
        arrayChange: []
    };

    changes.forEach(change => {
        switch (change.kind) {
            case 'N':
                groupedChanges.added.push(formatText(customTexts.added || locale.added, {
                    path: formatPath(change.path),
                    value: JSON.stringify(change.rhs)
                }));
                break;
            case 'D':
                groupedChanges.deleted.push(formatText(customTexts.deleted || locale.deleted, {
                    path: formatPath(change.path)
                }));
                break;
            case 'E':
                groupedChanges.edited.push(formatText(customTexts.edited || locale.edited, {
                    path: formatPath(change.path),
                    oldValue: JSON.stringify(change.lhs),
                    newValue: JSON.stringify(change.rhs)
                }));
                break;
            case 'A':
                const arrayChangeText = pretifyDeepDiff([change.item], options);
                groupedChanges.arrayChange.push(formatText(customTexts.arrayChange || locale.arrayChange, {
                    path: formatPath(change.path),
                    index: change.index,
                    item: arrayChangeText
                }));
                break;
            default:
                break;
        }
    });

    return formatGroupedChanges(groupedChanges, locale, customTexts);
}

module.exports = pretifyDeepDiff;
