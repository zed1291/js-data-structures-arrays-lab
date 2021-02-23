var drivers = ["Milo", "Otis", "Garfield"]

function destructivelyAppendDriver(name) {
    // drivers = [...drivers, name];
    drivers.push(name)
    return drivers
}

function destructivelyPrependDriver(name) {
    drivers.unshift(name)
    return drivers
}

function destructivelyRemoveLastDriver() {
    drivers.pop()
    return drivers
}

function destructivelyRemoveFirstDriver() {
    drivers.shift()
    return drivers
}

function appendDriver(name) {
    // return drivers.concat(name)
    return [...drivers, name]
}

function prependDriver(name) {
    return [name, ...drivers]
}

function removeLastDriver() {
    return drivers.slice(0, drivers.length-1)
}

function removeFirstDriver() {
    return drivers.slice(1, drivers.length)
}