export default function getRandomHsl() {
    const hue = Math.floor(Math.random() * 360) // 0 - 359
    
    return `hsl(${hue}, 100%, 75%)`
}