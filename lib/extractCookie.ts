'use server'


export async function extractCookies(cookiesString: string | null, cookieNames: string[]){
    // console.log(cookiesString)
    const cookies = new Map<string, string>();

    if (cookiesString) {
        // Split cookies by comma and trim whitespace
        const cookieArray = cookiesString.split(',').map(cookie => cookie.trim());

        // Extract cookies by name
        for (let cookie of cookieArray) {
            const cookieParts = cookie.split(';')[0]; // Get only cookie name-value pair
            const [name, value] = cookieParts.split('=');

            if (cookieNames.includes(name)) {
                cookies.set(name, value);
            }
        }
    }

    return cookies;
}