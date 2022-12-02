import React, { useContext } from 'react'
import { Loader } from './Loader';
import { useNavigate } from 'react-router-dom';
import { TransContext } from '../contextAPI/TransContext';
import Cookies from 'js-cookie';

const Input = ({ placeholder, name, type, value, handleChange }) => (
    <input
        placeholder={placeholder}
        type={type}
        step="0.0001"
        value={value}
        onChange={(e) => handleChange(e, name)}
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
    />
);

export default function Transaction() {

    const { transForm, send, handleFormData } = useContext(TransContext);
    const navigation=useNavigate()
    //const { value } = useContext(TransContext);
    //console.log(value);

    //console.log(checkMetaAccountConnected);

    /*
    const checkMetaAccountConnected = () => {
      console.log('working');
    }
    */

    const handleSubmit = async (e) => {
        Cookies.set("Status",false)
        Cookies.remove("Transhash")
        Cookies.remove("To")
        Cookies.remove("From")
        Cookies.remove("Amount")
        const { addressTo, amount, keyword, message } = transForm;

        e.preventDefault();

        if (!addressTo || !amount || !keyword || !message) { window.alert("fill complete details in transaction form to proceed!"); return;}
        await send();
        console.log("Submit");
       if(Cookies.get().Status==="true"){
            navigation('/success')
        }
        else{
            navigation('/failure')
        }
    }

    return (
        <>
            <div className="py-6 px-20 space-y-8 rounded-lg">
                <div className='my-10 text-white text-xl rounded-xl'>
                    <br></br>
                    <Input
                        placeholder="Address" name="addressTo" type="text" handleChange={handleFormData} required />
                    <br></br>
                    <br></br>
                    <Input placeholder="Amount(ETH)" name="amount" type="number" handleChange={handleFormData} required />
                    <br></br>
                    <br></br>
                    <Input placeholder="Keyword" name="keyword" type="text" handleChange={handleFormData} required />
                    <br></br>
                    <br></br>
                    <Input placeholder="Enter Message" name="message" type="text" handleChange={handleFormData} required />
                    <br></br>
                    <br></br>

                    {
                        false ? (
                            <Loader />
                        ) : (
                            <button
                                className='w-80 border-none h-10'
                                type='button'
                                onClick={handleSubmit}
                            >
                                Send Payment
                            </button>
                        )
                    }
                </div>
            </div>
        </>
    );
}
