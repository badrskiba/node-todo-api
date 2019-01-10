// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoAPP', (err, db)=>{
	if (err){
		return console.log('unable to connect to mongodb server');
	}
	console.log('Connected to Mongodb server');
	
	//deleteMany

	// db.collection('Todos').deleteMany({text:'lunch'}).then((result)=>{
	// 	console.log(result);
	// });

	//deleteOne
	// db.collection('Todos').deleteOne({text:'lunch'}).then((result)=>{
	// 	console.log(result);
	// });
	//findOneandDelete
	// 	db.collection('Todos').findOneAndDelete({completed:false}).then((result)=>{
	// 	console.log(result);
	// });

	db.collection('Users').findOneAndDelete({
		_id: new ObjectID('5c376579ef87e932d45de75d')
	}).then((result)=>{
		console.log(result);
	});

	db.close();
});