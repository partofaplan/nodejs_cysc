var XLSX = require('xlsx');
var workbook = XLSX.readFile('test.xlsx');
var sheet_name_list = workbook.SheetNames;
var key = 'Timestamp';
fs = require('fs');
sheet_name_list.forEach(function(y) {
    var worksheet = workbook.Sheets[y];
    var headers = {};
    var data = [];
    for(z in worksheet) {
        if(z[0] === '!') continue;
        //parse out the column, row, and value
        var tt = 0;
        for (var i = 0; i < z.length; i++) {
            if (!isNaN(z[i])) {
                tt = i;
                break;
            }
        };
        var col = z.substring(0,tt);
        var row = parseInt(z.substring(tt));
        //const col = z.replace(/[0-9]/g, '');
        //const row = parseInt(z.replace(/\D/g,''));
        var value = worksheet[z].v;

        //store header names
        if(row == 1 && value) {
            headers[col] = value;
            continue;
        }
     
        delete data[key];
        
        if(!data[row]) data[row]={};
        data[row][headers[col]] = value;
        delete data[key];
    }
    console.log(data);
    // let exceldata = data;
     
    // Object.keys(exceldata).forEach(function(key){
    //     if (exceldata[key] === value) {
    //       delete exceldata[key];
    //     }
    //   });

    //drop those first two rows which are empty
    // data.shift();
    // data.shift();
    // fs.writeFile('./cys-app/src/components/LocalPosts/cys.json', JSON.stringify(data), function (err) {});
});