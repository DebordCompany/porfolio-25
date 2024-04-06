import TitleConversor from "../components/conversor/TitleConversor";
import FieldSet from "../components/conversor/FieldSet";
export default function Conversor() {
  return (
    <>
      <TitleConversor
        title="Debord Image Conversor: Transforma Tus Imágenes"
        subtitle={
          "El poder de la conversión en tus manos: fácil, rápido y con calidad insuperable."
        }
      />
      <div className="pt-5">
        <FieldSet />
      </div>
    </>
  );
}
