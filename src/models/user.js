const mongoose = require('mongoose')
const mongoosePaginate = require('mongoose-paginate-v2');
const uniqueValidator = require('mongoose-unique-validator');
const Schema = mongoose.Schema


const userSchema = new Schema({ 
  name: {
    type: String,
    required : [true, 'Name required']
  },
  lastname: {
    type: String,
    required : [true, 'Last Name required']
  },
  email: {
    type: String,
    required : [true, 'Email required'],
    unique: true,
    index : true
  },
  birthdate:  Date,
  password : {
    type: String,
    required : [true, 'Password required']
  },
  role : {
    type: String,
    required : true,
    default : 'USER_ROLE',
    enum : ['USER_ROLE' , 'ADMIN_ROLE']
  },
  enable : {
    type: Boolean,
    required : true,
    default : true
  },
  
},
 {timestamps: true}
    );

userSchema.plugin(uniqueValidator, {message : 'exist in the DB'})
userSchema.plugin(mongoosePaginate)

module.exports = mongoose.model('user' , userSchema)