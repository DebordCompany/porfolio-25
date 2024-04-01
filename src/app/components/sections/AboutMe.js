export function AboutMe({ title, aboutMe }) {
  return (
    <>
      <p className="text-xl font-black">{title}</p>
      <div className="grid grid-cols-1 gap-3 pt-4">
        {aboutMe.map((element, index) => {
          return (
            <p key={index} dangerouslySetInnerHTML={{ __html: element }}></p>
          );
        })}
      </div>
    </>
  );
}
