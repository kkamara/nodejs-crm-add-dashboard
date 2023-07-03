const { Sequelize, DataTypes, } = require("sequelize");
const { log, } = require('console');
const sequelize = require('../database');

const Book = sequelize.define("books", {
  uid: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
   },
   title: {
     type: DataTypes.STRING,
     allowNull: false,
   },
   author: {
     type: DataTypes.STRING,
     allowNull: false,
   },
   release_date: {
     type: DataTypes.DATEONLY,
   },
   subject: {
     type: DataTypes.INTEGER,
   },
});
/*
Foo.hasOne(Bar, {
  foreignKey: {
    name: 'my_foo_id',
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  onDelete: 'RESTRICT', //  RESTRICT, CASCADE, NO ACTION, SET DEFAULT and SET NULL
  onUpdate: 'RESTRICT'
});
Bar.belongsTo(Foo);
*/ /*
A.belongsTo(B, {  });
A.hasMany(B, {  });
A.belongsToMany(B, { through: 'C',  });
Movie.belongsToMany(Actor, {
  through: ActorMovies,
  uniqueKey: 'my_custom_unique',
  // unique: false, // Doesn't set uniqueKey.
});
*/
sequelize.sync().then(() => {
   console.log('Book table created successfully!');
   Book.create({
    title: 'Book '+parseInt(Math.random() * 100),
    author: 'Jane Doe',
   })
    .then(() => { log('Book created.'); })
    .catch(() => { log('Unable to create book.'); });
}).catch((error) => {
   console.error('Unable to create table : ', error);
});

module.exports = Book;
