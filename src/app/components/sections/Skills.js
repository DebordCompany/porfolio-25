export default function Skills({ info }) {
  return (
    <>
      <h3 className="text-xl font-black">Skills</h3>
      <p className="pt-4">Estas son las tecnologias con las que he trabajado</p>
      <ul className="flex flex-wrap gap-2 pt-4">
        {info.map((element, index) => {
          return (
            <li
              className="py-1 px-3 bg-slate-100 text-black rounded-full text-xs hover:bg-amber-500 transition-colors"
              key={index}
            >
              {element.name}
            </li>
          );
        })}
      </ul>
    </>
  );
}
