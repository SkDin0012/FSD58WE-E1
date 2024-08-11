class ubercalculate{
    constructor(basefare,mile,time,bookingfee){

        this.basefare=basefare;
        this.mile=mile;
        this.time=time;
        this.bookingfee=bookingfee;
    }
    calculateP(distance,duration){
        const cost1=distance*this.mile;
        const cost2= duration*this.time;
        const totalcost=cost1+cost2+this.basefare+this.bookingfee;
        return totalcost;
    }
}

const calculate=new ubercalculate(5,1,4.5,2);
const distance=200;
const duration=60;

const Uberprice=calculate.calculateP(distance,duration);
console.log(Uberprice.toFixed(2));
