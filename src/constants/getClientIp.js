// lib/getClientIp.js
import requestIp from 'request-ip';

export function getClientIp(req) {
  const ip = requestIp.getClientIp(req);
  return ip;
}
