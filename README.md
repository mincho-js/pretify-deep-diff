# pretify-deep-diff

A utility to prettify the results of `deep-diff` with emojis and localization support.

## Installation

To install the package, use npm:

```bash
npm install pretify-deep-diff
```

## Usage

Here's an example of how to use `pretify-deep-diff`:

```javascript
const diff = require("deep-diff");
const pretifyDeepDiff = require("pretify-deep-diff");

const lhs = {
  name: "John",
  age: 30,
  pets: ["dog", "cat"],
  address: {
    city: "Chicago",
    street: "Main St",
  },
};

const rhs = {
  name: "Jane",
  age: 31,
  pets: ["dog", "parrot"],
  city: "New York",
};

const changes = diff(lhs, rhs);

console.log(pretifyDeepDiff(changes, { locale: "ru" }));
```

### Output

```text
 Добавлено:
➕ Добавлено: city = "New York"
❌ Удалено:
❌ Удалено: address
✏️ Изменено:
✏️ Изменено: name с "John" на "Jane"
✏️ Изменено: age с 30 на 31
✏️ Изменено: pets.1 с "cat" на "parrot"
```

## Options

- `locale`: Specify the locale (`en` or `ru`). Default is `en`.
- `customTexts`: An object to customize text templates.

## Localization

The library supports localization through JSON files in the `locales` directory.
