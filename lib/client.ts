'use server'
import { auth } from "@/auth"
import axios from "axios";
import Axios, { AxiosRequestConfig } from "axios";


export const Client = async (clienthelp: ClientHelper) => {

    const _token = await auth()

    const {
        path,
        method,
        data,
        queryParams,
        contentType = "application/json",
    } = clienthelp;
    


    const baseURL = process.env.BACKEND_URL
    const headers = {
        // Cookie: `Authorization=${_token};`,
        "Content-Type": contentType,
        Accept: "application/json",
    };

    let url = `${baseURL}${path}`;

    // const axiosConfig: AxiosRequestConfig<any> = {
    //     url: url,
    //     method: method,
    //     headers: headers,
    //     params: queryParams,
    //     responseType: "json",
    // };

    // console.log(JSON.stringify(data))


    try {
        // const response = await Axios(axiosConfig);
        // const response = await axios.post(url, {

        // })

        const datas = await fetch(`${url}`, {
            method: method,
            headers: {
                'Content-Type': 'application/json',
            },
            // mode: 'cors',
            // credentials: "include",

            body: JSON.stringify({data})
        })

        // console.log(datas)

        // return response
        return
    } catch (error: any) {
        console.log("error:", error)
    }
}