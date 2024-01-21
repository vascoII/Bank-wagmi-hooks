"use client";

import { ChakraProvider } from "@chakra-ui/react";

import "@rainbow-me/rainbowkit/styles.css";

import { getDefaultWallets, RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { configureChains, createConfig, WagmiConfig } from "wagmi";
import { hardhat } from "wagmi/chains";
import { publicProvider } from "wagmi/providers/public";

const { chains, publicClient } = configureChains(
  [sepolia, hardhat],
  [
    alchemyProvider({ apiKey: "45vXfTKFhGaf0bjXD2swWvStqZSXCSMX" }),
    publicProvider(),
  ]
);

const { connectors } = getDefaultWallets({
  appName: "Bank-wagmi-hooks",
  projectId: "ecec9db6a9904ec5f449aae1e0dc97b7",
  chains,
});

const wagmiConfig = createConfig({
  autoConnect: false,
  connectors,
  publicClient,
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ChakraProvider>
          <WagmiConfig config={wagmiConfig}>
            <RainbowKitProvider chains={chains}>{children}</RainbowKitProvider>
          </WagmiConfig>
        </ChakraProvider>
      </body>
    </html>
  );
}
