import SequelizeFile from 'sequelize-file';

export const picture = SequelizeFile({
   attribute: 'picture',
   mimetype: /^profile-pics/,
   crop: true,
   sizes: {
     small: 64, //width 64
     big: 192, //width 150
   }
});

export const backgroundImage = SequelizeFile({
  attribute: 'backgroundImage',
  mimetype: /^profile-background/,
  crop: true,
  sizes: {
    preview: "x350" // height 350
  }
});
