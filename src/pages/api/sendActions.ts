import type { NextApiRequest, NextApiResponse } from "next";
import fs from "fs";

import { pageReducer } from "@/makasi/core/PageEdition/Page.reducer";

type TData = {
  success: boolean;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<TData>
) {
  const { actions } = req.body;

  const pageDataRaw = fs.readFileSync(`data/home.json`, "utf-8");

  let pageData = JSON.parse(pageDataRaw);

  for (const action of actions) {
    pageData = pageReducer(pageData, action);
  }

  fs.writeFileSync(`data/home.json`, JSON.stringify(pageData));

  res.status(200).json({
    success: true,
  });
}
