fs = require('fs');
let XLSX = require('xlsx');
const workbook = XLSX.readFile('test.xlsx');
const sheet_name_list = workbook.SheetNames;
let jsonPagesArray = [];
sheet_name_list.forEach(function(sheet) {
        const jsonPage = {
            name: sheet,
            content: JSON.parse(JSON.stringify(XLSX.utils.sheet_to_json(workbook.Sheets[sheet],{defval:""})))
        };
        jsonPagesArray.push(jsonPage);
    });
    //console.log(data);
    fs.writeFile('./cys-app/src/components/LocalPosts/cys.json', jsonPagesArray[0].content, function (err) {});
