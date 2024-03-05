import { db } from "@/server/db";
import slugify from "slugify";
import type { NextApiRequest, NextApiResponse } from "next";
import { getServerSession } from "next-auth";
import { authOptions } from "@/server/auth";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method === "POST") {
    const { title, targetDate } = req.body as {
      title: string;
      targetDate: Date;
    };

    const session = await getServerSession(req, res, authOptions);

    if (!session) {
      res.status(401).json({ message: "You must be logged in." });
      return;
    }

    const newCountdown = await db.countdown.create({
      data: {
        title: title,
        slug: slugify(title).toLowerCase(),
        targetDate: targetDate,
        user: {
          connect: {
            id: session.user.id,
          },
        },
      },
    });

    return res.status(201).json(newCountdown);
  } else if (req.method === "GET") {
    const session = await getServerSession(req, res, authOptions);

    if (!session) {
      res.status(401).json({ message: "You must be logged in." });
      return;
    }

    const countdowns = await db.countdown.findMany({
      where: {
        user: {
          id: session.user.id,
        },
      },
    });

    return res.status(200).json(countdowns);
  } else {
    return res.status(500).json({ msg: "Some error happened" });
  }
}
