'use strict';
const map = new Map();
map.set("鉛筆を買う", false);
map.set("勉強をする", true);

console.log("map:", map);			// Map { '鉛筆を買う' => false, '勉強をする' => true }

const array = Array.from(map);
console.log("array:", array);		// [ [ '鉛筆を買う', false ], [ '勉強をする', true ] ]

const object = Object.fromEntries(array);
console.log("object:", object);		// { '鉛筆を買う': false, '勉強をする': true }

// const object2 = JSON.parse(array);
// console.log("object2:", object2);	// エラー発生

const json = JSON.stringify(array);
console.log("json:", json);			// [["鉛筆を買う",false],["勉強をする",true]]

const json2 = JSON.stringify(object);
console.log("json2:", json2);		// {"鉛筆を買う":false,"勉強をする":true}

const map2 = new Map(array);
console.log("map2:", map2);			// { '鉛筆を買う' => false, '勉強をする' => true }