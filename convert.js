const sharp = require("sharp");

const imagePath = "./src/assets/images";

const convert = function (filename, width, height, newName) {
  const [base, ext] = filename.split(".");
  const filePath = `${imagePath}/${filename}`;

  if (!newName) {
    newName = base;
  }

  sharp(filePath)
    .resize({
      width: width,
      height: height,
    })
    .toFile(`${imagePath}/webp/${newName}.webp`),
    (err, info) => {};

  sharp(filePath)
    .resize({
      width: width,
      height: height,
    })
    .toFile(`${imagePath}/resized/${newName}.${ext}`),
    (err, info) => {};
};

convert("face-icon.png", 60, 60);
