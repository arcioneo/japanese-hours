import { hours } from './japanese-numbers'
import { tens } from './japanese-numbers'
import { fives } from './japanese-numbers'
import { units } from './japanese-numbers'
import { minuteTens } from './japanese-numbers'
import { halfHour } from './japanese-numbers'

export function getNumberAsText(hour, minute, meridiem) {
    meridiem = meridiem === 'AM' ? 'gozen' : 'gogo'
    return 'Ima ' + meridiem + ' ' + hours[hour] + ' ' + getMinutesAsText(minute) + ' desu'
}

function getMinutesAsText(minute) {
    if(isHalfHour(minute)) {
        minute = halfHour[minute]
    }
    else if (isMultipleOf10(minute)) {
        minute = tens[minute]
    } else if (minute % 5 === 0) {
        minute = fives[minute]
    } else {
        if (Math.floor(minute / 10) > 0) {
            minute = minuteTens[Math.floor(minute / 10) * 10] + units[minute % 10]
        } else {
            minute = units[minute]
        }
    }
    return minute
}

function isMultipleOf10(minute) {
    return minute % 10 === 0;
}

function isHalfHour(minute) {
    return minute === 30;
}
