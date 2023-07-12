'use strict';
new TypeIt('.home__title--strong', {
    loop: true,
    speed: 50,
}) // Yum Yum
.move(-7)
.type('Amazing ')
.pause(1000)
.move(null, {to:'END'})
.delete()
.type('Fashion')
.pause(1000)
.delete(7)
.move(-7)
.delete(7)
.type('to')
.pause(1000)
.delete(2)
.type('Front-end Engineer')
.delete()
.go();