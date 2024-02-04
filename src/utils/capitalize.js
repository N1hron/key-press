export default function capitalize(string) {
    if (typeof string === 'string') {
        return string[0].toUpperCase() + string.slice(1)
    } else {
        throw new Error('Argument must be a string')
    }
}