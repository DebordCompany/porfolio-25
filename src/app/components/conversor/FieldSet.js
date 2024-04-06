import InputConversor from "./InputConversor";
export default function FieldSet() {
  return (
    <>
      <fieldset className="flex flex-col gap-2">
        <InputConversor
          type={"number"}
          lable={"Resolución"}
          placeholder={"Resolución"}
        />
        <select
          name=""
          id=""
          className="bg-transparent border-2 border-black w-full py-1 px-2"
        >
          <option value="webp" selected>
            WEBP
          </option>
          <option value="png">PNG</option>
          <option value="jpg">JPG</option>
        </select>
        <InputConversor
          type={"submit"}
          value={"Enviar"}
          classProp={"bg-black"}
        />
      </fieldset>
    </>
  );
}
