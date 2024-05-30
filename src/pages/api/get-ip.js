import { getClientIp } from "request-ip";

export default function handler(req, res) {
  const clientIp = getClientIp(req);
  res.status(200).json({ ip: clientIp });
}
