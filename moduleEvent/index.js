const EventEmitter=require("events")

const raceDriver=new EventEmitter() //subjet(raceDriver)
//observer 1--doctor
raceDriver.on("race won",()=>{
    console.log("he is safe");
})

//observer 1--doctor
raceDriver.on("race won",()=>{
    console.log("he could have done it better");
})

//observer 1--doctor
raceDriver.on("race won",()=>{
    console.log("we are happy");
})

raceDriver.emit("race won")
//note:EventEmitter is a class. raceDriver is a subject in which we are storing object
//.on("eventName") is used used to create the events and to call or trigger that event we are using .emit("eventName")