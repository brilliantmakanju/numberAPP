import NextAuth from "next-auth";
import authConfig from "@/auth.config";
import { apiAuthPrefix, protectRoutes, publicRoute } from "./routes";


const { auth } = NextAuth(authConfig);

export default auth((req) => {
    const { nextUrl } = req;
    const isLoggedIn = !!req.auth;

    const isApiAuthRoute = nextUrl.pathname.startsWith(apiAuthPrefix)
    const isProtectedRoute = protectRoutes.includes(nextUrl.pathname)
    const isPublicRoute = publicRoute.includes(nextUrl.pathname)


    if (isProtectedRoute && !isLoggedIn) {
        return Response.redirect(new URL('/', nextUrl)); // Redirect to landing page if not logged in and trying to access a protected route
    }
    

})


export const config = {
    matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)']
}

// export default auth((req) => {
//     const { nextUrl } = req;
//     const isLoggedIn = !!req.auth;

//     console.log(isLoggedIn)
//     console.log(nextUrl.pathname)

//     if (isLoggedIn) {
//         console.log(isLoggedIn, " I guess you're logged in")
//     } else {
//         console.log(isLoggedIn, "Nope, you're not logged in")
//     }


//     const isApiAuthRoute = nextUrl.pathname.startsWith(apiAuthPrefix)
//     const isProtectedRoute = protectRoutes.includes(nextUrl.pathname)

//     if (isApiAuthRoute) {
//         return null
//     }

//     // if (!isLoggedIn && !isProtectedRoute) {
//     //     return Response.redirect(new URL('', nextUrl))
//     // } 


// })




