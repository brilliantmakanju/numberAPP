'use server'
import { auth } from "@/auth"

export default async function get(clienthelp: ClientHelper) {
    const _token = await auth()

    const {
        path,
        data,
        method,
        tokenType,
        queryParams,
        contentType = "application/json",
    } = clienthelp;

    const baseURL = process.env.BACKEND_URL
    const cookies_auth = [
        `newAdd=${_token?.user.refresh_token}`,
        `rongtai=${_token?.user.access_token}`
    ]

    const cookieHeader = cookies_auth.join('; ');
    console.log(cookieHeader)
    const headers = {
        "Content-Type": contentType,
        "Cookies": cookieHeader,
        Accept: "application/json",
        Authorization: `${tokenType} ${_token?.user.access_token}`,
    };


    let url = `${baseURL}${path}`;

    // console.log( JSON.stringify(data))

    const response = await fetch(url, {
        mode: 'cors',
        method: "GET",
        headers: headers,
        credentials: "include",
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