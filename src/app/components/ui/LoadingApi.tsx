import LoadingSlash from "./Animations/LoadingSlash";

export default function LoadingApi() {
  return (
    <div className="w-full">
      <hr />
      <div className="flex md:gap-4  items-center flex-wrap mb-2 md:mb-0 text-blue-500">
        <div className="text-xs my-2">
          Espera aproximadamente un minuto para reactivar el servicio
        </div>
        <LoadingSlash />
      </div>
      <hr />
    </div>
  );
}
