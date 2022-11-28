const mongoose =require('mongoose');

const schema = mongoose.Schema;

const userSchema = new schema({
firstname:{
    type:String,
    required:true
},

lastname:{
    type:String,
    required:true
},

Rollno:{
    type:Number,
    required:true
},

StudentID:{
    type:Number,
    required:true
},

email:{
    type:String,
    unique:true,
    required:true
},

number:{
    type:Number,
    unique:true,
    required:true
},

Year:{
    type:Number,
    required:true
},

Branch:{
    type:String,
    required:true
}
})

module.exports = mongoose.model('Registeruser', userSchema)