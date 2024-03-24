import React from 'react';

const FormPage = () => {

    const sendData =  {title: "Hello", body: "world"}
    const changeInput = (event)=>{
        console.log(event.target.value)
    }

    const submit = (event)=>{
        event.preventDefault()
        console.log(sendData)
    }
    const resetForm = ()=>{
        console.log('отменено')
    }


    return (
        <div>
            <form onSubmit={submit} onReset={resetForm} >
                <input type="text" placeholder="Name" />
                <input type="email" placeholder="Email"/>
                <input type="password" placeholder="Password"/>
                <button type="submit">send</button>
                <button type='reset'>cancel</button>
            </form>
        </div>
    );
};

export default FormPage;