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
        <label>
          Formato
          <select
            name=""
            id=""
            className="bg-transparent border-2 border-white w-full py-1 px-2 mt-2"
            defaultValue={"webp"}
          >
            <option value="webp">WEBP</option>
            <option value="png">PNG</option>
            <option value="jpg">JPG</option>
          </select>
        </label>
        <div className="mt-10">
          <InputConversor
            type={"submit"}
            value={"Enviar"}
            classProp={"bg-white text-black md:w-fit md:px-10"}
          />
        </div>
      </fieldset>
    </>
  );
}
