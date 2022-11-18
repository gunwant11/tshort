import axios from "axios";
import { NextFetchEvent, NextRequest, NextResponse } from "next/server";

export async function middleware(req: NextRequest, ev: NextFetchEvent, res: NextResponse) {
    try {
        const slug = req.nextUrl.pathname.split("/").pop();
        console.log("retruning eml,marly",slug)
        // return NextResponse.redirect("https://nextjs.org/docs/messages/middleware-relative-urls")
       
        const slugFetch = await fetch(`${req.nextUrl.origin}/api/get-url/${slug}`)
        if(slugFetch.status === 404){
            return NextResponse.redirect(req.nextUrl.origin)
        }

        const data = await slugFetch.json();

        // return  NextResponse.json(data) 

        if (data?.url) {
            if (data.url.startsWith("http")) {
                return NextResponse.redirect(data.url);
            } else {
                return NextResponse.redirect(`https://${data.url.startsWith("www.") ? data.url : `www.${data.url}`
                    }`);
            }
        }
        else{
             console.log('first')
            return NextResponse.redirect('/')
        }

    }
    catch (e: any) {
        console.log(e.message)
        return NextResponse.redirect('/')
    }

}

//


export const config = {
    matcher: "/:slug/:slug",
  };