import React, { useEffect, useState } from "react";
import { ethers } from "ethers";
import Cookies from 'js-cookie'
import { contractABI, contractAddress } from "../utils/info";

export const TransContext = React.createContext();

const { ethereum } = window;

// window.ethereum;

// fetching ethereum contract

const fetchContract = () => {
    const provider = new ethers.providers.Web3Provider(ethereum);
    const signer = provider.getSigner();
    const transContract = new ethers.Contract(contractAddress, contractABI, signer);

    console.log({
        provider,
        signer,
        transContract
    });

    return transContract;
};

// fetchContract();


export const TransactionProvider = ({ children }) => {
    const [MetaAccount, setCurrentAccount] = useState("");
    const [transForm, setTransForm] = useState({ addressTo: "", amount: "", keyword: "", message: "" });
    const [Loading, setLoading] = useState(false);
    const [transactionCount, setNumberofTransactions] = useState(localStorage.getItem("transactionCount"));

    //----------------------------------------------------------------------------------------------

    const handleFormData = (e, name) => {
        setTransForm((prevState) => ({ ...prevState, [name]: e.target.value }));
    };

    //-----------------------------------------------------------------------------------------------

    const checkWallet = async () => {
        if (!ethereum) {
            return alert("Metamask Not Installed 😢");
        }

        const meta_accounts = await ethereum.request({ method: 'eth_accounts' });

        console.log(meta_accounts);

        if (meta_accounts.length) {
            setCurrentAccount(meta_accounts[0]);
        } else {
            console.log('Not Found 😢');
        }
    };

    //-------------------------------------------------------------------------------------------------

    const checkMetaAccountConnected = async () => {
        try {
            if (!ethereum)
            {
                return alert("Install & Connect MetaMask 🔴");
            } 
            const accounts = await ethereum.request({ method: "eth_requestAccounts", });

            setCurrentAccount(accounts[0]);
            window.location.reload();

        } catch (error) {
            console.log(error);
            alert(error);
        }
    };

    const send = async () => {
        try {
            if (!ethereum) {
                return alert("Install & Connect MetaMask 👍");
            }
            const { addressTo, amount, keyword, message } = transForm;
            Cookies.set("To",addressTo)
            Cookies.set("Amount",amount)
            Cookies.set("From",MetaAccount)
            const transContract = fetchContract();
            const parsedAmount = ethers.utils.parseEther(amount);

            console.log("Connnecting ....");
            console.log(parsedAmount);

            await ethereum.request({
                method: "eth_sendTransaction",
                params: [{
                    from: MetaAccount,
                    to: addressTo,
                    gas: "0x5208",
                    value: parsedAmount._hex,
                }],
            });

            const transHash = await transContract.addToBlockchain(addressTo, parsedAmount, message, keyword);

            // -----------------------------------------------loading area------------------------------------------------------------

            setLoading(true);
            console.log(`🔴 Loading - ${transHash.hash}`);
            await transHash.wait();
            console.log(`🟢 Success - ${transHash.hash}`);
            Cookies.set("Status",true)
            Cookies.set("Transhash",transHash.hash)
            setLoading(false);

            // -----------------------------------------------loading area------------------------------------------------------------

            const transactionsCount = await transContract.getTransactionCount();

            setNumberofTransactions(transactionsCount.toNumber());
           
        } catch (error) {
            console.log(error);
            console.log("Failed 😢");
            Cookies.set("Status",false)
        }
    };

    useEffect(() => {
        checkWallet();
        return () => {
            console.log("Connected");
        }
    }, [transactionCount]);

    return (
        <TransContext.Provider value={{ checkMetaAccountConnected, MetaAccount, transForm, handleFormData, send }} >
            {children}
        </TransContext.Provider>
    );
};