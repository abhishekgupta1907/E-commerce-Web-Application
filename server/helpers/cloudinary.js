const cloudinary = require("cloudinary").v2;
const multer = require("multer");
cloudinary.config({
  cloud_name: "do30pz5q2",
  api_key: "791126169557555",
  api_secret: "3v2pV96d_ex0Kn5q-c30dfKwCOg",
});

const storage = new multer.memoryStorage();

async function imageUploadUtil(file) {
  const result = await cloudinary.uploader.upload(file, {
    resource_type: "auto",
  });

  return result;
}

const upload = multer({ storage });

module.exports = { upload, imageUploadUtil };
