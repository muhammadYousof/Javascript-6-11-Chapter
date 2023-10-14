// --------- 1 city name ---------

var cityname = prompt("Enter Your City Name")

if(cityname == "karachi")

alert("Welcome to city of lights")

else if(cityname == "lahore")

alert("Welcome To Metro City")

else if(cityname == "isalmabad")

alert("Welcome To Clenest City")

else if(cityname == "peshawar")

alert("Welcome To Hospitable City")

else{
    alert("City Not Found")
}




// ---------- 2 Gender --------

var Gender = prompt("Enter Your Gender")

if(Gender == "male")

alert("Good Morning Sir")

else if(Gender == "female")

alert("Good Morning Ma,am")

else{
    alert("Welcome To Other")
}





// --------  3 Trafic Signal -----------

var  colorsroad = prompt("color of road traffic signal")

if(colorsroad == "red")

document.write("Must Stop")

else if(colorsroad == "yellow")

document.write("Redy To Move")

else if(colorsroad == "green")

document.write("Move Now")

else{
    document.write("This is A not Trafic Signal Color")
}







// -------- 4 Fuel In Car ---------


var remainingfuel = Number(prompt("Enter Your remaining fuel In Leter"))

if(remainingfuel < 0.25)

document.write("Please refill the fuel in your car")

else{
    document.write("You Have Enough Fuel In Your Car")
}







// ---------- 5 check whether --------

var a = 4;
if (++a === 5){
alert("given condition for variable a is true");
}

// -------- Given Condition is true --------


var b = 82;
if (b++ === 83){
alert("given condition for variable b is true");
}

// -------- Given Condition is false --------

var c = 12;
if (c++ === 13)
alert("condition 1 is true");

// -------- Given Condition is false --------

if (c === 13){
    alert("condition 2 is true");
    }
// -------- Given Condition is true --------

if (c++ < 14){
    alert("condition 3 is true");
    }

    // -------- Given Condition is true --------

    if(c === 14){
        alert("condition 4 is true");
        }

//    -------- Given Condition is true --------

        var materialCost = Number(prompt("Enter A Material Cost"));
        var laborCost = Number(prompt("Enter A Material Cost"));
        var totalCost = materialCost + laborCost;
       
        if (totalCost === laborCost + materialCost){
        alert("The cost equals");
        }

        //  --------  5 Given Condition is true --------



        //  --------- 5 True False --------

        var user = Number(prompt("2+2 = ?"))

        var a = 4

         if (user ==a){
            alert("True");
            }
            if (user != a){
            alert("False");
            }



    //   ---------- 5 cat car --------      

         var car = Number(prompt("Enter Car Size"))
         var cat = Number(prompt("Enter Cat Size"))

          if(car < cat){
            alert("car is smaller than cat");
            }
            if(car > cat){
                alert("car is Bigger than cat")
            }







        // -------- 6 Mark Sheet --------

var eng = Number(prompt("Enter Your English Marks"))
var urdu = Number(prompt("Enter Your Urdu Marks"))
var math = Number(prompt("Enter Your Math Marks"))

var totalmarks = 300
        
var obtmarks = eng + urdu + math;

var percentage = (obtmarks / totalmarks) * 100;

document.write("<h1>Mark Sheet</h1>")

document.write("Total Marks :", totalmarks,"</br>")
document.write("Marks Obtained :",obtmarks,"</br>")
document.write("Percentage :",percentage,"%","</br>")

if(percentage >= 80){
    document.write("Grade:A-one","</br>")
    document.write("Remarks: Excellent" + "<br>")

}else if(percentage <=79 && percentage >=70){
    document.write("Grade:A")
    document.write("Remarks: Good" + "<br>")

}
else if(percentage <=69 && percentage >=60){
    document.write("Grade:B","</br>")
    document.write("Remarks: You Need To Improve")
}
else if(percentage <=59 && percentage >=50){
    document.write("Grade:fail" ,"</br>")
    document.write("Remarks :Sorry You Work Hard","</br>")
}





// -------- 7 Guess Number ----------

var secretnumber = 4
var Guessnumber = Number(prompt("Guess A any Number in 1 to 10 "))

if (Guessnumber === secretnumber){
    alert("Bingo! Correctanswer")
}else if(Guessnumber == secretnumber +1 || Guessnumber == secretnumber-1){
    alert("Close enough to the correct answer")
}else{
    alert("Wrong Answer")
}





// ------------ 8 Devided by 3 --------

var input = Number(prompt("write a Number Check if it can Divied by 3"))

if(input % 3 == 0){
    alert("Given Number Divied By 3")
}else{
    alert("Given Number can Not Divied By Devided")
}

// --------- 9 Even & odd Number --------

var input = Number(prompt(" Write checks given input is aneven number"))

if(input % 2 == 0){
    alert("Given Number Is even")
}else{
    alert("Given Number Is Odd")
}






// ------------  10 Weather temperature ---------

var  temperature = Number(prompt("Enter the temperature in Celsius"))

if(temperature >=40 ){
    document.write("It is too hot outside")
}


else if(temperature <=39 && temperature >=30){
    document.write("The Weather today is Normal")
}


else if(temperature <=29 && temperature >=20){
    document.write("Today’s Weather is cool")
}


else if(temperature >=0 && temperature <=19){
    document.write("OMG! Today’s weather is so Cool")
}






// ----------- 11 addition and maltyply ---------

var firstnum = Number(prompt("Enter First Number"))
var secondnum = Number(prompt("second First Number"))

var oper = prompt("Enter Your Operater")

if(oper === "+")

document.write(firstnum + secondnum)

if(oper === "-")

document.write(firstnum - secondnum)

if(oper === "*")

document.write(firstnum * secondnum)

else if(oper === "/")

document.write(firstnum / secondnum)

else if(oper === "%")

document.write(firstnum / secondnum *100)































