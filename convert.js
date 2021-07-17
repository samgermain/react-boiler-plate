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

convert("icon-192x192.png", 192);
convert("icon-512x512.png", 512);
convert("icon-192x192.png", 60, 60, "icon-60x60");
