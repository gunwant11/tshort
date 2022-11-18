
import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../../db/client";

export default async (req: NextApiRequest, res: NextApiResponse) => {

    const slug = req.query["slug"];

    if (!slug || typeof slug !== "string") {
        res.status(400).json({ error: "Missing slug" });
        return;
    }

    console.log("slug", slug);

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

}