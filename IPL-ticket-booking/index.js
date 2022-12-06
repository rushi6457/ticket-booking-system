

// // class category {

// //     constructor(VVIP,VIP,general) {
        
// //         this._VVIP = VVIP;
// //         this.VIP = VIP;
// //         this.general = general;
// //     }


// // }

// // class VVIP{

// //     constructor(age,gender,category) {

// //         this._age = age;
// //         this._gender = gender;
// //         // this._category = category;
// //     }

// //     get category(){
// //         return this._category;
// //     }
// //     set category(value) {

// //         this._category = value;
// //     }
// // }

// // // let c1 = new VVIP(20,"M","VIP")

// // // console.log(c1)

// // class general extends VVIP{

// //     constructor(age,gender){

// //         super("general",age,gender)

// //     }
// // }

// // // let c1 = new general(30,"male")

// // // console.log(c1)

// // // single floor

// // class floor{

// //     constructor(seats_no, category){

// //             this.seats_no = seats_no;
// //             this.category = category;

// //             this._isBooked = false;

// //     }

// //     get isBooked(){

// //         return this._isBooked;
// //     }

// //     set isBooked(value){

// //         this._isBooked = value;
// //     }
// // }

// // // let f1 = new floor(20,general,false);

// // // console.log(f1)

// class Person {

//     constructor(name,age,gender,category){

//         this._name = name;
//         this._age = age;
//         this._gender = gender;
//         this._category = category;
//     }
//     get category(){

//         return this._category 
//     }
//     set category(category){

//         this._category = value;
//     }

// }

// class VVIP extends Person {

//     constructor(name,age,gender){
//         super("VVIP",name,age,gender);
//     }
// }

// class VIP extends VVIP{

//     constructor(name,age,gender){

//         super("VIP",name,age,gender);
//     }
// }

// class General extends VIP{

//     constructor(name,age,gender){
//         super("general",name,age,gender);
//     }
// }

// //creating slots
// class Slots {

//     constructor(category,number){

//         this._category=category;
//         this._number = number;
//         this._isBooked = isBooked;

//     }
//     get isBooked(){

//         return this._isBooked;
//     }
//     set isBooked(value){

//         this._isBooked = value;
//     }
// }

// //for individual floor

// class Individualfloor{

//     constructor(floorNumber,maxSpots){

//         this._floorNumber = floorNumber;
//         this.spot = [];

//         for(let i=0;i<maxSpots;i++){

//             if(i>=0 && i<50){

//                 this.spot.push(new Slots("VVIP",i));
//             }
//             else if(i>=50 && i<100){

//                 this.spot.push(new Slots("VIP",i));
//         }
//         else {
                
//                 this.spot.push(new Slots("general",i));
//         }
//     }
// }
// get spot(){
// return  this._spot;
// }
// }

// //for building

// class Building{
//     constructor(number){
//     this._floors = [];
//     this._totalFloors = _totalFloors;

//     for(let i=0;i<_totalFloors.length;i++){

//         this._floors.push(new Individualfloor(i,300));
//      }

// }

//     get _totalFloors(){

//         return this._totalFloors;
//     }
//    get _floors(){
    
//             return this._floors;
//         }
        
//    }   
//    sittingPerson(person){

//     let slot = this.findSlot(person.category)

//     if(slot){

//         this.bookSlot(slot){
//             let ticket = new Ticket(slot.floorNumber,slot.number);

//             alert("Your ticket is booked");

//             let category = document.getElementById("category").value;

//             let name = document.getElementById("name").value;

//             let gender = document.getElementById("gender").value;

//             let age = document.getElementById("age").value;

//             getDetails(ticket,category, name, gender, age)
//         }
//         else{

//             alert("Sorry, there is no slot available")
//             return false;
//         }

       
//     }

    

//     findSlot(category){
           
