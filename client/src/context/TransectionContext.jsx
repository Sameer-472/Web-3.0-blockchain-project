import React, { useEffect, useState } from 'react';
import { ethers } from 'ethers';
import { contractABI, contractAddress } from '../utils/constant';

export const TransectionContext = React.createContext();

const { ethereum } = window;

const getEthereumContract = () => {
    const provider = new ethers.providers.Web3Provider(ethereum);
    const signer = provider.getSigner();
    const transectionContract = new ethers.Contract(contractAddress, contractABI, signer);
    console.log({ provider, signer, transectionContract });
    return transectionContract;
}

export const TransectionProvider = ({ children }) => {
    const [currentAccount, setcurrentAccount] = useState("");
    const [formData, setformData] = useState({ addressTo: "", amount: "", keyword: "", message: "" })
    const [loading, setloading] = useState(false);
    const [transectionCount, setTransectionCount] = useState(localStorage.getItem("transectionCount"));
    const [transections, setTransections] = useState([])
    // const [transe]

    const { addressTo, amount, keyword, message } = formData;
    console.log(amount, addressTo, keyword)
    const handleChange = (e, name) => {
        setformData((prevState) => ({ ...prevState, [name]: e.target.value }))
    }


    const getAllTransections = async () => {
        try {
            const transectionContract = getEthereumContract();
            const availableTransections = await transectionContract.getAllTransection();
            const structeredTransections = availableTransections.map((item) => ({
                addressTo: item.receiver,
                addressFrom: item.sender,
                timestamp: new Date(item.timestamp.toNumber() * 1000).toLocaleString(),
                message: item.message,
                keyword: item.keyword,
                amount: parseInt(item.amount._hex) / (10 ** 18)
            }))
            setTransections(structeredTransections);
            console.log(structeredTransections);
            console.log(availableTransections);
        } catch (error) {
            console.log(error)
        }
    }


    const checkWalletIsConnected = async () => {
        if (!ethereum) return window.alert("Please install metamask");
        const accounts = await ethereum.request({ method: 'eth_accounts' });
        console.log(accounts);
        getAllTransections();

        try {
            if (accounts.length) {
                setcurrentAccount(accounts[0]);
                // getEthereumContract();
                getAllTransections();
            }
        } catch (error) {
            console.log(error)
        }
    }

    const checkIfTransectioExist = async () => {
        try {
            const transectionContract = getEthereumContract();
            const transectionCount = await transectionContract.getTransectionCount();
            setTransectionCount(localStorage.setItem("transectionCount", transectionCount))
        } catch (error) {
            console.log(error)
        }
    }

    const connectWallet = async () => {
        try {
            if (!ethereum) return window.alert('Please install metamask');
            const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
            setcurrentAccount(accounts[0]);

        } catch (error) {
            console.log(error)
        }
    }


    const sendTransection = async () => {
        try {
            if (!ethereum) return alert("PLease install Metamask")
            const { addressTo, amount, keyword, message } = formData;
            const transectionContract = getEthereumContract();
            const parsedAmount = ethers.utils.parseEther(amount);
            console.log(amount)

            await ethereum.request({
                method: 'eth_sendTransaction',
                params: [{
                    from: currentAccount,
                    to: addressTo,
                    gas: "0x5208", //2100 GWEI
                    value: parsedAmount._hex,
                }]
            })

            const transectionHash = await transectionContract.addToBlockChain(addressTo, message, parsedAmount, currentAccount, keyword);
            setloading(true);
            console.log(`Loading-${transectionHash.hash}`);
            await transectionHash.wait();
            setloading(false);
            console.log(`Success-${transectionHash.hash}`);
            const transectionCount = await transectionContract.getTransectionCount();
            setTransectionCount(transectionCount.toNumber())
            console.log()
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        checkWalletIsConnected();
        checkIfTransectioExist();
    }, [])


    return (
        <TransectionContext.Provider value={{ connectWallet, currentAccount, handleChange, formData, sendTransection, loading , transections }}>
            {children}
        </TransectionContext.Provider>
    )
}




