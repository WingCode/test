function testinPOST(myData){
fetch("https://test115.free.beeceptor.com", {
  method: "POST",
  body: JSON.stringify(myData)
});
}
