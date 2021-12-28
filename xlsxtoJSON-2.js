//First, lets fetch the xlsx-to-json package
const xlsxToJson = require('xlsx-to-json');

//Set up the callback function
var callback = function(err, result) {
    //Check for errors
    if(err) {
      // Oops something went wrong!
      console.log('Error : ', err);
    }
    //If everything's alright go ahead
    else { 
      /*
        If you don't want to save the json to a file, instead just use it directly.
        You can use the result returned by the xlsxToJson() function, directly like as follows:
                doSomething(result);
      */
      console.log('You are done!');
    }
  };

//Set up options for xlsx-to-json:
var options = {
    //Set the path to input file
    input: "test.xlsx", 
    //Set the path for Output file, if you want the json result saved in a file directly
    output: "outputFile.json",
    //Optionally you can specify which spreadsheet to take the input data from, 
    //if you do not provide the sheet name, it reads it from the first sheet by default.
    sheet: "Form Responses 3"
};

//Finally, call the xlsxToJson() to generate the Json from excel data.
xlsxToJson(options, callback);