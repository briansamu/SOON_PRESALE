import './App.css'
import HomePage from './pages/HomePage'

import {ThirdwebProvider} from '@thirdweb-dev/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

// import { EthereumClient, w3mConnectors, w3mProvider } from '@web3modal/ethereum'
// import { Web3Modal } from '@web3modal/react'
// import { configureChains, createConfig, WagmiConfig } from 'wagmi'
// import { arbitrum, mainnet, polygon } from 'wagmi/chains'

// const chains = [arbitrum, mainnet, polygon]
// const projectId = 'bbca516cbd2b4f0b7dac799da63350f1'

// const { publicClient } = configureChains(chains, [w3mProvider({ projectId })])
// const wagmiConfig = createConfig({
//   autoConnect: true,
//   connectors: w3mConnectors({ projectId, chains }),
//   publicClient
// })
// const ethereumClient = new EthereumClient(wagmiConfig, chains)

const queryClient = new QueryClient();

function App() {

  return (
    <>
      {/* <WagmiConfig config={wagmiConfig}> */}
      <QueryClientProvider client={queryClient}>
      <ThirdwebProvider clientId='8aabaf654adf254b535c1f3d40c95646' activeChain="ethereum" queryClient={queryClient}>
        <HomePage />
      </ThirdwebProvider>
      </QueryClientProvider>
      {/* </WagmiConfig> */}

      {/* <Web3Modal projectId={projectId} ethereumClient={ethereumClient} /> */}
    </>
  )
}

export default App
