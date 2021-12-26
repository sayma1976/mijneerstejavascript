function paintwall() {
    console.log('Paint wall red.')
}
paintwall()
//Single argument
function paintwall1(colorwall) {
    console.log('Pain wall ' + colorwall)
}
paintwall1('green.')
paintwall1('blue.')
//Multiple arguments
function paintwall2(north, south) {
    console.log('The north wall has been painted ' + north + ', the south-east wall has been painted ' + south)
}
paintwall2('orange', 'grey.')
paintwall2('grey', 'orange.')