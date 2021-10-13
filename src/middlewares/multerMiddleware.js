const path = require("path");
const multer = require("multer");

const storage = multer.diskStorage({
  destination: path.join(__dirname, "../../public/img/user-images"),
  /*
  destination: (req,file,cb)=>{
    cb (null, "../../public/img/user-images");
  }
  */
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
    /*
  filename: (req, file, cb)=> {
    let fileName = "${Date.now()}=_img${path.extname(file.originalname)}";
    cb (null, fileName);
  }  
    */
  },
});

const uploader = multer({ storage });

module.exports = uploader;
