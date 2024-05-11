export default function InputConversor({
  type,
  lable,
  value,
  classProp,
  placeholder,
}) {
  return (
    <>
      <label htmlFor="" className="flex flex-col gap-2">
        {lable}
        <input
          className={`bg-inherit border-2 border-white py-1 px-2  ${classProp}`}
          type={type}
          value={value}
          placeholder={placeholder}
        />
      </label>
    </>
  );
}
