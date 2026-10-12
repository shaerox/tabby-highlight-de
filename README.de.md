# tabby-highlight-de

Fork von [tabby-highlight](https://github.com/moemoechu/tabby-highlight) (MIT, moemoechu) mit deutscher und englischer Oberfläche.

Änderungen gegenüber dem Original:

- Deutsche Übersetzung der Einstellungen (Tabby-Sprache "Deutsch"), Englisch wie bisher
- Standard-Schlüsselwörter für Logs auf Deutsch und Englisch, als reguläre Ausdrücke mit Wortgrenzen (FATAL/KRITISCH, ERROR/FEHLER, WARN/WARNUNG, INFO/HINWEIS, DEBUG/TRACE, OK/ERFOLGREICH)
- Standard-Ersetzungen sind deaktiviert (im Original wurde ERROR durch einen chinesischen Text ersetzt)
- Beispielvorlagen und Code-Kommentare auf Englisch

## Installation (lokal)

1. Tabby schließen.
2. In Tabby das Original-Plugin "tabby-highlight" vorher deinstallieren, sonst laufen beide gleichzeitig.
3. Den Ordner `tabby-highlight-de` nach `%APPDATA%\tabby\plugins\node_modules\` kopieren.
4. Tabby starten. Die Einstellungen liegen weiterhin unter `highlightPlugin` in der config.yaml.

## Profil importieren

Bei einer bestehenden Installation bleiben die alten Schlüsselwörter erhalten. Das Profil `example_profiles/highlight_logs_de_en.json` lässt sich in den Einstellungen über "Import" einlesen.

## Selbst bauen

```
npm install --legacy-peer-deps
npx webpack
```
