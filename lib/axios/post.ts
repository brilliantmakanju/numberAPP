'use server'
import { auth } from "@/auth"

export default async function post(clienthelp: ClientHelper) {
    const _token = await auth()

    const {
        path,
        data,
        method,
        queryParams,
        contentType = "application/json",
    } = clienthelp;

    const baseURL = process.env.BACKEND_URL
    const headers = {
        "Content-Type": contentType,
        Accept: "application/json",
        // Authorization: `Bearer ${_token?.user.access_token}`,
    };

    let url = `${baseURL}${path}`;

    // console.log( JSON.stringify(data))

    const response = await fetch(url, {
        method: "POST",
        headers: headers,
        body: JSON.stringify(data)
    })


    // const setCookieHeader = response.headers.get('set-cookie');
    // const cookies = extractCookies(setCookieHeader, ['newAdd', 'rongtai']);

    // console.log(cookies.get('newAdd'), "newAdd");
    // console.log("\n")
    // console.log(cookies.get('rongtai'), "rongtai");
    // console.log("\n")

    // return response
    // console.log(await response.json())
    // console.log(response.headers.get('rongtai'))
    // console.log(response.headers.get('set-cookie'))
    // const headersList = response[Symbol.for('headers')];
    // Extracting cookies array
    // const cookies = headersList.cookies;
    // console.log(_token?.user.access_token)


    return response

}