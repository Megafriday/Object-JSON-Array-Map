# 概要
オブジェクト、JSON、配列、Map　の　相互変換


# 変換方法
|変換|やり方|
|---|---|
|オブジェクト ⇒ JSON|JSON.stringify()|
|JSON ⇒ オブジェクト|JSON.parse()|
|||
|オブジェクト ⇒ 配列|Object.entries()|
|配列 ⇒ オブジェクト|Object.fromEntries()|
|||
|Map ⇒ 配列|Array.from() または、 [...map]|
|配列 ⇒ Map|new Map(array)|
|||
|NodeList ⇒ 配列|Array.from() または、 [...nodeList]|
