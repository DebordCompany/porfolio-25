export function successResponse(res) {
  return {
    status: 200,
    response: res,
  };
}
export function errorResponse(res) {
  return {
    status: 400,
    response: res,
  };
}
