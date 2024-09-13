import { Image } from "debord-design";
import images from "@/lib/data/imageList.json";
export default function GaleryPage() {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {images.map((item, index) => {
          return (
            <Image
              ratio="square"
              key={item.id}
              src={item.source}
              alt={item.alt}
            />
          );
        })}
      </div>
    </>
  );
}
