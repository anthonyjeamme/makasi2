import type { NextApiRequest, NextApiResponse } from "next";

type TData = {
  images: any[];
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<TData>
) {
  const { searchTerm } = req.body;

  res.status(200).json({
    images: await searchUnsplashImage(searchTerm),
  });
}

const searchUnsplashImage = async (searchTerm: string) => {
  const ACCESS_KEY = process.env["UNSPLASH_ACCESS_KEY"];

  const URL = `https://api.unsplash.com/search/photos/?query=${encodeURIComponent(
    searchTerm
  )}&client_id=${ACCESS_KEY}`;

  const { results } = await fetch(URL).then((result) => result.json());

  return results;
};
