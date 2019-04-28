export function getFormatedTime(hour, minute, meridiem) {
    const formatedHour = hour < 10 ? '0' + hour : hour
    const formatedMinute = minute < 10 ? '0' + minute : minute

    return formatedHour + ':' + formatedMinute + ' ' + meridiem
}