const loadJsonFile = require('load-json-file');
var json2xls = require('json2xls');
var fs = require('fs');
loadJsonFile('greatproject.json').then(json => {
	console.log(json);
	//=> {foo: true}
});
var json2 = loadJsonFile('greatproject.json')
/*var json = {
    foo: 'bar',
    qux: 'moo',
    poo: 123,
    stux: new Date()
}
*/
var xls = json2xls(json2);

fs.writeFileSync('data2.xlsx', xls, 'binary');