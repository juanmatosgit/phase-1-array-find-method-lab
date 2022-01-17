function superbowlWin (array) {
    let yearWon = array.find(index => index.result === "W" )
    if(yearWon) {
        return yearWon.year
} else {
    return undefined
}
}



