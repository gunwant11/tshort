
import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../../db/client";

export default async (req: NextApiRequest, res: NextApiResponse) => {

    try {

    const slug = req.query["slug"];


    if (!slug || typeof slug !== "string") {
        res.status(400).json({ error: "Missing slug" });
        return;
    }
    const data = await prisma.shortURL.findFirst({
        where: {
            slug: {
                equals: slug,
            }
        }
    });

    if (!data) {
        res.status(404).json({ error: "Not found" });
        return;
    }
    return res.json(data);
} catch (e : any)  {
    res.status(500).json({ 'error': e.message })

}

}