import axios from "axios";
import { errorResponse, successResponse } from "../utils/axiosResponses";

export default async function sendImages(files) {
  try {
    const res = await axios.post(
      process.env.NEXT_PUBLIC_URL_API_IMAGES + "process",
      files
    );
    return successResponse(res);
  } catch (error) {
    return errorResponse(error);
  }
}
