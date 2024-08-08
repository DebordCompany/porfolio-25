export default function List({ items }) {
  return (
    <ul>
      {items.map((element, index) => {
        return (
          <li className="pl-4 relative list" key={index}>
            {element}
          </li>
        );
      })}
    </ul>
  );
}
