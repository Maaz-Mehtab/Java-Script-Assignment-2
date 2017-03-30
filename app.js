//...................Q1............................

// var studentNames = [];


//......................Q2......................

// refrence = new Array();



//........................Q3...................

// var String = ["Mango", "Apple", "Banana"];
// document.write("String array "+String);


//..............................Q4.................

// var number = [4, 5, 6, 2, 3, 4, 5, ];
// document.write("integer number array "+number);


//..............................Q5..................

// var boolean = [true, false];
// document.write("boolean array"+boolean);

//.............................Q6.................

// var mixedArr = [7176, "Maaz", true];
// document.write("mixed Array " + mixedArr);


//.........................Q7.........................

// var network = ["Warid", "Mobilink", "Ufone", "Telenor", "Zong"];
// console.log("available mobile networks in Pakistan" + network[]);


//..........................Q8..................

// var education = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil", "PhD"];
// document.write("available education qualifications in Pakistan" + education);


// ...........................Q9.....................
// for (var i = 1; i <= 4; i++) {
//     var movie = prompt("Enter Movie Name " + i);
//     var entermovie = [movie];
//     document.write("  " + entermovie);
// }
// document.write("<br> Length of Array : " + entermovie.length);


//.........................Q10..................

// var array = ["Volvo ", "Ford "];
// array.push("Lamborghini ");
// array.unshift("Audi ");
// document.write("  " + array);


//....................Q11.........................


// for (var i = 1; i <= 4; i++) {
//     var input = prompt("Enter name  of studnet " + i);
//     var number = +prompt("Enter score of student  " + i);


//     var total = 500;
//     var percentage = number / total * 100;

//     document.write("<br>student name :  " + input + "  score : " + number + "  & percentage is : " + percentage);


// }

//............................Q12...........................
// var color = ["Red", "Blue", "Green"];
// document.write("<br/>Colors Array: " + color);

// var askColor = prompt("Which color do you want to insert at the beginning of the array?");
// color.unshift(askColor);
// document.write("<br/><br/>After adding at the beginning...");
// document.write("<br/>Colors Array: " + color);

// askColor = prompt("Which color do you want to insert at the end of the array?");
// color.push(askColor);
// document.write("<br/><br/>After adding at the end...");
// document.write("<br/>Colors Array: " + color);

// color.unshift("White");
// color.unshift("Black");

// document.write("<br/><br/>After adding two colors at the beginning...");
// document.write("<br/>Colors Array: " + color);

// color.shift();

// document.write("<br/><br/>After deleting first color of array...");
// document.write("<br/>Colors Array: " + color);

// color.pop();

// document.write("<br/><br/>After deleting last color of array...");
// document.write("<br/>Colors Array: " + color);

// var askIndex = +prompt("At which index do you want to insert a color into array?");
// askColor = prompt("Which color you want to insert?");

// color[askIndex] = askColor;

// document.write("<br/><br/>After adding color to the user desired position in array...");
// document.write("<br/>Colors Array: " + color);

// askIndex = +prompt("At which index do you want to delete colors(s)?");
// var numberOfColors = +prompt("How many number of colors do you want to delete?");

// color.splice(askIndex, numberOfColors);

// document.write("<br/><br/>After deleting color to the user desired position in array...");
// document.write("<br/>Colors Array: " + color);

//....................................Q13................................


// var num = [320, 220, 400, 140];
// document.write(" <br> Initial Array : " + num);
// num.sort();
// document.write(" <br> Sorted Array : " + num);


//.....................................Q14..........................

// var fruits = ["strawberry", "apple", "orange", "banana"];
// document.write("<br> fruit List : " + fruits);
// fruits.sort();
// document.write("<br><br> Fruit List After Sort : " + fruits);


//........................Q15.........................
// var cities = ["Karachi", "Lahore", "Islamabad", "Quetta", "Peshawar"];
// document.write("cites list " + cities);
// var selectedcities = cities.slice(2, 4);
// document.write("<br><br>Selected cities : " + selectedcities);


//..........................Q17............................


// var arr = ["This", "is", "my", "cat"];
// document.write("String array " + arr)
// var concate = arr.join(" ");
// document.write("<br><br>Concate array " + concate);