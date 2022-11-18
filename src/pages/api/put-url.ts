import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../db/client";
import axios from "axios";




export default async (req: NextApiRequest, res: NextApiResponse) => {
    try {
        if (req.method === 'POST') {
            // https://random-word-api.herokuapp.com/word?number=3
            const randomWordSequence = await axios.get('https://random-word-api.herokuapp.com/word?number=3')
            const randomWord = randomWordSequence.data.join('-')
            const { url } = req.body;
            if(!url){
                res.status(400).json({ error: "Missing url" });
                return;
            }
            const newUrl = await prisma.shortURL.create({
                data: {
                    url: url,
                    slug: randomWord
                }
            })
            if (newUrl) {
                const newLink = `${req.headers.host}/${newUrl.slug}`
                res.status(200).json({ newLink })
            } else {
                res.status(400).json({ error: "Something went wrong" });
                return;
            }
        }
    } catch (e : any)  {
        res.status(500).json({ 'error': e.message })
    }
}
