const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

// async là khai báo 1 hàm bất đồng bộ
async function connect() {
    try {
        await mongoose.connect(process.env.DATABASE_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('Connected to database mongodb!');
    } catch (error) {
        console.log('Error! Cannot connect to database!');
    }
}

module.exports = { connect };

//mongodb+srv://lamnguyent2:Lam0123456z@cluster0.tlapj.mongodb.net/asm_duan_dev
//mongodb://localhost:27017/asm_duan_dev
