import React,{ useState } from "react";
import ReactDOM from "react-dom";
import './style.css';

function Ball() {
    return (
        <div id="ball">
            <div id="output"></div>
            <div id="button-container">
                <Button 
                    text={'Find out'} 
                    bgColor={'blue'}/>
            </div>
        </div>
    );
}

function Button(props) {
    const { text, bgColor } = props;
 
    let answers = [
        // Положительные:
        'It is certain', 
        'Without a doubt',
        'You may rely on it',
        'It is decidedly so',
        // Нерешительно положительные
        'As I see it, yes',
        'Most likely',
        'Outlook good',
        'Signs point to yes',
        // Нейтральные
        'Reply hazy, try again',
        'Ask again later',
        'Better not tell you now',
        'Cannot predict now and ask again',
        // Отрицательные
        'Don’t count on it',
        'My reply is no',
        'Outlook not so good',
        'Very doubtful'
    ];

     
    let [ setNumber] = useState(answers);

    console.log(setNumber);

    function magicBall() {
 
        answers = answers[Math.floor(Math.random() * answers.length)];
        document.getElementById('output').innerHTML = answers;
    }

    return (
        <div >
            
            <button 
                className="button"
                style={{ backgroundColor: bgColor  }}
                onClick={ magicBall }
            >
                { text } 
            </button>
        </div>
    );
}

ReactDOM.render(<Ball/>, document.getElementById('root'));