//         for (let i = 0; i < this._numberOfFloor; i++) {
//             for (let slot of this._floors[i]._spot) {
//                 if (slot.category == category && !slot.isBooked) {
//                     return {
//                         floorNumber: i,
//                         slot: slot
//                     }
//                 }
//             }
          
//         }
//         return false;
      
//    }
//    bookSlot(slot) {
//     slot.slot.isBooked = true;
//     // console.log("Slot is booked")
//     return true;
//     }
  
// }
// class Ticket {
//     constructor(floorNumber, slotNumber) {
//         this.floorNumber = floorNumber;
//         this.slotNumber = slotNumber;
//         this.day = new Date()
//     }
  
//     function submit() {
//     let category = document.getElementById("category").value;
//     let name = document.getElementById("name").value;
//     let gender = document.getElementById("gender").value;
//     let age = document.getElementById("age").value;
//     if (category === "none") {
//         alert("Please select category")
//     } else if (category == "VVIP") {
//         let vvip = new VVIP(name, age, gender, )
//         passToBuilding(vvip)
//         console.log("vvip")
//     } else if (category == "VIP") {
//         let vip = new VIP(name, age, gender)
//         passToBuilding(vip)
//         console.log("vip")
//     } else {
//         let general = new General(name, age, gender)
//         passToBuilding(general)
//         console.log("general")
//     }
// }
// // let bl1 = new Builidng(3);
// // //console.log(bl1)
// function passToBuilding(v) {
//     bl1.sittingPerson(v)
// }
// let container = document.getElementById("container")

// function getdetails(ticket, category, name, gender, age) {
//     container.innerHTML = null;
//     let {
//         floorNumber,
//         slotNumber,
//         day
//     } = ticket;
//     let div = document.createElement("div");
//     let yourTicket = document.createElement("h2");
//     yourTicket.innerText = "Your Ticket"
//     let fN = document.createElement("p");
//     fN.innerText = `Floor Number: ${floorNumber}`;
//     let sN = document.createElement("p");
//     sN.innerText = `Seat Number: ${slotNumber}`
//     let Day = document.createElement("p");
//     Day.innerText = `Date&Time: ${day}`;
//     let cat = document.createElement("p");
//     cat.innerText = `Category: ${category}`
//     let Name = document.createElement("h3");
//     Name.innerText = `Name: ${name}`
//     let Gen = document.createElement("p");
//     Gen.innerText = `Gender: ${gender}`
//     let Age = document.createElement("p");
//     Age.innerText = `Age: ${age}`
//     div.append(yourTicket, fN, sN, Day, cat, Name, Gen, Age);
//     container.append(div)
// }
// }

// getdetails()



class Person {
    constructor(category, name, age, gender) {
        this._category = category;
        this.name = name;
        this.age = age;
        this.gender = gender;
    }
    get category() {
        return this._category;
    }
    set category(value) {
        this._category = value;
    }
}
// inheriteting properties for VVIPs,
class VVIP extends Person {
    constructor(name, age, gender) {
        super("VVIP", name, age, gender)
    }
}
// creating class for VIPs
class VIP extends Person {
    constructor(name, age, gender) {
        super("VIP", name, age, gender)
    }
}
// creating class for GENRALs
class General extends Person {
    constructor(name, age, gender) {
        super("General", name, age, gender)
    }
}
// creting slot
class Slot {
    constructor(category, number) {
        this.category = category;
        this.number = number;
        this._isBooked = false
    }
    get isBooked() {
        return this._isBooked;
    }
    set isBooked(value) {
        this._isBooked = value;
    }

}
// individual floor
class IndividualFloor {
    constructor(floorNumber, maxSpots) {
        this.floorNumber = floorNumber;
        this._diffSpots = [];
        for (let i = 0; i < maxSpots; i++) {
            if (i >= 0 && i <= 99) {
                this._diffSpots.push(new Slot("VVIP", i))
            } else if (i >= 100 && i <= 199) {
                this._diffSpots.push(new Slot("VIP", i))
            } else {
                this._diffSpots.push(new Slot("General", i))
            }
        }
    }
    get diffSpots() {
        return this._diffSpots;
    }
}
// IPT STADIUM //BUILDING
class Builidng {
    constructor(number) {
        this._floors = [];
        this._numberOfFloor = number;

        for (let i = 0; i < number; i++) {
            this._floors.push(new IndividualFloor(i, 300))
        }
    }
    get numberOfFloor() {
        return this._numberOfFloor;
    }

