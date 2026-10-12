type HighlightPluginTranslations = Record<string, string>;

export const translations: [string, HighlightPluginTranslations][] = [
  [
    "zh-CN",
    {
      "Highlight": "高亮",
      "Enable highlight": "启用高亮",
      "Highlight master switch": "高亮总开关",
      "Change any setting of highlight only apply in new sessions.":
        "任何对高亮设置的修改只会应用到新会话。",
      "Change any setting of replace only apply in new sessions.":
        "任何对替换设置的修改只会应用到新会话。",
      "Highlight applied!": "高亮已应用！",
      "ON": "开",
      "Keyword": "关键字",
      "Foreground Color": "前景色",
      "Background Color": "背景色",
      "DEL": "删除",
      "RegExp": "正则",
      "Case sensitive": "区分大小写",
      "[Highlight] Something wrong when creating RegExp, please check highlight settings":
        "[高亮] 创建正则表达式时出现错误，请检查高亮配置",
      "The following regexp is not valid:\n": "下面的正则表达式有问题：\n",
      "Everything looks good.": "一切正常。",
      "Style": "样式",
      "Bold": "粗体",
      "Italic": "斜体",
      "Underline": "下划线",
      "Dim": "变暗",
      "Case": "大小写",
      "Import": "导入",
      "Drag the ON button may reorder the keyword.": "拖动开关可以对关键字排序。",
      "Drag the ON button may reorder the pattern.": "拖动开关可以对模式排序。",
      "Profile name": "配置名称",
      "Active tab is the global highlight profile.": "活动标签页是全局生效的高亮配置。",
      "Double click tab can change profile name.": "双击标签页头可以更改配置名称。",
      "Keyword on top get high priority.": "最上面的关键字优先级最高。",
      "?": "？",
      "Enable per session profile": "启用单会话高亮配置",
      "Enable per session group profile": "启用单会话分组高亮配置",
      "Enable per session type profile": "启用单会话类型高亮配置",
      "Enable global profile": "启用全局高亮配置",
      "No session selected": "未选择会话",
      "Disable Highlight": "禁用高亮",
      "Global profile is the active tab below": "全局配置是下方激活的标签页",
      "Profile": "配置",
      "Session": "会话",
      "Session Group": "会话分组",
      "Session Type": "会话类型",
      "No session group selected": "未选择会话分组",
      "No session type selected": "未选择会话类型",
      "The profile selection order is session > group > type > global.":
        "高亮配置选择顺序是：会话 > 会话分组 > 会话类型 > 全局",
      "Enable replace": "启用替换",
      "Replace master switch": "替换总开关",
      "Search Pattern": "查找模式",
      "Replace Pattern": "替换模式",
      "[Highlight] Can not change session profile due to per session profile not enabled":
        "[高亮] 无法在未启用单会话配置的情况下修改会话配置",
      "Replacement processed from top to end.": "替换是从上往下处理的。",
      'If you want to add a new line, add "\\n" to the replace pattern.':
        "如果想要添加新行，在替换模式中添加\\n即可。",
      "Disable replace in alternate screen": "在备用屏幕中禁用替换",
      "Disable highlight in alternate screen": "在备用屏幕中禁用高亮",
      "For example: vi/vim": "例如：vi/vim",
      "Extra settings": "额外设置",
      "Match group": "匹配组",
      "Styles": "样式",
      "Remark": "备注",
      "Use number 0-15 for ANSI color(themed), 16-256 for ANSI 256 color, #RRGGBB for RGB color (i.e. #ffd0f2), or color name(i.e. orange)":
        "使用数字0-15表示ANSI色彩（主题控制），数字16-256表示ANSI 256色，#RRGGBB表示RGB色彩（如#ffd0f2），或者使用色彩名（如orange）",
      "Single": "单",
      "Double": "双",
      "Curly": "波浪",
      "Dotted": "点阵",
      "Dashed": "短划线",
      "Inverse": "反色",
      "Invisible": "不可见",
      "DEBUG mode": "调试模式",
      "Enable debug mode, this may decrease performance, use with caution":
        "启用调试模式，这会降低性能，请小心使用",
      "Debug terminal output": "调试终端输出",
      "Print terminal raw output to devtools, use with caution":
        "将终端原始内容输出到开发人员工具，请小心使用",
      "Debug plugin output": "调试插件输出",
      "Print plugin proceeded output to devtools, use with caution":
        "将插件处理后的内容输出到开发人员工具，请小心使用",
      "Format": "格式化",
      "Edit Keyword": "编辑关键字",
      "[Highlight] Something wrong when creating JS Function, please check highlight settings":
        "[高亮] 创建JS函数时出现错误，请检查高亮配置",
      "[Highlight] Something wrong when execute JS Function, please check highlight settings":
        "[高亮] 执行JS函数时出现错误，请检查高亮配置",
      "Click expand to edit.": "点击展开按钮编辑。",
      "Edit JavaScript": "编辑代码",
      "Edit Text": "编辑文本",
      "Regular Expression": "正则表达式",
      "Expand edit": "展开编辑",
      "[Deleted Session]": "【已删除的会话】",
      "[Deleted Group]": "【已删除的分组】",
      "[Unknown Type]": "【未知的类型】",
      "Select template": "选择模板",
      "Apply Template": "应用模板",
      "[Highlight]Return pos array": "【高亮】返回位置数组",
      "[Highlight]Return substring": "【高亮】返回子字符串",
      "[Highlight]Return regexp string": "【高亮】返回正则字符串",
      "[Highlight]Return regexp": "【高亮】返回正则对象",
      "[Replace]Return replaced string": "【替换】返回替换的字符串",
      "[Replace]Return string array": "【替换】返回字符串数组",
      "[Replace]Return regexp string array": "【替换】返回正则字符串数组",
      "[Replace]Return regexp and string": "【替换】返回正则和字符串",
    },
  ],
  [
    "de-DE",
    {
      "Highlight":
        "Hervorhebung",
      "Enable highlight":
        "Hervorhebung aktivieren",
      "Highlight master switch":
        "Hauptschalter für die Hervorhebung",
      "Change any setting of highlight only apply in new sessions.":
        "Änderungen an der Hervorhebung gelten nur für neue Sitzungen.",
      "Change any setting of replace only apply in new sessions.":
        "Änderungen an der Ersetzung gelten nur für neue Sitzungen.",
      "Highlight applied!":
        "Hervorhebung angewendet!",
      "ON":
        "AN",
      "Keyword":
        "Schlüsselwort",
      "Foreground Color":
        "Textfarbe",
      "Background Color":
        "Hintergrundfarbe",
      "DEL":
        "LÖSCHEN",
      "RegExp":
        "RegEx",
      "Case sensitive":
        "Groß-/Kleinschreibung beachten",
      "[Highlight] Something wrong when creating RegExp, please check highlight settings":
        "[Hervorhebung] Fehler beim Erstellen eines regulären Ausdrucks, bitte die Einstellungen prüfen",
      "The following regexp is not valid:\n":
        "Folgender regulärer Ausdruck ist ungültig:\n",
      "Everything looks good.":
        "Alles in Ordnung.",
      "Style":
        "Stil",
      "Bold":
        "Fett",
      "Italic":
        "Kursiv",
      "Underline":
        "Unterstrichen",
      "Dim":
        "Abgedunkelt",
      "Case":
        "Groß/Klein",
      "Import":
        "Importieren",
      "Drag the ON button may reorder the keyword.":
        "Über den AN-Schalter lassen sich die Schlüsselwörter per Drag & Drop umsortieren.",
      "Drag the ON button may reorder the pattern.":
        "Über den AN-Schalter lassen sich die Muster per Drag & Drop umsortieren.",
      "Profile name":
        "Profilname",
      "Active tab is the global highlight profile.":
        "Der aktive Reiter ist das globale Profil.",
      "Double click tab can change profile name.":
        "Doppelklick auf einen Reiter benennt das Profil um.",
      "Keyword on top get high priority.":
        "Das oberste Schlüsselwort hat die höchste Priorität.",
      "?":
        "?",
      "Enable per session profile":
        "Profil pro Verbindung aktivieren",
      "Enable per session group profile":
        "Profil pro Gruppe aktivieren",
      "Enable per session type profile":
        "Profil pro Verbindungstyp aktivieren",
      "Enable global profile":
        "Globales Profil aktivieren",
      "No session selected":
        "Keine Verbindung ausgewählt",
      "Disable Highlight":
        "Hervorhebung deaktivieren",
      "Global profile is the active tab below":
        "Das globale Profil ist der aktive Reiter unten",
      "Profile":
        "Profil",
      "Session":
        "Verbindung",
      "Session Group":
        "Gruppe",
      "Session Type":
        "Verbindungstyp",
      "No session group selected":
        "Keine Gruppe ausgewählt",
      "No session type selected":
        "Kein Verbindungstyp ausgewählt",
      "The profile selection order is session > group > type > global.":
        "Reihenfolge der Profilauswahl: Verbindung > Gruppe > Typ > Global.",
      "Enable replace":
        "Ersetzen aktivieren",
      "Replace master switch":
        "Hauptschalter für das Ersetzen",
      "Search Pattern":
        "Suchmuster",
      "Replace Pattern":
        "Ersetzungsmuster",
      "[Highlight] Can not change session profile due to per session profile not enabled":
        "[Hervorhebung] Profil kann nicht geändert werden, weil Profile pro Verbindung nicht aktiviert sind",
      "Replacement processed from top to end.":
        "Ersetzungen werden von oben nach unten abgearbeitet.",
      'If you want to add a new line, add "\\n" to the replace pattern.':
        'Für einen Zeilenumbruch "\\n" im Ersetzungsmuster verwenden.',
      "Disable replace in alternate screen":
        "Ersetzen im alternativen Bildschirm deaktivieren",
      "Disable highlight in alternate screen":
        "Hervorhebung im alternativen Bildschirm deaktivieren",
      "For example: vi/vim":
        "Zum Beispiel: vi/vim",
      "Extra settings":
        "Weitere Einstellungen",
      "Match group":
        "Treffergruppe",
      "Styles":
        "Stile",
      "Remark":
        "Bemerkung",
      "Use number 0-15 for ANSI color(themed), 16-256 for ANSI 256 color, #RRGGBB for RGB color (i.e. #ffd0f2), or color name(i.e. orange)":
        "Zahl 0-15 für ANSI-Farben (vom Farbschema), 16-256 für ANSI-256-Farben, #RRGGBB für RGB-Farben (z.B. #ffd0f2) oder einen Farbnamen (z.B. orange)",
      "Single":
        "Einfach",
      "Double":
        "Doppelt",
      "Curly":
        "Gewellt",
      "Dotted":
        "Gepunktet",
      "Dashed":
        "Gestrichelt",
      "Inverse":
        "Invertiert",
      "Invisible":
        "Unsichtbar",
      "DEBUG mode":
        "DEBUG-Modus",
      "Enable debug mode, this may decrease performance, use with caution":
        "Debug-Modus aktivieren, kann die Leistung verringern, mit Vorsicht verwenden",
      "Debug terminal output":
        "Terminalausgabe debuggen",
      "Print terminal raw output to devtools, use with caution":
        "Rohe Terminalausgabe in die Entwicklertools schreiben, mit Vorsicht verwenden",
      "Debug plugin output":
        "Plugin-Ausgabe debuggen",
      "Print plugin proceeded output to devtools, use with caution":
        "Vom Plugin verarbeitete Ausgabe in die Entwicklertools schreiben, mit Vorsicht verwenden",
      "Format":
        "Formatieren",
      "Edit Keyword":
        "Schlüsselwort bearbeiten",
      "[Highlight] Something wrong when creating JS Function, please check highlight settings":
        "[Hervorhebung] Fehler beim Erstellen der JS-Funktion, bitte die Einstellungen prüfen",
      "[Highlight] Something wrong when execute JS Function, please check highlight settings":
        "[Hervorhebung] Fehler beim Ausführen der JS-Funktion, bitte die Einstellungen prüfen",
      "Click expand to edit.":
        "Zum Bearbeiten aufklappen.",
      "Edit JavaScript":
        "JavaScript bearbeiten",
      "Edit Text":
        "Text bearbeiten",
      "Regular Expression":
        "Regulärer Ausdruck",
      "Expand edit":
        "Erweitert bearbeiten",
      "[Deleted Session]":
        "[Gelöschte Verbindung]",
      "[Deleted Group]":
        "[Gelöschte Gruppe]",
      "[Unknown Type]":
        "[Unbekannter Typ]",
      "Select template":
        "Vorlage auswählen",
      "Apply Template":
        "Vorlage anwenden",
      "[Highlight]Return pos array":
        "[Hervorhebung] Positionsarray zurückgeben",
      "[Highlight]Return substring":
        "[Hervorhebung] Teilstring zurückgeben",
      "[Highlight]Return regexp string":
        "[Hervorhebung] RegEx-String zurückgeben",
      "[Highlight]Return regexp":
        "[Hervorhebung] RegEx-Objekt zurückgeben",
      "[Replace]Return replaced string":
        "[Ersetzen] Ersetzten String zurückgeben",
      "[Replace]Return string array":
        "[Ersetzen] String-Array zurückgeben",
      "[Replace]Return regexp string array":
        "[Ersetzen] RegEx-String-Array zurückgeben",
      "[Replace]Return regexp and string":
        "[Ersetzen] RegEx und String zurückgeben",
      "Delete":
        "Löschen",
      "Disable Replace":
        "Ersetzen deaktivieren",
      "Enable":
        "Aktivieren",
      "Javascript":
        "JavaScript",
      "Cancel":
        "Abbrechen",
      "Add":
        "Hinzufügen",
      "Export":
        "Exportieren",
      "Replace":
        "Ersetzen",
      "Advanced":
        "Erweitert",
    },
  ],
];
