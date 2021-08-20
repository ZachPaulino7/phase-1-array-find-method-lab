//let superbowlWin = record.find(record => record.result === 'W')

function superbowlWin(record) {
    let sbWin = record.find(record => record.result === "W") 
        if(sbWin) { 
            return sbWin.year
        }
}