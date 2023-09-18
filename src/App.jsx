import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import './App.css'
import HomePage from './pages/HomePage'

import { EthereumClient, w3mConnectors, w3mProvider } from '@web3modal/ethereum'
import { Web3Modal } from '@web3modal/react'
import { configureChains, createConfig, WagmiConfig } from 'wagmi'
import { mainnet, polygon } from 'wagmi/chains'
import { ThirdwebProvider } from "@thirdweb-dev/react";

const chains = [mainnet, polygon]
const projectId = 'bbca516cbd2b4f0b7dac799da63350f1'

const { publicClient } = configureChains(chains, [w3mProvider({ projectId })])
const wagmiConfig = createConfig({
  autoConnect: true,
  connectors: w3mConnectors({ projectId, chains }),
  publicClient
})
const ethereumClient = new EthereumClient(wagmiConfig, chains)

const queryClient = new QueryClient();

function App() {

  return (
    <>
      <WagmiConfig config={wagmiConfig}>
        <QueryClientProvider client={queryClient}>
          <ThirdwebProvider clientId='ae4efc1f98b3bdc61212a6b5fefe5a16' activeChain="ethereum" queryClient={queryClient}> 
            
            <HomePage />
            <Web3Modal projectId={projectId} ethereumClient={ethereumClient} />
            
          </ThirdwebProvider>
        </QueryClientProvider>
      </WagmiConfig>
    </>
  )
}

export default App
