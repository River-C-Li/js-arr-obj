//  // arry object part 1 
// // solution-1
const str = "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26";
for (let i = 0; i < 1; i++) {
	if (str[i] == "\n") {
		continue;
	} console.log(str)
} 
let newstr=["ID","Name","Occupation,Age",
        "42","Bruce","Knight","41",
        "57","Bob","Fry Cook","19",
        "63","Blaine","Quiz Master","58",
        "98","Bill","Doctor's Assistant","26"]


// // soulution-2
const csv = "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26" ;
const mulitRow = csv.split('\n');  
    for (let i = 0; i < mulitRow.length; i++) {
        const singlerow = mulitRow[i].split(',');
		const finalRows = singlerow.join(" ")  
		console.log(finalRows); 
    }



// // // part 2
// // / solution-1
let part1out=["ID","Name","Occupation,Age",
    "42","Bruce","Knight","41",
    "57","Bob","Fry Cook","19",
    "63","Blaine","Quiz Master","58",
    "98","Bill","Doctor’s Assistant","26"]
    
    let rowh=part1out.slice(0,3) 
    let row1= part1out.slice(3,7)
    let row2= part1out.slice(7,11)
    let row3= part1out.slice(11,15)
    let row4= part1out.slice(15,19)

    let rowall=[rowh,row1,row2,row3,row4]	   
    console.log(rowall)

// // solution-2
const csv = "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26" 
const mulitRow = csv.split('\n');  
    for ( i = 0; i < mulitRow.length; i++) {
        let singlerow = mulitRow[i].split(',');
    
        console.log(singlerow)
    }


// // part 3
//  let partTwoOut=[
//         [ 'ID', 'Name', 'Occupation,Age' ],
//         [ '42', 'Bruce', 'Knight', '41' ],
//         [ '57', 'Bob', 'Fry Cook', '19' ],
//         [ '63', 'Blaine', 'Quiz Master', '58' ],
//         [ '98', 'Bill', 'Doctor’s Assistant', '26' ]
//       ]

let personOne={id:"42",name:"Bruce",Occupation:"Knight", Age:"41"}
let personTwo={
        id: "57", name: "Bob", occupation: "Fry Cook", age: "19" 
    }
 let personThree={ 
        id: "63", name: "Blaine", occupation: "Quiz Master", age: "58" 
    }
let personFour={id: "98", name: "Bill", occupation: "Doctor`s Assistant", age: "26" }

let objarr=[personOne, personTwo, personThree, personFour]
console.log(objarr)

// // solution-2
    const csv = "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26" 
    const mulitRow = csv.split('\n');  
    const titles = mulitRow[0].split(',');
        for ( i = 1; i < mulitRow.length; i++) {
            let singlerow = mulitRow[i].split(',');                
        console.log("{ " + titles[0]+": " + singlerow[0] +", " + titles[1]+": " 
            + singlerow[1]  +", " +  titles[2]+": " + singlerow[2]  +", " +  titles[3]+": " + singlerow[3] + "}," )
        }



// // part 4
let part3out= [
    { id: '42', name: 'Bruce', Occupation: 'Knight', Age: '41' },
    { id: '57', name: 'Bob', occupation: 'Fry Cook', age: '19' },
    { id: '63', name: 'Blaine', occupation: 'Quiz Master', age: '58' },
    {id: '98', name: 'Bill', occupation: 'Doctor`s Assistant', age: '26'}
  ]
  part3out.pop()
  part3out.splice(1, 0, { id: "48", name: "Barry", occupation: "Runner", age: "25" })
  part3out.push({ id: "7", name: "Bilbo", occupation: "None", age: "111" })
  console.log(part3out)












    
    

     
