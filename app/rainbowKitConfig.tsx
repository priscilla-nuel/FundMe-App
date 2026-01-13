"use client"


import { getDefaultConfig } from "@rainbow-me/rainbowkit"
import { defaultConfig } from "next/dist/server/config-shared"
import { arbitrum, base, mainnet, optimism, anvil, zksync, sepolia, celo } from "wagmi/chains"

export default getDefaultConfig({
    appName: "FundMe App",
    projectId: process.env.NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID!,
    chains: [mainnet, optimism, arbitrum, base, zksync, sepolia, anvil, celo],
    ssr: false

})
