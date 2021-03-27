const mongoose = require('mongoose')
var Int32 = require('mongoose-int32');


const userSchema = new mongoose.Schema({
	name: {
		type: String, 
		required: true,
		trim: true
	},
	email: {
		type: String, 
		required: true,
		unique: true
	},
	password: {
		type: String, 
		required: true	
	},
	role: {
		type: Number,
		default: 0	
	},
	carrito: {
		type: Array,
		default: []
	}
}, {
	timestamps: true
})

module.exports= mongoose.model('Users', userSchema)