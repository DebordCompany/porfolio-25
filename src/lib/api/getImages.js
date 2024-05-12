import axios from "axios";
import { errorResponse, successResponse } from "../utils/axiosResponses";
export default async function getImages() {
  try {
    const res = await axios(
      process.env.NEXT_PUBLIC_URL_API_IMAGES + "getImages",
      {
        responseType: "blob",
      }
    );
    const url = URL.createObjectURL(res.data);
    const a = document.createElement("a");
    a.href = url;
    a.download = "trazos-image-converter.zip";
    document.body.appendChild(a);
    a.click();
    console.log(res.status);
    return successResponse(res);
  } catch (error) {
    return errorResponse(error);
  }
}
