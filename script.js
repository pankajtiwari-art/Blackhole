let back = document.getElementById("back")
let mid = document.getElementById("middle")
let front = document.getElementById("front")

let b = back.getContext("2d")
let m = mid.getContext("2d")
let f = front.getContext("2d")

let w = window.innerWidth
let h = window.innerHeight

back.width = mid.width = front.width = w
back.height = mid.height = front.height = h


class Particle{

constructor(x,y,r){

this.ox = x
this.oy = y
this.br = r

this.re = Math.random()*r
this.a = Math.random()*Math.PI*2

this.q = 0.3 + Math.random()*0.2
this.size = Math.random()*3+1

this.col = "rgba(255,"+(120+Math.random()*80)+",80,0.8)"

this.tail=[]
this.tl = Math.floor(Math.random()*6+6)

}


move(cx,cy){

this.ox = cx
this.oy = cy

let radius = this.br + this.re

this.x = this.ox + radius*Math.cos(this.a)
this.y = this.oy + radius*this.q*Math.sin(this.a)

this.tail.push({x:this.x,y:this.y,a:this.a})

if(this.tail.length>this.tl){

this.tail.shift()

}

this.a += (this.br-this.re)/1200

}


draw(){

for(let i=0;i<this.tail.length;i++){

let t = this.tail[i]

if(Math.floor(t.a/Math.PI)%2){

b.beginPath()
b.arc(t.x,t.y,this.size,0,Math.PI*2)

b.fillStyle=this.col
b.fill()

}else{

f.beginPath()
f.arc(t.x,t.y,this.size,0,Math.PI*2)

f.fillStyle=this.col
f.fill()

}

}

}

}



let particles=[]
let total = 600

for(let i=0;i<total;i++){

particles.push(new Particle(w/2,h/2,120))

}



function draw(){

b.globalCompositeOperation="lighter"
f.globalCompositeOperation="lighter"

for(let p of particles){

p.move(w/2,h/2)
p.draw()

}

m.beginPath()

m.arc(w/2,h/2,120,0,Math.PI*2)

m.fillStyle="black"
m.fill()

}



function loop(){

requestAnimationFrame(loop)

b.clearRect(0,0,w,h)
m.clearRect(0,0,w,h)
f.clearRect(0,0,w,h)

draw()

}



loop()



window.addEventListener("resize",()=>{

w = window.innerWidth
h = window.innerHeight

back.width = mid.width = front.width = w
back.height = mid.height = front.height = h

})
