// const MongoClient = require('mongodb').MongoClient;
// const {MongoClient, ObjectID} = require('mongodb');


// MongoClient.connect('mongodb://localhost:27017/TodoAPP', (err, client)=>{ for mongoV3
MongoClient.connect('mongodb://localhost:27017/TodoAPP', (err, db)=>{
	if (err){
		return console.log('unable to connect to mongodb server');
	}
	console.log('Connected to Mongodb server');
	// const db = client.db('TodoAPP') FOR MONGOV3
	//insert new doc into collection TODOS(text, completed)
	// db.collection('Todos').insertOne({
	// 	text:'Something to do',
	// 	completed: false
	// }, (err, result)=>{
	// 	if (err){
	// 		return console.log('unable to insert todo', err);
	// 	}
	// 	console.log(JSON.stringify(result.ops, undefined, 2))
	// })

	//insert new doc into collection Users(name, age, location)

	// db.collection('Users').insertOne({
	// 	name: 'badr',
	// 	age: 25,
	// 	location: '89 boulevard murat, paris, 75016'

	// }, (err, result)=>{
	// 	if(err){
	// 		console.log('unable to insert User', err);
	// 	}
	// 	console.log(JSON.stringify(result.ops, undefined, 2));
	// 	console.log(result.ops[0]._id.getTimestamp());
	// })

	// client.close() for mongoV3
	db.close();
});