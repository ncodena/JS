//Create a class that represents a cat. It should have properties for tiredness, hunger, loneliness, and happiness

class Cat {
    constructor(name){
        this.name = name;
        this.tiredness = 10;
        this.hunger = 0;
        this.loneliness = 0;
        this.happiness = 0;
    }

    //Next, write methods that increase and decrease those properties. Call them something that actually represents what would increase or decrease these things, like “feed”, “sleep”, or “pet”.
    feed(amount){

    // if(this.hunger > amount){
    //     return this.hunger -= amount;
    // }

    return this.hunger = Math.max(0, this.hunger -= amount)
     
    }

    // feed(hunger, happiness){
    //     this.hunger -= hunger;
    //     this.happiness += happiness;
    // }
    sleep(hours) {
        //I added not also cecreasing the tiredness but also increasing hunger (it happens after a nap right?)
        return (this.tiredness = Math.max(0, this.tiredness - hours), this.hunger++);
    }

    //Last, write a method that prints out the cat’s status in each area. (Be creative e.g. Paws is really hungry, Paws is VERY happy.)
    printStatus(){
        console.log('Cat status');
        console.log(`Tiredness: ${this.getTiredness()}`);
        console.log(`Hunger: ${this.getHungerStatus()}`);
        // console.log();
    }

    getTiredness(){
        if(this.tiredness === 0){
            return `${this.name} is not sleepy`;
        } else if(this.tiredness > 0 && this.tiredness < 4){
            return `${this.name} needs to sleep a little bit`;
        } else {
            return `${this.name} is exhausted`;
        }
    }

    getHungerStatus() {
      if (this.hunger === 0) {
        return "Paws is full";
      } else if (this.hunger <= 5) {
        return "Paws is a bit hungry";
      } else {
        return "Paws is really hungry!";
      }
    }

}

const myCat = new Cat('Candy');
myCat.feed(2);
myCat.sleep(5);
console.log(myCat)