    get floors() {
        return this._floors;
    }
    //after booking the vacant slot now the job is to deliver the ticket to buyers
    sittingPerson(person) {
        let slot = this.findSlot(person.category)
        if (slot) {
            this.bookSlot(slot);
            let ticket = new Ticket(slot.floorNumber, slot.slot.number)
            // console.log(ticket)
            alert("Please Get your Ticket")
            //////////

            let category = document.getElementById("category").value;
            let name = document.getElementById("name").value;
            let gender = document.getElementById("gender").value;
            let age = document.getElementById("age").value;
            getdetails(ticket, category, name, gender, age)
            /////////
        } else {
            //console.log("Slot no available")
            alert("Sorry There is no slot available Now")
            return false;
        }
    }
    // finding vacant slot for all gategories
    findSlot(category) {

        for (let i = 0; i < this._numberOfFloor; i++) {
            for (let slot of this._floors[i]._diffSpots) {
                if (slot.category == category && !slot.isBooked) {
                    return {
                        floorNumber: i,
                        slot: slot
                    }
                }
            }
        }
        return false;
    }
    // after finding the vacant slot now the job is to book the vacant slot
    bookSlot(slot) {
        slot.slot.isBooked = true;
        // console.log("Slot is booked")
        return true;
    }

}

class Ticket {
    constructor(floorNumber, slotNumber) {
        this.floorNumber = floorNumber;
        this.slotNumber = slotNumber;
        this.day = new Date()
    }
}

function submit() {
    let category = document.getElementById("category").value;
    let name = document.getElementById("name").value;
    let gender = document.getElementById("gender").value;
    let age = document.getElementById("age").value;
    if (category === "none") {
        alert("Please select category")
    } else if (category == "VVIP") {
        let vvip = new VVIP(name, age, gender, )
        passToBuilding(vvip)
        console.log("vvip")
    } else if (category == "VIP") {
        let vip = new VIP(name, age, gender)
        passToBuilding(vip)
        console.log("vip")
    } else {
        let general = new General(name, age, gender)
        passToBuilding(general)
        console.log("general")
    }
}
let bl1 = new Builidng(3);
//console.log(bl1)
function passToBuilding(v) {
    bl1.sittingPerson(v)
}
let container = document.getElementById("container")

function getdetails(ticket, category, name, gender, age) {
    container.innerHTML = ""
    let {
        floorNumber,
        slotNumber,
        day
    } = ticket;
    let div = document.createElement("div");
    let yourTicket = document.createElement("h2");
    yourTicket.innerText = "Your Ticket"
    yourTicket.id=  "yourTicket"
    let fN = document.createElement("p");
    fN.innerText = `Floor Number: ${floorNumber}`;
    fN.id = "fN"
    let sN = document.createElement("p");
    sN.innerText = `Seat Number: ${slotNumber}`
    sN.id = "sN"
    let Day = document.createElement("p");
    Day.innerText = `Date & Time: ${day}`;
    Day.id = "day"
    let cat = document.createElement("p");
    cat.innerText = `Category: ${category}`
    cat.id = "cat"
    let Name = document.createElement("h3");
    Name.innerText = `Name: ${name}`
    Name.id = "name"
    let Gen = document.createElement("p");
    Gen.innerText = `Gender: ${gender}`
    Gen.id = "gen";
    let Age = document.createElement("p");
    Age.innerText = `Age: ${age}`
    Age.id ="age"
    div.append(yourTicket, fN, sN, Day, cat, Name, Gen, Age);
    container.append(div)
}