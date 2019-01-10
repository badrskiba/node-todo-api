// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoAPP', (err, db)=>{
	if (err){
		return console.log('unable to connect to mongodb server');
	}
	console.log('Connected to Mongodb server');
	
	// db.collection('Todos').find({
	// 	_id: new ObjectID('5c3761a62f8bbd32119927db')
	// }).toArray().then((docs)=>{
	// 	console.log('Todos');
	// 	console.log(docs);
	// }, (err)=>{
	// 	console.log('unable to fetch Todos', err)
	// });


	// db.collection('Todos').find().count().then((count)=>{
	// 	console.log('Todos:', count);
	// }, (err)=>{
	// 	console.log('unable to fetch Todos', err)
	// });


	db.collection('Users').find({
		name: 'badr'
	}).toArray().then((docs)=>{
		console.log('Todos');
		console.log(docs);
	}, (err)=>{
		console.log('unable to fetch Todos', err)
	});

	
	db.close();
});