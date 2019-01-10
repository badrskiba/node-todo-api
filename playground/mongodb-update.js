// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoAPP', (err, db)=>{
	if (err){
		return console.log('unable to connect to mongodb server');
	}
	console.log('Connected to Mongodb server');
	
	//findOneAndUpdate
	// db.collection('Todos').findOneAndUpdate({
	// 	_id : new ObjectID('5c3767701f45abc085b17b06')
	// }, {
	// 	$set:{	
	// 		text: 'this is a test' 
	// 	}
	// },{
	// 	returnOriginal:false
	// }).then((result)=>{
	// 	console.log(result);
	// })

	db.collection('Users').findOneAndUpdate({
		_id : new ObjectID('5c37639c881ab032976295b4')
	}, {
		$inc:{	
			age: +10081628916281682689162918629816298162981628916289162
		}
	},{
		returnOriginal:false
	}).then((result)=>{
		console.log(result);
	})

	db.close();
});

