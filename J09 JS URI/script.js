var uri = "my test.asp?name=stale&car=saab";
var res = encodeURI(uri);
console.log(res);

uri = decodeURI(res);
console.log(uri);
