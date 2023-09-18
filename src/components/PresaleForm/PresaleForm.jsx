import './PresaleForm.css'
import { Web3Button } from "@web3modal/react";

import { useAccount, useContractRead, useBalance, useContractReads, useNetwork,useContractWrite, useDisconnect,
         usePrepareContractWrite, useWaitForTransaction,useSwitchNetwork,erc20ABI as ERC20_ABI, useConnect } from "wagmi";

import { BigNumber, utils } from 'ethers';

import { useRef, useState,useEffect } from 'react';

import PRESALE_ABI from './PRESALE_ABI.json';

import {
  usdcDecimal,
  tokenDecimal,
  ETHChainId,
  usdcAddress,
  tokenAddress,
  presaleAddress,
  fundAddress

} from './config.js';


const PresaleForm = () => {
  const [amount, setAmount] = useState('10');
  const [soonAmount, setSoonAmount] = useState('1000000');

  const [buyMethod, setBuyMethod] = useState("usdc")
  const {  address : account, isConnecting, isDisconnected,isConnected } = useAccount()
  const { connect, connectors, isLoading, pendingConnector } = useConnect()
  const { switchNetwork } = useSwitchNetwork()
  const { chain } = useNetwork()

  const { data: allowanceUsdc } = useContractRead({
    address: usdcAddress,
    abi: ERC20_ABI,
    functionName: "allowance",
    enabled: !!account, 
    args: [account, presaleAddress],
    watch: true,
    chainId : ETHChainId
  })

  const { data: balanceToken } = useContractRead({
    address: tokenAddress,
    abi: ERC20_ABI,
    functionName: "balanceOf",
    enabled: !!account, 
    args: [account],
    watch: true,
    chainId : ETHChainId
  })

  const { data: balanceUSDC } = useContractRead({
    address: usdcAddress,
    abi: ERC20_ABI,
    functionName: "balanceOf",
    enabled: true, 
    args: [fundAddress],
    watch: true,
    chainId : ETHChainId
  })

  const { config: approveUsdc } = usePrepareContractWrite({
    address: usdcAddress,
    abi: ERC20_ABI,
    functionName: "approve", 
    args: [presaleAddress, utils.parseUnits(amount, usdcDecimal).toString()],
    enabled: !!account  && buyMethod == "usdc" && chain && chain?.id == ETHChainId && !!amount
  })


  const { data: approveUsdcData, write: approveUsdcFn, reset : approveUsdcReset } = useContractWrite(
    approveUsdc
  )


  const { status: approveUsdcStatus } = useWaitForTransaction({
    hash: approveUsdcData?.hash
  })

  const { config: buyWithUsdc } = usePrepareContractWrite({
    address: presaleAddress,
    abi: PRESALE_ABI,
    functionName: "buyTokensByUSDC",
    args: [utils.parseUnits(amount, usdcDecimal).toString()],
    enabled: !!account && allowanceUsdc && amount && BigNumber.from(allowanceUsdc).gte(utils.parseUnits(amount, usdcDecimal)) 
  })

  const { data: buyWithUsdcData, write: buyWithUsdcFn ,reset : buyWithUsdcReset} = useContractWrite(
    buyWithUsdc
  )

  const { status: buyWithUsdcStatus } = useWaitForTransaction({
    hash: buyWithUsdcData?.hash
  })

  /*  */

  const { config: buyWithEth } = usePrepareContractWrite({
    address: presaleAddress,
    abi: PRESALE_ABI,
    functionName: "buyTokensByETH",
    overrides: { value: amount },
    enabled: !!account && buyMethod == "eth" && chain?.id == ETHChainId
  })

  const { data: buyWithEthData, write: buyWithEthFn, reset : buyWithEthReset } = useContractWrite(
    buyWithEth
  )

  const { status: buyWithEthStatus } = useWaitForTransaction({
    hash: buyWithEthData?.hash
  })

  const handleInput = (e) => {
    console.log("target value", e.target.value);
    let v = e.target.value;
    if (v) {
      setAmount(v);
      setSoonAmount(Math.round(v / 0.00001));
      console.log(soonAmount);
    }
  }

  useEffect(() => {
    if (!!account ) {
      if(chain?.id != ETHChainId){
        switchNetwork?.(ETHChainId)
      }
    }
  }, [])

  useEffect(() => {
    if (!!account ) {
      if(chain?.id != ETHChainId){
        switchNetwork?.(ETHChainId)
      }
    }
  }, [chain?.id])

  console.log("ACC", account);
  console.log("A_USDC", allowanceUsdc);
  console.log("P_TOKEN", balanceToken?.toString());
  console.log("F_USDC", balanceUSDC?.toString());
  console.log("%%%", parseInt(utils.formatUnits(balanceUSDC, usdcDecimal-2) / 10504441))

  return <div className="presaleform">
    <div className='presaleform__form'>
      <h3 id='earlybirdround'>Early Bird Round</h3>

      <div className="presaleform__form-pwrapper">
        <p id='priceoutof1'>PRICE $0.00001 / 1 $Soon</p>
        <div className="presaleform__bar">
          <span className={`presaleform__bar-progress w-[${balanceUSDC && parseInt(utils.formatUnits(balanceUSDC, usdcDecimal-2) / 10504441)}%]`}></span>
          {/* <span className={`presaleform__bar-progress w-[10%]`}></span> */}
          <div className='presaleform__bar-label'>Next stage regular presale price $.00002</div>
        </div>
        <p className='presaleform__p-bold'>{`USDC $${balanceUSDC && utils.formatUnits(balanceUSDC, usdcDecimal)} / $10,504,441.72`}</p>
      </div>
      
      <p className='presaleform__p-bold'>{`Your Purchased $Soon = ${balanceToken && utils.formatUnits(balanceToken, tokenDecimal)}`}</p>
      <p id='fr-disclaimer'>*First round USDC only*</p>

      <div className="presaleform__form-inputwrapper">
        <div className="presaleform__fullinput">
          <input type='number' className='presaleform__input' name="usdc-input" onChange={handleInput} value={amount}></input>
          <label className='presaleform__label' htmlFor="usdc-input">USDC</label>
        </div>

        <div className="presaleform__fullinput">
          <input id='soon-input' disabled type='number' className='presaleform__input' name="soon-input" value={soonAmount}></input>
          <label className='presaleform__label' htmlFor="soon-input">$Soon</label>
        </div>
      </div>

      <div className="presaleform__form-pwrapper">
        <p className='presaleform__p-bold'>**Must make request ticket for Hawaii Whitelist**</p>
        <p className='presaleform__p-bold'>LIMITED TO FIRST 100 SPOTS</p>
      </div>
      {/* <button type='submit' className='presaleform__buynowbtn'
      >Buy Now</button> */}

      {!account ? (
        <>
          <Web3Button className="web3button" icon='hide' label='Connect Wallet' balance='hide'/>
        </>
      ) : (
        <>
          {buyMethod == "eth" && (
            <button
            type="button"
            className="presaleform__buynowbtn"
            onClick={() => buyWithEthFn()}
            >
            BUY $SOON
          </button>
          )}

          {buyMethod == "usdc" && allowanceUsdc != undefined &&
            BigNumber.from(allowanceUsdc).lt(utils.parseUnits(amount, usdcDecimal)) && (
              <button
                className="presaleform__buynowbtn"
                onClick={() => approveUsdcFn?.()}
              >
                APPROVE
              </button>
            )}

          {buyMethod == "usdc" && !!allowanceUsdc &&
            BigNumber.from(allowanceUsdc).gte(utils.parseUnits(amount, usdcDecimal)) && (
            <button
              type="button"
              className="presaleform__buynowbtn"
              onClick={() => buyWithUsdcFn?.()}
            >
              BUY $SOON
            </button>
          )}
        </>
      )}
    </div>
  </div>;
};

export default PresaleForm;
