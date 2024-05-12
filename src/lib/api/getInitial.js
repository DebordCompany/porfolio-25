import axios from "axios";
import { errorResponse, successResponse } from "../utils/axiosResponses";

export default async function getServices() {
  try {
    const res = await axios(process.env.NEXT_PUBLIC_URL_API_IMAGES);
    return successResponse(res);
  } catch (error) {
    return errorResponse(error);
  }
}
