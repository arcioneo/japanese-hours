import React, { useState } from 'react'
import AnalogClock, { Themes } from 'react-analog-clock'
import { getFormatedTime } from './timeFormatter'
import './timeGuesser.css'
import './japaneseTimeQuizz.css'

export default function TimeGuesser(props) {
    const formatedTime = getFormatedTime(props.hour, props.minute, props.meridiem)
    const [visibleAnswer, setVisibleAnswer] = useState(false)
    const changeVisibleAnswer = () => {setVisibleAnswer(!visibleAnswer)}

    function tryAnother() {
        setVisibleAnswer(false)
        props.tryAnother()
    }

    return (
        <div className="timeGuesser">
            <div className="clockContainer">
                <AnalogClock width={200} theme={Themes.light} minutes={props.minute} hour={props.hour} seconds={0} showSmallTicks={true}/>
            </div>
            <div className="whatTimeIsIt">
                <font>Ima nan-ji desuka</font>
            </div>
            <div className="formatedTime">
                {formatedTime}
            </div>
            <div className="answer" onClick={changeVisibleAnswer} style={{display: visibleAnswer ? 'block' : 'none' }}>
                {props.answer}
            </div>
            <div className="answer" onClick={changeVisibleAnswer} style={{display: visibleAnswer ? 'none' : 'block' }}>
                <font>SEE ANSWER</font>
            </div>
            <button className="tryAnother" onClick={tryAnother}>Try Another</button>
        </div >
    )
}

