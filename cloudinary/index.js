const cloudinary = require('cloudinary').v2;
const {cloudinaryStorage, CloudinaryStorage} = require('multer-storage-cloudinary');

cloudinary.config({
    cloud_name:process.env.CLOUDINARY_CLOUD_NAME,
    api_key:process.env.API_KEY,
    api_secret:process.env.SECRET
})

const storage = new CloudinaryStorage({
    cloudinary,
    params: {
    folder:'project',
    allowedFormats: ['jpeg','png','jpg']
}});

module.exports = {
    cloudinary,
    storage
}

