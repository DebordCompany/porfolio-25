export function Projects({ projects }) {
  const data = projects.filter((project) => project.isActive);
  return (
    <section>
      <p className="text-xl text-black dark:text-white font-black">Proyectos</p>
      <div className="py-5 grid grid-cols-1 gap-4 md:grid-cols-2 ">
        {data.map((element) => {
          return (
            <article
              className="  border-2 border-neutral-600 p-5  shadow-xl flex flex-col items-stretch gap-3 bg-cover bg-center bg-no-repeat"
              key={element.id}
            >
              <a
                href={element.url}
                target="_blank"
                className="flex flex-col justify-between h-full"
              >
                <div>
                  <h3 className="text-xl font-bold">{element.name}</h3>
                  <p className="text-sm text-pretty">{element.description}</p>
                  <div className="flex items-center flex-wrap gap-1 items-stretch mt-4">
                    {element.highlights.map((high, i) => {
                      return (
                        <div key={i}>
                          <p className="bg-slate-100 dark:bg-slate-700 dark:text-neutral-50 text-black w-fit text-xs py-1 px-4 rounded-full">
                            {high}
                          </p>
                        </div>
                      );
                    })}
                  </div>
                </div>
                <div className="pt-4">
                  <button className="text-left border-gray-400 border-2 hover:bg-amber-400 hover:text-neutral-800 hover:border-amber-400 hover:scale-105 transition-all w-fit py-1 px-4 rounded-sm">
                    Visitar
                  </button>
                </div>
              </a>
            </article>
          );
        })}
      </div>
    </section>
  );
}
// style={{ backgroundImage: `url(${element.image})
