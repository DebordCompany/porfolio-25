const fs = require("node:fs");
// import path from "node:path";

fs.readdir("./public/img", (err, data) => {
  if (err) throw err;
  console.log(data);
  const imageData = "./src/lib/data/imageList.json";
  const images = data.map((image, index) => {
    return {
      id: index++,
      source: `/img/${image}`,
      alt: image,
    };
  });
  fs.writeFile(imageData, JSON.stringify(images, null, 2), (err) => {
    if (err) throw err;
    console.log("File saved");
  });
});
