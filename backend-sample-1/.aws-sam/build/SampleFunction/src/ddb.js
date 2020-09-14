var AWS = require("aws-sdk");

AWS.config.update({
  region: "ap-northeast-2"
});

var docClient = new AWS.DynamoDB.DocumentClient();

var table = "SampleServerlessBackend-SampleTable-1VTS6WSOHHPMS";


var params = {
    TableName:table,
    Item:{
        "ArtistId": "Heejong",
        "Concert": "소고리",
        "TicketSales":"20"
    }
};

console.log("Adding a new item...");
docClient.put(params, function(err, data) {
    if (err) {
        console.error("Unable to add item. Error JSON:", JSON.stringify(err, null, 2));
    } else {
        console.log("Added item:", JSON.stringify(data, null, 2));
    }
});