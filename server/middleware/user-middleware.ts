import type { IncomingMessage, ServerResponse } from "http";
import { getCookie } from 'h3'

export default async (req: IncomingMessage, res: ServerResponse) => {
  const userCookie = getCookie(req, "userCookie");

  // @ts-ignore
  req.user = userCookie;
};
