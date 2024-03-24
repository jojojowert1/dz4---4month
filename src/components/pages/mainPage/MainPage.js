import React, {useState} from 'react';


const MainPage = () => {

    const [isFlipped, setIsFlipped] = useState(false);

    const handleDoubleClick = () => {
        setIsFlipped(!isFlipped);
    };

    const flipStyle = {
        transform: isFlipped ? 'rotate(180deg)' : 'rotate(0deg)',
        transition: 'transform 0.5s',
        cursor: 'pointer'
    };


    const answerAge = ()=>{
       const alertAge = prompt('Введите ваш возраст')

       if (alertAge >= 18){
           alert('Вам можно войти')
       }else if (alertAge < 18){
           alert('Вам нельзя войти')
       }
   }

    return (
        <div>
            <button onClick={answerAge}>alert</button>

            <button style={flipStyle} onDoubleClick={handleDoubleClick}>переверни меня</button>
        </div>
    );
};

export default MainPage;