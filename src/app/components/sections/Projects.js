export function Projects({ projects }) {
  const data = projects.filter((project) => project.isActive);
  return (
    <section>
      <p className="text-xl font-black">Proyectos</p>
      <div className="py-5 grid grid-cols-1 gap-4 md:grid-cols-2 ">
        {data.map((element) => {
          return (
            <article
              className="bg-black p-5  shadow-xl flex flex-col items-stretch gap-3 bg-cover bg-center bg-no-repeat"
              key={element.id}
              style={{ backgroundImage: `url(${element.image})` }}
            >
              <h3 className="text-xl font-bold">{element.name}</h3>
              <p>{element.description}</p>
              <div className="flex items-center flex-wrap gap-1 items-stretch">
                {element.highlights.map((high, index) => {
                  return (
                    <p
                      className="bg-gray-700 w-fit text-xs py-1 px-4 rounded-full"
                      key={index}
                    >
                      {high}
                    </p>
                  );
                })}
              </div>
              <div className="pt-4">
                <button className="text-left border-white border-2 w-fit py-1 px-4 rounded-sm">
                  <a href={element.url} target="_blank">
                    Visitar
                  </a>
                </button>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
