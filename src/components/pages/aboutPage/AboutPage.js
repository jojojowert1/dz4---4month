import React from 'react';

const AboutPage = () => {

    const inputValue = (event)=>{
        console.log(event.target.value*10)

    }



    return (
        <div>
            <input onMouseLeave={inputValue} type="number"/>
        </div>
    );
};

export default AboutPage;