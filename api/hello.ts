import type { VercelRequest, VercelResponse } from "@vercel/node";

export default (req: VercelRequest, res: VercelResponse) => {
  // test
  const { name = "World" } = req.query;
  res.status(200).send(`Hello ${name}!`);
};
