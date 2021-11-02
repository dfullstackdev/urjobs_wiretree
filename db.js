const mongoose = require('mongoose');
dbConnect()
async function dbConnect(){

try {
  await mongoose.connect('mongodb+srv://deepan:79919071Dp@cluster0.xw0eq.mongodb.net/urhired', {useNewUrlParser:true});
  console.log('Mongo db conn successfull')
  } catch (error) {
  console.log('Mongo db connection failed')
  }

}

module.exports = mongoose