import './App.css'
import HomePage from './pages/HomePage'

import { EthereumClient, w3mConnectors, w3mProvider } from '@web3modal/ethereum'
import { Web3Modal } from '@web3modal/react'
import { configureChains, createConfig, WagmiConfig } from 'wagmi'
import { mainnet, polygon } from 'wagmi/chains'

const chains = [mainnet, polygon]
const projectId = 'bbca516cbd2b4f0b7dac799da63350f1'

const { publicClient } = configureChains(chains, [w3mProvider({ projectId })])
const wagmiConfig = createConfig({
  autoConnect: true,
  connectors: w3mConnectors({ projectId, chains }),
  publicClient
})
const ethereumClient = new EthereumClient(wagmiConfig, chains)

function App() {

  return (
    <>
      <WagmiConfig config={wagmiConfig}>
      <QueryClientProvider client={queryClient}>
      <ThirdwebProvider clientId='1281d76cf6b180a329d018e5e03a8b1c' activeChain="ethereum" queryClient={queryClient}>
        <HomePage />
      </WagmiConfig>

      <Web3Modal projectId={projectId} ethereumClient={ethereumClient} />
    </>
  )
}

export default App
