export default function HeroCV({ info }) {
  return (
    <section className="flex flex-col md:flex-row print:flex-row items-star md:justify-between gap-8">
      <div>
        <h1 className="text-4xl font-bold">{info.name}</h1>
        <p className="pt-1 text-2xl font-semibold">{info.label}</p>
        <div className="flex gap-x-2 flex-wrap pt-3">
          <p className="pt-1 font-light text-sm">
            <strong>{info.email}</strong>
          </p>
          <span>/</span>
          <p className="pt-1 font-light text-sm">
            <strong>{info.phone}</strong>
          </p>
          <span>/</span>
          <p className="pt-1 font-light text-sm">
            <strong>debordcompany.es</strong>
          </p>
          <span>/</span>
          <p className="pt-1 font-light text-sm">{info.location.city}</p>
        </div>
      </div>
      <div>
        <img
          className="w-40 rounded-md aspect-square object-cover"
          src={info.image}
          alt={info.name}
        />
      </div>
    </section>
  );
}
