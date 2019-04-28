export function getRandomTime(isHour) {
    return isHour ? getRandomNumer(1, 12) : getRandomNumer(0, 60)
}

export function getRandomMeridiem() {
    return Math.random() > 0.5 ? 'AM' : 'PM'
}

function getRandomNumer(max, min) {
    return Math.floor(Math.random() * (+max - +min)) + +min;
}