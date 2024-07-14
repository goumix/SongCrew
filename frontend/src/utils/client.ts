import { createPublicClient, http } from "viem";
import { sepolia } from "viem/chains";

export const publicClient = createPublicClient({
  chain: sepolia,
  transport: http("https://sepolia.infura.io/v3/56684c6420b04faa933fdebe9f534e86"),
});
