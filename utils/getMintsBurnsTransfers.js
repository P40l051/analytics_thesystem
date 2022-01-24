/*
 WARNING: this function works correctly only for transfers.
 Be careful using it for balace transfers:
- on balance.transferToEvent is OK only mints result 
- or balance.transferFromEvent is OK only burns result
*/
export default function getMintsBurnsTransfers(_transfers) {
    var mints = _transfers.reduce(function (tot, arr) {
        if ((arr.from == null)) { return tot + parseInt(arr.valueExact) }
        else { return tot }
    }, 0)
    var burns = _transfers.reduce(function (tot, arr) {
        if ((arr.to == null)) { return tot + parseInt(arr.valueExact) }
        else { return tot }
    }, 0)

    var transfers = _transfers.reduce(function (tot, arr) {
        if ((arr.from != null) & (arr.to != null)) { return tot + parseInt(arr.valueExact) }
        else { return tot }
    }, 0)
    return { mints, burns, transfers }
}