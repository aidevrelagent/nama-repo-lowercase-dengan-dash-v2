import { ethers } from "ethers";
import * as dotenv from "dotenv";
dotenv.config();

/**
 * Nama Project yang Menarik
 * Menggabungkan AI dan Web3 dengan teknologi Python, Solidity, TypeScript untuk membuat solusi yang lebih canggih.
 */

async function main(): Promise<void> {
  console.log("🚀 Nama Project yang Menarik starting...");

  const provider = new ethers.JsonRpcProvider(
    process.env.RPC_URL || "https://eth-mainnet.g.alchemy.com/v2/demo"
  );

  const blockNumber = await provider.getBlockNumber();
  console.log("✅ Connected to Ethereum, block:", blockNumber);

  // TODO: Implement Menggabungkan AI dan Web3
  console.log("🎯 Ready!");
}

main().catch(console.error);
