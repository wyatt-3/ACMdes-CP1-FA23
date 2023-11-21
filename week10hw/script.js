particles = []

function setup() {
    createCanvas(windowWidth, windowHeight, WEBGL)
    angleMode(DEGREES)
}

function draw() {
    background(0, 0, 0)

    rotateX(sin(frameCount / 12) * 360)
    rotateY(cos(frameCount / 12) * 360)

    translate(0, 0, sin(frameCount) * 100)

    directionalLight([255], createVector(0, 0, -10))

    if (random(1) > .99) {

        var x = random(-200, 200)
        var y = random(-200, 200)
        var z = random(-200, 200)

        var pos = createVector(x, y, z)


        for (var i = 0; i < 600; i++) {

            var r = map(sin(frameCount), 0, 0, 0, 0) + random (-100, 100)
            var g = map(sin(frameCount / 2), 0, 0, 0, 0) + random(-50, 50)
            var b = map(cos(frameCount / 4), 0, 0, 0, 0) + random(-50, 50)
            
            var c = color(r, g, b)


            var p = new Particles(pos, c)
            particles.push(p)
        }
    }

    for (var i = particles.length -1; i>= 0; i--) {
        if (dist(particles[i].pos.x, particles[i].pos.y, particles[i].pos.z, 0, 0, 0) , 100) {
        particles[i].update()
        particles[i].show()
    } else {
        particles.splice(i, 1)
    }

}
}



class Particles {
    constructor(pos, c) {
        this.pos = createVector(pos.x, pos.y, pos.z)
        this.vel = p5.Vector.random3D().normalize().mult(random(4, 6))

        this.c = c

        this.w = random(4, 10)
    }
    update() {
        this.pos.add(this.vel)
    }
    show() {
        push()

        noStroke()
        fill(this.c)

        translate(this.pos.x, this.pos.y, this.pos.z)
        sphere(this.w)


        pop()
    }
}