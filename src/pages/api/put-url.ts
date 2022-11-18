import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../db/client";




export default async (req: NextApiRequest, res: NextApiResponse) => {

    const words = ['industry','village','statement','classroom','contract','member','transportation','permission','government','scene','presentation','winner','garbage','control','charity','strategy','community','loss','reflection','depth','celebration','discussion','mode','product','basket','unit','oven','meal','intention','news','hair','grandmother','music','river','society','chapter','menu','church','family','resolution','diamond','maintenance','guitar','song','vehicle','poem','opportunity','proposal','politics','housing','tension']
    // const randomWordSequence = words[Math.floor(Math.random() * words.length)] + '-' + words[Math.floor(Math.random() * words.length)] + '-' + words[Math.floor(Math.random() * words.length)] ;
    

    // console.log(randomWordSequence)
    if (req.method === 'POST') {
        const { url } = req.body;
        // const newSlug = randomWordSequence
        // const newUrl = await prisma.shortURL.create({
        //     data: {
        //         url: url,
        //         slug: "test"

        //     }
        // })


    }
}
