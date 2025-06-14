info.onCountdownEnd(function () {
    game.over(true)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function (sprite, otherSprite) {
    otherSprite.destroy()
    info.changeScoreBy(1)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.destroy()
    info.changeLifeBy(-1)
})
let babyDino: Sprite = null
let tourist: Sprite = null
scene.setBackgroundImage(sprites.background.cityscape2)
let Cardinal = sprites.create(assets.image`Mama`, SpriteKind.Player)
controller.moveOnlyOnscreenWithArrows(Cardinal, controller.Speeds.Fast)
scroller.scrollBackgroundWithSpeed(-50, 0)
info.startCountdown(15)
animation.runImageAnimation(
Cardinal,
[img`
    ........................
    ........................
    ..............22........
    ..............222.......
    ..............2222......
    ..............22222.....
    ..............222222....
    ..............22222ff...
    ..............222fffff..
    ..............22ffffff..
    2222222222222222fdffff5.
    2222222222222222ffffff55
    2222222222222222ffffff5.
    ...22222222222222fffff..
    ...222222222222222ffff..
    ...222222222222222fff...
    ...222222222222222222...
    ....22222222222222222...
    .....222222222222222....
    ......2222222222222.....
    ........222222222.......
    .........5...5..........
    ........5...5...........
    ........................
    `,img`
    ........................
    ........................
    ..............22........
    ..............222.......
    ..............2222......
    ..............22222.....
    ..............222222....
    ..............22222ff...
    ..............222fffff..
    ..............22ffffff..
    2222222222222222fdffff5.
    2222222222222222ffffff55
    2222222222222222ffffff5.
    ...22222222222222fffff..
    ...222222222222222ffff..
    ...222222222222222fff...
    ...222222222222222222...
    ....22222222222222222...
    .....222222222222222....
    ......2222222222222.....
    ........222222222.......
    .........5...5..........
    ..........5...5.........
    ........................
    `],
100,
true
)
forever(function () {
    tourist = sprites.createProjectileFromSide(assets.image`Tourist`, -90, 0)
    tourist.y = randint(15, 115)
    tourist.setKind(SpriteKind.Enemy)
    pause(2100)
    animation.runImageAnimation(
    tourist,
    assets.animation`Animated Tourist`,
    100,
    true
    )
})
forever(function () {
    babyDino = sprites.createProjectileFromSide(assets.image`Baby`, -90, 0)
    babyDino.y = randint(15, 115)
    pause(1000)
    animation.runImageAnimation(
    babyDino,
    [img`
        . . . . . . . . . . . . 
        . . . . 2 2 . . . . . . 
        . . . 2 2 2 . . . . . . 
        . . 2 2 2 2 . . . . . . 
        . f f 2 2 2 . . . . . . 
        . d f f 2 2 2 . . . . . 
        5 f f f 2 2 2 2 2 2 2 2 
        . f f 2 2 2 2 2 2 2 2 2 
        . f f 2 2 2 2 2 2 2 2 2 
        . 2 2 2 2 2 2 2 2 2 . . 
        . . 2 2 2 2 2 2 2 . . . 
        . . . 2 2 2 2 2 2 . . . 
        `,img`
        . . . . . 2 . . . . . . 
        . . . . 2 2 . . . . . . 
        . . . 2 2 2 . . . . . . 
        . . 2 2 2 2 . . . . . . 
        . f f 2 2 2 . . . . . . 
        . d f f 2 2 2 . . . . . 
        5 f f f 2 2 2 2 2 2 2 2 
        . f f 2 2 2 2 2 2 2 2 2 
        . f f 2 2 2 2 2 2 2 2 2 
        . 2 2 2 2 2 2 2 2 2 . . 
        . . 2 2 2 2 2 2 2 . . . 
        . . . 2 2 2 2 2 2 . . . 
        `],
    100,
    true
    )
})
