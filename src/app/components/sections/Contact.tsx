/* eslint-disable @next/next/no-img-element */
"use client";
export default function Contact({ data }) {
  function copyLink() {
    navigator.clipboard.writeText(data.email);
  }
  return (
    <>
      <p className="text-xl font-black">Contactame</p>
      <section className="pt-5 flex flex-col gap-4">
        <article>
          <ul className="flex items-center gap-5">
            {data.profiles.map((element, index) => {
              return (
                <li key={index} className="w-fit">
                  <a
                    href={element.url}
                    target="_blank"
                    className="filter invert-[1] dark:filter-none"
                  >
                    <img
                      className="w-8"
                      src={element.network}
                      alt={element.username}
                    />
                  </a>
                </li>
              );
            })}
          </ul>
        </article>
        <article className="flex flex-col gap-2">
          <div
            onClick={copyLink}
            className="flex items-center gap-2 cursor-pointer"
          >
            <p>Email: </p>
            <p>{data.email}</p>
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="M6.5 0A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0zm3 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5z" />
                <path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1A2.5 2.5 0 0 1 9.5 5h-3A2.5 2.5 0 0 1 4 2.5zm6.854 7.354-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 0 1 .708-.708L7.5 10.793l2.646-2.647a.5.5 0 0 1 .708.708" />
              </svg>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <p>Telefono: </p>
            <p>
              <a href={`tel:${data.phone}`}>{data.phone}</a>
            </p>
          </div>
        </article>
      </section>
    </>
  );
}
