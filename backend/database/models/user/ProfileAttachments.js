const SequelizeFile = require('sequelize-file')

picture = SequelizeFile({
   attribute: 'picture',
   mimetype: /^profile-pics/,
   crop: true,
   sizes: {
     small: 64, //width 64
     big: 192, //width 150
   }
});

backgroundImage = SequelizeFile({
  attribute: 'backgroundImage',
  mimetype: /^profile-background/,
  crop: true,
  sizes: {
    preview: "x350" // height 350
  }
});

module.exports.picture = picture;
module.exports.backgroundImage = backgroundImage
