import { ethers } from "ethers";
import contractData from "../blockchain/deployments/MediloomFileStorage.json";

const PRIVATE_KEY = "add ganache private_key_1 here"; // 🔐 From Ganache
const GANACHE_RPC = "http://127.0.0.1:7545"; // Ganache default

export async function connectContract() {
  try {
    const provider = new ethers.JsonRpcProvider(GANACHE_RPC);
    const signer = new ethers.Wallet(PRIVATE_KEY, provider);

    const contract = new ethers.Contract(
      contractData.address,
      contractData.abi,
      signer
    );
    console.log("🔗 Using contract address:", contractData.address);

    console.log("✅ Connected to contract with direct signer");
    return contract;
  } catch (error) {
    console.error("❌ Contract connection failed:", error);
    return null;
  }
}
