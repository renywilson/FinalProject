class Student{
    constructor(name,age,marks){
        this.name=name;
        this.age=age;
        this.marks=marks;

    }
    setPlacementAge(minPlacementAge){
        console.log(this);
        return (minMarks)=>{
            console.log('InsideEligible for current Company',this)
            if(this.marks>minMarks && this.age>minPlacementAge)
            {
                console.log(this.name+"  is ready for placement");

            }
            else{
                console.log(this.name+"  is  NOT ready for placement");  
            }
        }
    }
   
}
const Yash=new Student('Yash',23,43);
const Vaibav=new Student('vaibav',13,40);
Yash.setPlacementAge(18)(40);
Vaibav.setPlacementAge(18)(40);
