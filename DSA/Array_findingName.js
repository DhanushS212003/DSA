// JSON JavaScript Object Notation
//Given a array of student objects 
// 0. Find a student whose name is Nanda.
//1. Find the eldest student
// 2. Find the students whose physics is more than 80
// 3. Count the number of students whose total average is more than 70. 

let array_student_obj 
 = [{name:"Nanda",
	 age:19,
	 salary: 10000, 
	 marks:{
			maths:80, 
			physics: 78, 
			chemistry:90
		}
	 },
	 {name:"Deepika",
	 age:18,
	 salary: 10000, 
	 marks:{
			maths:95, 
			physics: 95, 
			chemistry:89
		}
	 },
	 {name:"Boopalan",
	 age:21,
	 salary: 10000, 
	 marks:{
			maths:76, 
			physics: 81, 
			chemistry:76
		}
	 },{name:"Karthi",
	 age:22,
	 salary: 10000, 
	 marks:{
			maths:67, 
			physics: 51, 
			chemistry:39
		}
	 }];

     // 0 //

// let n=false;
// let find="Nanda";

// for(let i=0; i<array_student_obj.length; i++){
//     if(find==array_student_obj[i].name){
//         n=true;
//         break;
//     }
// }
// if(n){
//     console.log(find + " is found")
// }
// else{
//     console.log(find + " is not found")
// }

     // 0 //

     // 1 //

    //  let max = array_student_obj[0].age;
    //  let namee = "Nanda"

    //  for(let i=0; i<array_student_obj.length; i++){
    //     if(array_student_obj[i].age>max){
    //         max=array_student_obj[i].age;
    //         namee=array_student_obj[i].name
    //         }
    //  }

    // console.log(namee);

     // 1 //

     // 2 //

     let max = array_student_obj[0].marks.physics;
     let object=array_student_obj[0].name;
     for(let i=0; i<array_student_obj.length; i++){
        if(array_student_obj[i].marks.physics>max){
            max=array_student_obj[i].marks.physics;
            if(max = array_student_obj[i].marks.physics){
                output=array_student_obj[i].name
                console.log(output)
            }
        }
     }

     // 2 //