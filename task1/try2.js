
// function Bird(type, color){
//     this.type = type;
//     this.color = color;
//     this.eggs = 0;
//     this.fly = function(){
//         console.log(`${this.color} ${this.type} is flying.`);
//     }
//     this.walk = function(){
//         console.log(`${this.color} ${this.type} is walking`);
//     }
//     this.lay_egg = function() {
//         this.eggs++
//         console.log(`${this.color} ${this.type} laid an egg`);
//     }
// }

// function Parrot(type,color) {
//     Bird.call(this, type, color);
//     this.talk = function() {
//         console.log(`${this.color} ${this.type} is talking`)
//     };
// }

// function Raven(type,color){
//     Bird.call(this, type, color);
//     this.doingNothing = function() {
//         console.log(`${this.color} ${this.type} is doing nothing`)
//     };
// }

// let sinica = new Bird('sinica', "blue");
// sinica.lay_egg();
// console.log(sinica.eggs)

// let ara = new Parrot('ara', 'green');
// ara.fly();
// ara.talk();