controller.A.onEvent(ControllerButtonEvent.Repeated, function () {
    hotBallon.top += -1
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    hotBallon.top += -1
})
let hotBallon: Sprite = null
hotBallon = sprites.create(assets.image`meinBild`, SpriteKind.Player)
hotBallon.setStayInScreen(true)
let gegner = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . 2 2 2 . . . . . . . 
    . . . . . . 2 2 2 . . . . . . . 
    . . . . . . 2 2 2 . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Enemy)
gegner.setVelocity(10, 0)
gegner.setPosition(4, 59)
gegner.x = 10
forever(function () {
    hotBallon.y += 1
    pause(100)
    hotBallon.y += 1
})
