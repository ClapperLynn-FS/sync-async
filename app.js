//var http = require('htt');
var http = require('http');
// var myname = functon() {
let myname = console.log("Here is my IP address");


//function callHttpbi() {
async function callHttpbin() {
  let promise = new Promise((resolve, reject) => {
    http.get(
     'http://httpbin.org/ip',
     function(response) {
      var str="";
      response.setEncoding('utf8');
      response.on('data', function(data){
      //str += data;
        str += data;
     });
     response.on('end', function() {
      var result = JSON.parse(str);
      myips = result.origin;
      
      //resolve()
      resolve(myips)
     });
     }
    );
});

let result = await promise;
// result;
return result;
}
function executeAsyncTask(){
    //const valueA = await callHttpbin()
  const valueA =  callHttpbin()
  const valueB = myname();
  
  console.log(valueB+" "+valueA);
  //missing }
}
// Output Here is my IP address 149.24.160.1, 149.24.160.1