const mongoose = require('mongoose');

// async là khai báo 1 hàm bất đồng bộ
async function connect() {
    try {
        await mongoose.connect('mongodb+srv://lamnguyent2:Lam0123456z@cluster0.tlapj.mongodb.net/linkin_project', {
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
