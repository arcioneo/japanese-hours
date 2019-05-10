import React, { useState } from 'react'
import TimeGuesser from './timeGuesser.js'
import { getRandomTime, getRandomMeridiem } from './timeGenerator'
import { getNumberAsText } from './numberToTextConverter'
import './japaneseTimeQuizz.css'

export default function JapaneseTimeQuizz() {
    const [hour, setHour] = useState(getRandomTime(true))
    const [minute, setMinute] = useState(getRandomTime(false))
    const [meridiem, setMeridiem] = useState(getRandomMeridiem())
    const [answer, setAnswer] = useState(getNumberAsText(hour, minute, meridiem))

    function tryAnother() {
        const hr = getRandomTime(true)
        const min = getRandomTime(false);
        const mer = getRandomMeridiem(false);
        const ans = getNumberAsText(hr, min, mer)

        setHour(hr)
        setMinute(min)
        setMeridiem(mer)
        setAnswer(ans)
    }

    return (
        <div className="japaneseTimeQuizz-container">
            <div className="japaneseTimeQuizz">
                < TimeGuesser hour={hour} minute={minute} meridiem={meridiem} answer={answer} tryAnother={tryAnother} />
            </div >
            <div className="linksToOtherApps">
                <a href="http://japanese-numbers-trivia.herokuapp.com/">Click to study Japanese Numbers...</a>
            </div>
        </div>
    )
}