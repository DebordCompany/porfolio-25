const fs = require("node:fs");

fs.readdir("./public/img", (err, data) => {
  const id = crypto.randomUUID();
  if (err) throw err;
  console.log(data);
  const imageData = "./src/lib/data/imageList.json";
  const images = data.map((image) => {
    return {
      id: id,
      source: `/img/${image}`,
      alt: image,
    };
  });
  fs.writeFile(imageData, JSON.stringify(images, null, 2), (err) => {
    if (err) throw err;
    console.log("File saved");
  });
});
