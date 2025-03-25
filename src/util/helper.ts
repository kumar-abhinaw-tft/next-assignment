import axios from "axios";

interface requestProps{
  url:string,
  method :"GET" | "POST"
  body?:any,
  params?: any,
  headers?:any,
}
export const sendRequest = async ({
  url,
  method = "GET",
  body,
  params = {},
  headers = {},
}:requestProps) => {

  try {
    const response = await axios({
      url:  url,
      method,
      data: body,
      params: {
        ...params,
      },
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        ...headers,
      },
    });
    return response.data;
  } catch (error:any) {
    console.error(error)
    throw {
      message: "Something went wrong",
      success:false,
    };
  }
};