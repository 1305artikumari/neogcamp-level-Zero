// console.log("hello world" );
// const number=new Array(1,2,3,4,5);
// console.log(number);
// const name='Arti';
// const age=20;
// const rating=4.5;
// const isCool=true;
// const x=null;
// const y=undefined;
// console.log(typeof isCool);
// console.log(typeof x);
// concatination
// console.log('my name is '+ name +' and age  is'  + age);
// template string
// const hello='my name is ${name} and age  is ${age}';
// console.log(hello);
// const s='hello world';
// console.log(s.length);
// console.log(s.toUpperCase());
// console.log(s.toLowerCase());
// console.log(s.substring(0,3));
// console.log(s.split(''));
//Arrays
// const number=new Array(1,2,3,4,5);
// console.log(number);
// const fruits=['apple','mango','pear',10,true];

// console.log(fruits);
// console.log(Array.isArray(number));
// fruits[5]='banana';
// console.log(fruits);
// fruits.push(true);
// console.log(fruits);
// fruits.pop();
// console.log(fruits);
// fruits.unshift('apple');
// console.log(fruits);
// const person ={
//     firstName:'Arti',
//     lastName:'kumari',
//     age: 25,
//     hobbies:  ['movie' ,'cooking' ,'singing'],
//     address :{
//         state: 'bihar' ,
//         city:'muzaffarpur' ,
//         street:'majhaulia road nh28'
//     }

// }
// const {firstName,lastName}=person;
// // console.log(firstName)
// person.email='arti1305@123';
// console.log(person.email)
// const todos=  [
//     {
//        id: 1,
//        text: 'Take out trash',
//        isCompleted : true

//     },
//     {
//         id: 2,
//         text: 'Meeting with boss',
//         isCompleted : true
 
//      },
//      {
//         id: 3,
//         text: 'Dentist appt',
//         isCompleted : true
 
//      }
    

// ];
// console.log(todos[1].text)
// for
// for(let i=0;i<=10;i++)
// {
//     console.log('for loop Number:' +i);
// }
// while
// let i=0;
// while(i<10){
//     console.log('while loop number is ${i} ');
//     i++;

// }
// for(let i=0;i<todos.length;i++)
// {
//     console.log(todos[i].text);
// }
// for Each
// const todoText =todos.map(function(todo)
// {
//     return todo.text;
    
// });
// console.log(todoText);
// const x=10;
// if(x===10)
// {
// console.log('x is 10');
// }
// else if(x>10)
// {
//     console.log('x is greater than 10');
// }
// else{
//     console.log('x is Not 10');
//     }
// const x=10;
// const color=x>10 ?'true':'false';
// switch(color)
// {
//     case 'red':
//       console.log('color is red');
//       break;
//     case 'blue':
//         console.log('color is blue');
//         break;
//     default: 
//     console.log('color is Not red or blue');  
//     break; 

// }
// function addNums(num1=1 ,num2=3)
// {
//     console.log(num1+num2);
// or 
// rturn num1+num2;
// // }
// // addNums()
// // addNums(2,3)
// console.log(addNums(2,3))
// const addNums =(num1 =1, num2=2)=>  num1+num2;
// console.log(5,5);

// function person(firstName ,lastName,dob)
// {
//     this.firstName=firstName;
//     this.lastName=lastName;
//     this.dob=dob;
// }
// const person1 =new person('Arti','kumari','2-3-1980');
// console.log(person1);
// console.log(window);
const items=document.querySelectorAll('.items')
items.style.color='green';
















