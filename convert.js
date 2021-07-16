const sharp = require("sharp");

const imagePath = "./src/assets/images";

const convert = function (filename, width, height) {
  const [base, ext] = filename.split(".");
  const filePath = `${imagePath}/${filename}`;

  sharp(filePath)
    .resize({
      width: width,
      height: height,
    })
    .toFile(`${imagePath}/webp/${base}.webp`),
    (err, info) => {};

  sharp(filePath)
    .resize({
      width: width,
      height: height,
    })
    .toFile(`${imagePath}/resized/${base}.${ext}`),
    (err, info) => {};
};

convert("icon-192x192.png", 192);
convert("icon-512x512.png", 512);
