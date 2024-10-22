//  Question 1....................................................................

// 
// function findGrades(M) {
//   switch (true) {
//     case( M <= 10 ) :
//       return "E";
//     case ( M >=11 && M <= 20 ):
//       return "D";
//     case ( M >=21 && M <= 30 ):
//       return "C";
//     case ( M >=31 && M <= 40 ):
//       return "B";
//     case (M >=41 &&  M <= 50 ):
//       return "A";
//     default:
//       return "Invalid marks";
//   }
// }

//  Question 2 ......................................................................
   
// const C = "P"
// function getvalue(C) {
// const valueMap = {
// 'P': 'PrepBytes',
// 'p': 'PrepBytes',
// 'Z': 'Zenith',
// 'z': 'Zenith',
// 'E': 'Expert Coder',
// 'e': 'Expert Coder',
// 'D': 'Data Structure',
// 'd': 'Data Structure',
// };
// return valueMap[C] || 'invalid Input';
// }
// console.log(getvalue(C));



// Question 3..........................................................................

// const A = 2 , B = 5 , C = 4;
// function  Max_out_of_three(A,B,C){

//     if(A===B && B===C){
//     (return -1);
//     
//         return Math.max(A,B,C));
//   }

//  console.log( Max_out_of_three(A,B,C));
 

// 

//Question 4.

// const X = 2, Y = 9, Z = 23;
// function findSndSmallest(X, Y, Z) {
//     const numbers = [X, Y, Z];
    
//     numbers.sort((a, b) => a - b);
    
//     return numbers[1];
// }

// console.log(findSndSmalles(X,Y,Z));


//Question 5.......................................................................................................

// const A = 60, B = 100, C = 20;
//  Function Triangle_Check(A,B,C)
// {
//      
//       if ( A + B + C !== 180) {
//          return 'Invalid Triangle';

//     }
//      if (A > 90 || B > 90 || C >90) {
//          return 'obtuse';
//     }

//    return 'acute';
// }
// console.log(Triangle_check(A,B,C));
