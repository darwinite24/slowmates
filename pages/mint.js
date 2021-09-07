import Head from 'next/head'
import Web3 from "web3";
import { useState, useEffect } from 'react';

import {ADDRESS, ABI} from "../config.js"

export default function Mint() {

  // FOR WALLET
  const [signedIn, setSignedIn] = useState(false)

  const [walletAddress, setWalletAddress] = useState(null)

  // FOR MINTING
  const [how_many_testcases, set_how_many_testcases] = useState(1)

  const [testcaseContract, settestcaseContract] = useState(null)

  // INFO FROM SMART Contract

  const [totalSupply, setTotalSupply] = useState(0)

  const [saleStarted, setSaleStarted] = useState(false)

  const [testcasePrice, settestcasePrice] = useState(0)

  useEffect( async() => {

    signIn()

  }, [])

  async function signIn() {
    if (typeof window.web3 !== 'undefined') {
      // Use existing gateway
      window.web3 = new Web3(window.ethereum);

    } else {
      alert("No Ethereum interface injected into browser. Read-only access");
    }

    window.ethereum.enable()
      .then(function (accounts) {
        window.web3.eth.net.getNetworkType()
        // checks if connected network is mainnet (change this to rinkeby if you wanna test on testnet)
        .then((network) => {console.log(network);if(network != "rinkeby"){alert("You are on " + network+ " network. Change network to mainnet or you won't be able to do anything here")} });
        //.then((network) => {console.log(network);if(network != "main"){alert("You are on " + network+ " network. Change network to mainnet or you won't be able to do anything here")} });
        let wallet = accounts[0]
        setWalletAddress(wallet)
        setSignedIn(true)
        callContractData(wallet)

  })
  .catch(function (error) {
  // Handle error. Likely the user rejected the login
  console.error(error)
  })
  }

//

  async function signOut() {
    setSignedIn(false)
  }

  async function callContractData(wallet) {
    // let balance = await web3.eth.getBalance(wallet);
    // setWalletBalance(balance)
    const testcaseContract = new window.web3.eth.Contract(ABI, ADDRESS)
    settestcaseContract(testcaseContract)

    const salebool = await testcaseContract.methods.saleIsActive().call()
    // console.log("saleisActive" , salebool)
    setSaleStarted(salebool)

    const totalSupply = await testcaseContract.methods.totalSupply().call()
    setTotalSupply(totalSupply)

    const testcasePrice = await testcaseContract.methods.testcasePrice().call()
    settestcasePrice(testcasePrice)

  }

  async function minttestcase(how_many_testcases) {
    if (testcaseContract) {

      const price = Number(testcasePrice)  * how_many_testcases

      const gasAmount = await testcaseContract.methods.minttestcase(how_many_testcases).estimateGas({from: walletAddress, value: price})
      console.log("estimated gas",gasAmount)

      console.log({from: walletAddress, value: price})

      testcaseContract.methods
            .minttestcase(how_many_testcases)
            .send({from: walletAddress, value: price, gas: String(gasAmount)})
            .on('transactionHash', function(hash){
              console.log("transactionHash", hash)
            })

    } else {
        console.log("Wallet not connected")
    }

  };





  return (
    <div id="bodyy" className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
      <link rel="icon" href="/images/logo_transparent.png" />
        <meta property="og:title" content="testcases" key="ogtitle" />
        <meta property="og:description" content="testcases is a generative NFT collection." key="ogdesc" />
        <meta property="og:type" content="website" key="ogtype" />
        <meta property="og:url" content="https://testcases.io/" key="ogurl"/>
        <meta property="og:image" content="https://testcases.io/images/logo_transparent.png" key="ogimage"/>
        <meta property="og:site_name" content="https://testcases.io/" key="ogsitename" />
        <meta name="twitter:card" content="summary_large_image" key="twcard"/>
        <meta property="twitter:domain" content="https://testcases.io/" key="twdomain" />
        <meta property="twitter:url" content="https://testcases.io/" key="twurl" />
        <meta name="twitter:title" content="testcases" key="twtitle" />
        <meta name="twitter:description" content="testcases is a generative NFT collection." key="twdesc" />
        <meta name="twitter:image" content="https://testcases.io/images/logo_transparent.png" key="twimage" />
      </Head>


      <div >
          <div className="flex items-center justify-center w-full border-b-2 border-r-8 border-opacity-0 border-l-8	pb-6 border-opacity-0">
            <a href="/" className=""><img src="images/logo_transparent.png" width="108" alt="" className="logo_transparent-image" /></a>
            <nav className="flex flex-wrap flex-row justify-around PermanentMarker-Regular">
              <a href="/mint" className="text-4xl text-black hover:underline m-6">Mint</a>
              <a href="/#about" className="text-4xl text-black hover:underline m-6">About</a>
              <a href="/#rarity" className="text-4xl text-black hover:underline m-6">Rarity</a>
              <a href="/#team" className="text-4xl text-black hover:underline m-6">Team</a>
              <a href="https://twitter.com/testcases" className="text-4xl  hover:text-black m-6 text-blau">TWITTER</a>
              <a href="https://discord.gg/N239QjZFE2" className="text-4xl  hover:text-black m-6 text-blau">DISCORD</a>
            </nav>

          </div>
          <div className="flex auth my-8 font-bold  justify-center items-center vw2">
            {!signedIn ? <button onClick={signIn} className="montserrat inline-block border-2 border-white bg-black border-opacity-100 no-underline hover:text-black py-2 px-4 mx-4 shadow-lg hover:bg-blue-500 hover:text-gray-100">Connect Wallet with Metamask</button>
            :
            <button onClick={signOut} className="montserrat inline-block border-2 border-black bg-white border-opacity-100 no-underline hover:text-black py-2 px-4 mx-4 shadow-lg hover:bg-blue-500 hover:text-gray-100">Wallet Connected: {walletAddress}</button>}
          </div>
        </div>

        <div className="md:w-2/3 w-4/5">


          <div className="mt-6 border-b-2 py-6">

            <div className="flex flex-col items-center">

                <span className="flex PermanentMarker-Regular text-5xl text-black items-center bg-grey-lighter rounded rounded-r-none my-4 ">TOTAL testcaseS MINTED:  <span className="text-blau text-6xl"> {!signedIn ?  <>-</>  :  <>{totalSupply}</> } / 10000</span></span>

                <div id="mint" className="flex justify-around  mt-8 mx-6">
                  <span className="flex PermanentMarker-Regular text-5xl text-black items-center bg-grey-lighter rounded rounded-r-none px-3 font-bold">MINT</span>

                  <input
                                      type="number"
                                      min="1"
                                      max="20"
                                      value={how_many_testcases}
                                      onChange={ e => set_how_many_testcases(e.target.value) }
                                      name=""
                                      className="PermanentMarker-Regular pl-4 text-4xl  inline bg-grey-lighter  py-2 font-normal rounded text-grey-darkest  font-bold"
                                  />

                  <span className="flex PermanentMarker-Regular text-5xl text-black items-center bg-grey-lighter rounded rounded-r-none px-3 font-bold">testcaseS!</span>

                </div>
                {saleStarted ?
                <button onClick={() => minttestcase(how_many_testcases)} className="mt-4 PermanentMarker-Regular text-4xl border-6 bg-blau  text-black hover:text-black p-2 ">Mint {how_many_testcases} testcases for {(testcasePrice * how_many_testcases) / (10 ** 18)} ETH + GAS</button>
                  : <button className="mt-4 PermanentMarker-Regular text-4xl border-6 bg-blau  text-black hover:text-black p-2 ">SALE IS NOT ACTIVE OR NO WALLET IS CONNECTED</button>

              }

            </div>
            </div>

          </div>
    </div>
    )
  }
