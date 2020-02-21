module.exports = function calculateHanoi(diskN, speed) {
    let turns = 2**diskN - 1;
    let seconds = turns / (speed/3600);
    return  {turns,  seconds}
}