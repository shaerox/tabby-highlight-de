# tabby-highlight-de

Fork von [tabby-highlight](https://github.com/moemoechu/tabby-highlight) (MIT, moemoechu) mit deutscher und englischer Oberfläche.

Änderungen gegenüber dem Original:

- Deutsche Übersetzung der Einstellungen (Tabby-Sprache "Deutsch"), Englisch wie bisher
- Standard-Schlüsselwörter: ERROR, WARN, INFO, FEHLER, WARNUNG statt der chinesischen Begriffe
- Standard-Ersetzungen sind deaktiviert (im Original wurde ERROR durch einen chinesischen Text ersetzt)
- Beispielvorlagen und Code-Kommentare auf Englisch

## Installation (lokal)

1. Tabby schließen.
2. In Tabby das Original-Plugin "tabby-highlight" vorher deinstallieren, sonst laufen beide gleichzeitig.
3. Den Ordner `tabby-highlight-de` nach `%APPDATA%\tabby\plugins\node_modules\` kopieren.
4. Tabby starten. Die Einstellungen liegen weiterhin unter `highlightPlugin` in der config.yaml.

## Selbst bauen

```
npm install --legacy-peer-deps
npx webpack
```
