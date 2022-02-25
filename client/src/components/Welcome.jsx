import React, { useContext } from 'react';
import { AiFillPlayCircle } from 'react-icons/ai';
import { SiEthereum } from 'react-icons/si';
import { BsInfoCircle } from "react-icons/bs";
import { Loader } from "./";
import { TransectionContext } from '../context/TransectionContext';
import { shortenAddress } from '../utils/shortenAddress';

const companyCommonStyles = "min-h-[70px] sm:px-0 px-2 sm:min-w-[120px] flex justify-center items-center border-[0.5px] border-gray-400 text-sm font-light text-white";

const Input = ({ placeholder, name, type, value, handleChange }) => (
  <input placeholder={placeholder} type={type} name={name}
    value={value} 
    step="0.0001" 
    onChange={(e) =>
    handleChange(e, name)}
    className="w-full p-2 mt-1 border-none bg-transparent text-white outline-none white-glassmorphism"
  />
)

const Welcome = () => {
  const { connectWallet, currentAccount, handleChange, formData , sendTransection , loading} = useContext(TransectionContext);
  console.log(currentAccount)

  const handleSubmit = (e) => {
    const { addressTo, amount, keyword, message } = formData;
    e.preventDefault();
    console.log(addressTo , amount )

    // if(!addressTo || !amount || !keyword || !message) return;
    sendTransection();
    // console.log("hello")
  }

  return (
    <div className='flex w-full justify-center items-center '>
      <div className='flex md:flex-row flex-col items-start justify-between md:p-20 py-12 px-4'>
        <div className='flex flex-1 justify-start items-start flex-col mf:mr-10'>
          <h1 className='text-white text-base text-3xl sm:text-5xl text-gradient py-1'>Send Crypto
            <br /> Across the world
          </h1>
          <p className='text-white text-left mt-5 font-light md:w-9/12 w-11/12 text-base'>Explore the crypto world. Buy and sell cryptocurrencies easily on Krypto</p>
          {!currentAccount && (<button type='button' className='text-white flex flex-row p-2 mt-3 bg-[#2952e3] rounded-full cursor-pointer hover:bg:[#2546bd] '><AiFillPlayCircle className='text-white mr-2' fontSize={20} /> <p className='text-white text-base font-semibold' onClick={connectWallet}>Connect Wallet</p> </button>)}

          <div className="grid sm:grid-cols-3 grid-cols-2 w-full mt-10">
            <div className={`rounded-tl-2xl ${companyCommonStyles}`}>
              Reliability
            </div>
            <div className={companyCommonStyles}>Security</div>
            <div className={`sm:rounded-tr-2xl ${companyCommonStyles}`}>
              Ethereum
            </div>
            <div className={`sm:rounded-bl-2xl ${companyCommonStyles}`}>
              Web 3.0
            </div>
            <div className={companyCommonStyles}>Low Fees</div>
            <div className={`rounded-br-2xl ${companyCommonStyles}`}>
              Blockchain
            </div>
          </div>
        </div>
        <div className="flex flex-col flex-1 items-center justify-start w-full mf:mt-0 mt-10">
          <div className="p-3 flex justify-end items-start flex-col rounded-xl h-40 sm:w-72 w-full my-5 eth-card .white-glassmorphism ">
            <div className="flex justify-between flex-col w-full h-full">
              <div className="flex justify-between items-start">
                <div className="w-10 h-10 rounded-full border-2 border-white flex justify-center items-center">
                  <SiEthereum fontSize={21} color="#fff" />
                </div>
                <BsInfoCircle fontSize={17} color="#fff" />
              </div>
              <div>
                <p className="text-black font-bold text-sm">
                  {/* {shortenAddress(currentAccount)} */}
                  {/* {shortenAddress(currentAccount)} */}
                  {shortenAddress(currentAccount)}
                  {/* {currentAccount} */}
                </p>
                <p className="text-white font-semibold text-lg mt-1">
                  Ethereum
                </p>
              </div>
            </div>
          </div>
          <div className="p-3 sm:w-96 w-full flex flex-col justify-start items-center blue-glassmorphism">
            <Input type="text" placeholder="Address To" name="addressTo" handleChange={handleChange}/>
            <Input type="text" placeholder="Amount (ETH)" name="amount" handleChange={handleChange}/>
            <Input type="text" placeholder="Keyword (Gif)" name="keyword" handleChange={handleChange}/>
            <Input type="text" placeholder="Enter Message" name="message" handleChange={handleChange}/>
            <div className='h-[1px] w-full bg-gray-400 my-2' />
            {loading ? <Loader /> : (
              <button type='button' className='mt-2 border-[1px] p-2 border-[#3d4f7c] hover:bg-[#3d4f7c] rounded-full cursor-pointer text-white w-full'
              onClick={handleSubmit}>
                Send</button>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Welcome