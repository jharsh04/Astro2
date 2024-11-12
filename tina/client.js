import { tinaClient } from "../tina/client";
export const tinaClient = createClient({
    clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID,
    token: process.env.TINA_TOKEN,
    branch: "harsh",
  });