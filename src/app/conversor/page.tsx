"use client";
import { useEffect, useRef, useState } from "react";
import TitleConversor from "../components/conversor/TitleConversor";
import sendImages from "@/lib/api/sendImages";
import getImages from "@/lib/api/getImages";
import getInitial from "@/lib/api/getInitial";
import Wait from "../components/ui/Wait";
import FileInput from "../components/ui/FileInput";
export default function Conversor() {
  const [files, setFiles] = useState<FileList>();
  const [resolution, setResolution] = useState<number>(1200);
  const [format, setFormat] = useState("webp");
  const [wait, setWait] = useState<Boolean>(false);
  const [successSend, setSuccessSend] = useState(false);
  const [failProcess, setFailProcess] = useState(false);
  const [initial, setInitial] = useState(true);

  function getFiles(event) {
    setFiles(event.target.files);
  }
  function getRes(event) {
    setResolution(+event.target.value);
  }
  function getFormat(event) {
    setFormat(event.target.value);
  }

  async function submit(event) {
    event.preventDefault();
    const dataForm = new FormData();
    dataForm.append("resolution", resolution.toString());
    dataForm.append("format", format);
    for (let i = 0; i < 10; i++) {
      dataForm.append("files", files[i]);
    }
    setWait(true);
    const res = await sendImages(dataForm);
    console.log(res);
    if (res.status === 200) {
      setWait(false);
      setSuccessSend(true);
    } else {
      setWait(false);
      setFailProcess(true);
      setTimeout(() => {
        setFailProcess(false);
      }, 2000);
    }
  }
  async function getterImages() {
    const res = await getImages();
    if (res.status === 200) {
      setSuccessSend(false);
    } else {
      setFailProcess(true);
      setTimeout(() => {
        setFailProcess(false);
      }, 2000);
    }
  }
  useEffect(() => {
    async function init() {
      const res = await getInitial();
      if (res.status === 200) {
        setInitial(false);
      }
    }
    init();
  }, []);
  return (
    <>
      <TitleConversor
        title="Debord Image Conversor: Transforma Tus Imágenes"
        subtitle={
          "El poder de la conversión en tus manos: fácil, rápido y con calidad insuperable."
        }
      />
      {initial && <Wait message={"Iniciando: 1 Min"} animation />}
      {wait && <Wait message={"Procesando imagenes"} animation />}
      {successSend && (
        <Wait
          message={"Imagenes procesadas"}
          buttonText={"Descargar"}
          button={getterImages}
        />
      )}
      {failProcess && <Wait message={"Opps, hemos tenido un error"} />}

      <form onSubmit={submit} className="pt-5 w-full">
        <fieldset className="flex flex-col gap-4">
          <label className="flex flex-col gap-2">
            Resolución
            <input
              className="bg-transparent border-2 border-white py-1 px-2"
              type="number"
              placeholder="Resolución"
              onChange={getRes}
            />
          </label>
          <label>
            Formato
            <select
              name=""
              id=""
              className="bg-transparent border-2 border-white w-full py-1 px-2 mt-2"
              defaultValue={"webp"}
              onChange={getFormat}
            >
              <option value="webp">WEBP</option>
              <option value="png">PNG</option>
              <option value="jpg">JPG</option>
            </select>
          </label>
          <FileInput customEmiter={getFiles} />
          <input
            type="submit"
            className="bg-white py-1 px-2 text-black md:w-fit md:px-10 mt-10 hover:scale-[1.02] transition-all border-2 border-white hover:bg-neutral-800 hover:text-white hover:font-bold"
          />
        </fieldset>
      </form>
    </>
  );
}
