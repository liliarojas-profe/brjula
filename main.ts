basic.forever(function () {
    basic.showNumber(input.compassHeading())
    if (input.compassHeading() == 0) {
        basic.showArrow(ArrowNames.North)
    } else if (input.compassHeading() > 0 && input.compassHeading() < 180) {
        basic.showArrow(ArrowNames.West)
    } else if (input.compassHeading() > 180 && input.compassHeading() < 360) {
        basic.showArrow(ArrowNames.East)
    }
})
