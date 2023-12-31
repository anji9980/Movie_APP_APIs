This a movie website app, where you can search for movies and rate them!

This is for my reference!!.

**JAVASCRIPT**

This is where  I learn javascript now

*Primitive Data Types*

1.Number\
2.String\
3.Boolean\
4.NULL\
5.Undefined

Technically there are two other Symbol and BigInt

**NUMBERS:**\
This Numbers Includes all the type of numbers like Integers,Decimals,floats etc.. so we dont have the explict type of each so we have one in common
1
-2
1.092
2/5=0.4 so, the division returns a float value we need to use the floor() or ceil() to have the numerical value

operators: 
+,-,*,/ are similar to the other languages\
% -modulo operator return the remainder\
** power operator 9**3 = 729\
These follows PEMDAS rules

Increment Operator(++):\
ex:
    a=5;\
    a++ --> 6\
Decrement Operator:

    ex:
        a=5;
        a-- --> 4
There are two types of operators which are PreIncrement(++i),PreDecrement,PostIncremenet(i++),PostDecrement
In PreIncrement the value is incremented and then assined to the variable where as in PostIncrement the value gets assigned first the the increment happens.

NAN: Not A Number 
NaN is a number type in JavaScript that represents something that is not a number.
ex:
    0/0 --NaN
    1+Nan --NaN


*VARIABLES*
Variables of some way of giving some name to a value and storing it to use in our programs

1.let \
    ex:\
        let age=20;\
        let name=Rontala;\
2.var \
    ex:\
        var age=21;\
        var name='Anji';\
3.Const\
    constant it is value that does not change it remains constant\
        ex:\
            const marks=100;\
            marks+=1; // it is an error

    Difference between variables in ES5 and ES6 of Javascript

-->In ES5 only var is used\
-->In ES6 let and const are Introduced\
JavaScript is an un-typed language. This means that a Javascript variable can hold a value of any datatype.
The type of variable can change during the time of execution and javascript takescare about it automatically this refers to dynamic typing.

For the Scope of variables there are two scopes:\
1.Global Scope\
2.Local Scope\
--> ES6 defines a new scope The Block scope

The block  Scope and LET:
    It restricts the variables access to the block where in which it is declared.\
    Unlike Var, let keyword allows the script to restrict access to the variable to the nearest enclosing block

    var num=10;
    var num=20;
    console.log(num);

    The above function outputs the value 20

    but, 
    let num=10;
    let num=20;
    console.log(num);

    This code will throw an error saying that it redeclaring the variable.


    "use restrict"
    function test(){
        console.log(the value of variable using var is + num);
        let num=20;
        console.log(the value of variable using the let is + num);
    }
    var num=100;
    test();

    -->var will have the global scope and let,const will have the block scope

The Const:\
    1.Constants cannot be reassigned a value\
    2.A constant cannot be re-declared\
    3.A constant requires an initializer (must be initialised during the declaration)\
    4.The value assigned to a const variable is Immutable

    const x=10;
    x=13; // this will result in an error


The Var Keyword:\
    Prior to ES6 only var keyword is used to declare the variables in Javascript.\
    The var keyword donot support the block level scope i.e once declared they can be accessed anywhere in the program \
    --> this is because the variables decalred using var keyword supports 'HOISTING"

    Variable Hoisting in javascripts allows the use of variables in the program even before it is declared such variables are initialized to undefinded by default. 
    JavaScript runtime will scan for the variables declared with var keyword and put them to the to of the function or script.

    ex:
        console.log(name);
        var name='anji';
        console.log(name);

        output:
                undefined
                anji
    so, the var donot follow block scope and we can redeclare the var variables with the same name that doesnt throw any error.


**2.Booleans**\
    This type is used to specify the truth value it can either be true or false\
    ex:\
        bool flag=false;\
        bool flag=true;

    
**3.String**\
    String is a primitive type which indicates textual data and string must be enclosed inside "" double quotes or single quoutes

    let firstName = "Anji";
    let lastName = "Rontala";

    strings do have methods which operate on them to give the desired output

    String Methods:
    1.Accessing the particular charecter in a String:
        let animal = "Lion";
        console.log(animal[0]);
        console.log(animal[100]);
        output will be Undefined;
    2.length
        let animal = "ware wolf";
        console.log(animal.length);     //ans will be 9
    3.concatination
        string concatination also works 
        let firstName = 'Anji';
        let secondName = 'Rontala';
        console.log(firstName + " " + secondName);
        we can also concat a number with a string
    4.toUpperCase(),toLowerCase()
        converts the string to either lower or upper as specified
    5.trim()
        removes all the starting and ending spaces
    6.indexOf()
        return the occurance of the subtring in the string or the char that we asked for and it returns the first occurance
        if the sub string doesn't present it returns the -1
        ex:
            str.indexOf('is')
            str.indexOf('h')
    7.slice()
        it slices the original string and returns us the new string as result
        ex:
            str.slice(strartIndex,endIndex); // endIndex is excluded
    8.repalce()
        this method searches the value and repalces the value with the mentioned value
        ex:
            str.repalce('stringval','newval')

    Template literals:
        {`This is a template literal and this is how we insert a ${value} inside a template literal`}

**4.NULL and UNDEFINED**\
    Null is a primitive type in javascript where the value is unknown or not present\
    ex:\
        let loggedInUser = null;\
    Undefined is a type where the value is that can not be defined


Math Functions\
    1.Math.floor()\
    2.Math.ceil()\
    3.Math.pow()\
    4.Math.random() --generates a random number between 0 and 1 (1 is exclusive)


**Decision Making In JavaScript
    if and else  statements / blocks similar to the other languages**

    ==(double equals)
        --checks for the equality of the value but not equality of type
        --it coerces both values to the same type and then compares them.
        ex:
            1==1   //true
            1=='1' //true --> this is the problem
            1!='1' //true --> this is the problem

    ===(triple equals)
        --strict equality operator
        --checks for the equality of type and value
        ex:
            1===1 //true
            1==='1' //flase
            1!=='1' //false
    
    the rest is same as the if else blocks

    if(marks>=35 && marks<90){
        console.log('you are passed');
    }
    else{
        console.log('oops! you are failed');
    }

    switch statement

    const day = 2;
    switch(day){
        case1: 
            console.log("Monday");
            break;
        case2: 
            console.log("Tuesday");
            break;
        case3:
            console.log("wednesday");
            break;
        default:
            console.log("enjoy everyday")
    }



**Data Structures of Java Script**\
1.Arrays\
2.Objects

**Arrays:**\
    Arrays are the ordered collection of data, they are stored in a contigous manner.
    ex:
        List of comments in a IG
        songs in a playlist
    
    syntax:
        
        let students = [];
        let colors = ['blue','red','yellow'];
        let nums = [1,2,3,4,5];
        let stuff = [true,68,'cat',null];

    so in JacaScript the type of all the array elements need not be same and ther can be nested arrays too

    1.Push() --adds to the end of the array
    2.Pop() --removes element from end of an array
    3.shift()   --removes element form start
    4.unshift() --adds to the start of an array
    5.concat() --merge arrays
    6.includes --look for a particular value // returns a bool value
    7.indexOf() --returns the index of particular element if that element is present else it returns -1 and it returns the first occuring element
    8.reverse() --It reverses inpalce i.e it is a inpace method
    9.slice() --copy of a portion of an array
    10.splice() --it changes the contents of an array by removing or replacing existing elements and/or adding new elements in palce
        ex:
            colors = ['red','blue','black','brown','pink'];
            colors.splice(startpoint,deleteitems,insertitems);
            colors.splice(3,1) -->deletes 1 element from 3rd postition
            colors.splice(1,0,'violet') --this inserts 'violet' color in colors array
    11.sort()
        default way: converts the contents/ elements into strings and compares them based on their UTF-16 code unit values.
    
    we can also make constant arrays
    the reference to the array should not change and we can do anything with the array
    ex: 
        const nums = [1,2,3,4,5];
        we can do:
            nums[0] = 9;
            so, anything we can do except for the changing the reference.

    Multidimensional Arrays:
        const colors = [
            ['red', 'crimson'],
            ['brown', 'darkbrown'];
            ['blue', 'navy blue'];
        ]


**Objects:**\
    Objects are a key-value pair data structure. It is collection of properties
    we can store all types of data inside an objet .
    
    syntax:
        const student = {
            name:'Anji',
            roll_num:'ES20BTECH11004',
            age:20
        };

we can also have array of objects and an array nested inside an object

**LOOPs**:\
1.for loop\
2.while loop\
3.do while loop\
4.for of loop

    1.for loop
        let students = ['a','b','c','d','e'];
        for(let i=0; i<students.length; i++){
            console.log(students[i]);
        }
    2.while loop
        let i=0; 
        while(i<students.length){
            console.log(students[i]);
        }
    3.for of loop
        //simialr to the for each loop in cpp

        for(let student in students){
            console.log(student);
        }
    
    //iterating over objects

    let student = {
        name:Anji,
        roolno:124,
        age:21,
        sex:male
    };

    for(let stud in student){
        console.log(student[stud]); 
    }
     
    --> In built method Object.key(obj_name) --returns all the keys
    --> In built method Object.values(obj_name) --returns all the values
    --> In built method Object.entrie(obj_name) --returns all the key-value pairs



**Functions In JavaScript**:\
    functions are piece of code which helps in code resuability and are writen to carry out a desired task\
    1.normal functions\
    2.arrow functions

    syntax:

        function singAsong(){
            console.log("Do");
            console.log("Re);
            console.log("Me");
        }

        function call : singAsong();
    Arguments:inputs to a function

        function greet(person){
            console.log(`HI! and welcome ${person}`);
        }
        greet(anji);  --output --> HI! and welcome anji
        //if we dont pass an argument it outputs undefined
    
    Lexical Scope:
        we can nest functions in JavaScript
        function backRobbery(){
            const heros = ['a','b','c','d'];
            function cryForHelp(){
                for(let hero in heros){
                    console.log(`please help us, ${hero}`);
                }
            }

            cryForHelp();
        }

        backRobbery(); -->fuction called nothing happens but when cry for Help function is called inside this fuction then that function executes
        so we have any number of functions inside a function 
    
    Function expressions:
    we can store the function inside a variable thats not a problem..
    In JS we pass,store functions just like a varible
    ex:
        const add = function(x,y){
            return x+y;
        }
    Higher Order functions:
    passing function as an argument to another function
    
    function callTwice(func){
        func();
        func();
    }

    function rollDie(){
        const roll=Math.floor(Math.random()*6) + 1;
        console.log(roll);
    }

    callTwice(rollDie) --> here roll die is passed as an argument to the function callTwice

    Returning function as an argument

    fuction makeMistoryFunc(){
        const rand = Math.random();

        if(rand>0.5){
            return function(){
                console.log("good function");
            }
        }
        else{
            return function(){
                console.log("This is an annoying thing);
            }
        }
    }

    const mistory = makeMistoryFunc();  --we are storing the function inside the mistory variable
    mistory(); --the returned function is then executed!

Methods
    we can add functions as properties on objects and we can call them methods

    const myMath = {
        multiply: function mul(x,y){
            return x+y;
        }
        divide: function div(x,y){
            return x/y;
        }
        addition: function add(x,y){
            return x+y;
        }
        substraction: function subs(x,y){
            return x-y;
        }
    }

    myMath.add(2,4); -->callinig them

    we can also rewriting them as:
    
    const myMath = {
        mul(x,y){
            return x*y;
        }
        div(x,y){
            return x/y;
        }
        add(x,y){
            return x+y;
        }
        sub(x,y){
            return x-y;
        }
    }

    myMath.add(2,4);
    myMath["add"](2,4);

**Callbacks and ArrayMethods:**

    1.For Each Method:
        const numbers = [1,2,3,4,5,6,7,8,9,10];

        numbers.forEach(fuction(el){
            if(el % 2 ===0){
                console.log(el);
            }
        })

        //here we can write the inline function or we can also pass the function as an argument to the for each method.

    2.map()
        Creates a new array with the results of calling a callback on every element in the array

        const chars = ['a','b','c','d'];

        const newChars = chars.map(function(c){
            return c+'A';
        })
    
        it is better to use when we need a new array with slight modifications to the original array
    
    3.Arrow Functions:
        These are newer functions of JavaScript, syntastically compact

        ex:
            const squareOfAnumber = (x) => {
                return x*x;
            }

            const add = (x,y) => {      //we are simply removing the function keyword from the code and using => symbol
                return x+y;
            }

        if we have only one argument then we need not use the parenthesis

            const square = x =>{return x*x};

            if need not have arguments also

            const rollDie = () => {
                return Math.flor(Math.random()*6)+1;
            }

        we can implicitly return the value with the use of () -> braces insted of {}
        this only works then there is only one statement or single expression to be evaluated.
            ex:
                const add = (x,y) => (
                    x+y;
                )
                const add = (x,y) => a+b ;
    4.filter()
        It is used to apply some contraint on returning values

        const scores = [1,2,3,4,5,6,7,8,9];
        cosnt newScores = scores.filter((score)=>{
            return socre*2;
        });

        we can use both filter() and map() methods together 

        const newMovies = movies.filter(m => m.rating>=9).map(m=>m.title.toUpperCase());

    5.reduce()
        Executes a reducer function on each element of the array, resulting in a single value.
        const scores = [1,2,3,4,5,6,7,8,9];
        scores.reduce(acc,cur){
            return acc+cur; 
        }

**arrow functions behaves differently with the this keyword!!

**Newer Features in JavaScript:**

1.Default Params\
    when we pass arguments we can specifiy the default value to the argument\
    ex:\
        function add(x,y=1){\
            return x+y;            // here the default value of y\ will be 1\
        }

2.spread in function calls\
    Spread syntax allows an iterable such as an array to be expanded in places where zero or more arguments(for functions calls) or elements 
    (for array literals) are expected, or an object expression to be expanded in places where zero or more key-value pairs(for object literals) are expected.

    ex:
        const nums = [1,2,3,4,5,6,7,8,9];
        Math.max(...nums)
        Math.max(nums) --> this returns NaN

        we can use spread operator with arrays, strings, object literals
        1.copy two arrays 
            const cats=[];
            const dogs=[];
            const catsAndDogs = [...cats,...dogs];
        2.Using String we can spread the whole string
            const str = "hello";
            const spredd=[...str] -->["h","e","l","l","o"];
        3.using Object
            we can also spread properties from one object to the another object
            {...obj1, color:newColor}; -->new object with the color being changed to newColor.
3.Rest, destructures of arrays and objects ar also newer features.
    






**This is where I write about DOM**

window Object:
    The window object represents an open window in a browser. It is the object created by the browser which has functions associated with it and it is automatically created by the browser.
    It is a global object.

What is DOM?
The DOM is a javascript representation of a webpage, its your js window into the contents of a webpage, it simply bunch of objects that you can simply interact with the javascript

document --> someway a specia object
DOM is a programming interface for web development. It represents the web page, so that we can change the document structure, style and content.
The Dom represents the page as node and objects in that way we can interact with the page and make the necessary changes.

root/document-->body-->div-->span-->element

**SELECTORS of DOM**

Using selectors in dom we get the html element and change the functionality accordingly.

flow: select --> manipulate

            window
              |
              |
            document
              |
              |
             HTML
              |
    ----------------------
    |                     |
  head                  body
    |                     |
different tags      different tags

All the html code gets converted as objects in the JS and all these will be available in the window object.
we can get to see the properties of these object using console.dir(document)

when a webpage is loaded, the browser creates a Document Object Model(DOM) of the page.

**DOM Manipulation**
 select-->manipulate

1.getElementById()
    we gets the element by id from the html
    If the id doesnt exist it return null 
    syntax:
        const element = document.getElementById("id_name");

2.getElementsByClassName()
    It returns us a HTML collection 
    If the class name doesn't exist then it will return a HTML collection of length 0.
    syntax:
        const element = document.getElementsByClassName("class_name");

    ***id of two html tags should not be same but class name can be same

3.getElementsByTagName()
    It returns a HTML collection, if tag names doesn't exits then it returns a HTML collection of length 0.
    syntax:
        const elements = document.getElementsByTagName("tag_name");

Query Selectors:

1.querySelector()
    It returns the first element of the matching tag
    syntax:
        const elements = document.querySelector("tag_name");

2.querySelectorAll()
    It returns all the elements of the matchinig tag and it returns the node list.
    syntax:
        const nodes = document.querySelectorAll("tag_name");

Properties:
    1.tagName: returns tag for element nodes
    2.innerText: returns the text content of the element and all its children
    3.innerHTML: returns the plain text or HTML contents of in the element
    4.textContent: returns textual content even for hidden elements

    childs: firstChild,lastChild,children.
    nodes: text node, comment node, element node
    This helps in navigation 

    both innerText and innerHTML returns a string but innerText returns the pure text and innerHTML returns along with the tags

Attributes:
    getAttribute(attr) 
        -to get the attribute value
    setAttribute(attr, value)   
        -to set the attribute value
    
Style:
    node.style


Inseting New Elements:

    syntax:
        let element = document.createElement("div");

    node.append(element)
        -adds at the end of the node (inside)
    node.prepend(element)
        -adds at the start of the node (inside)
    node.before(element)
        -adds before the node (outside)
    node.after(element)
        -adds after the node (outside)
    
Deleting Element

    syntax:
        node.remove()
            -removes the node

Using "Classlist" we can append the new classes to the css style tags 

**Evenets in JS:**

The change in the state of an object is known as an Event
Events are fired to notify code of interesting changes that may affect the code execution

Mouse events (click, double click..)
Keyboard events (down arrow, up arrow..)
Form events (subbmit..)
print & many more

we can write inline events as well as we can also write the evnets in the sperate script file

Event Object:
It is a special object that has details about the event.

All event handlers have access to the event objects properties and methods

syntax:
    node.event = (e)=>{
        //handeler code
    }

    e.target, e.type, e.clientX, e.clientY
drawback: we can handle only one event at a time

**Event Listners:**

node.addEventListener(event,callback);
node.removeEventListener(event,callback);

node.addEventListener("click", ()=>{
    console.log('you have clicked');
})


**Classes and Objects:**

**Prototypes in JS:**
    A javascript object is an entity having state and behavioour(properties and methods)

    creating a object:

    const student = {
        name: "anji rontala",
        marks: 94.4,
        printMarks: function (){
            consle.log("marks =", this.marks);
        }
    }

    JavaScript objects have a special property called prototype.
    we can set prototype using __proto__ (custom or our own)
    ** If object and prototype have same method object's method will be used.

    const karan{
        marks=100,
    };

    karan.__proto__=student;
    karan.printMarks(); --> now we can directly make use of print marks from the student object using the prototype.

    **The type of a prototype is a refrence to an object**

**Classes in Java Script:**

    Classes in javaScript are program-code templates for creating objects
    Those objects will have some state and behaviour inside it.

    // the 2nd way of creating an object--> we can create an object inside the class

    class MyClass{
        constructor(){
            
        }
        myMethod(){

        }
    }

    let myObj = new MyCls(); --> In java also we create object using new keyword.

    class MyClass{
        obj = {
            name: "xyz";
            age: 23;
        }
    }

    Constructors are automatically invoked by the new keyword, this method is used to initialise the variables of the class

**Inheritance in JS:**

    Inheritance is passing down of properties and methods from parent class to child class

    class parent{

    }

    class Child extends Parent{

    }

    If child and parent have same method, child's method will be used (method overriding).

**Super Keyword:**

    The super keyword is used to call the constructor of its parents class to access properties and methods.

    super(args) //call parent's constructor
    super.parentMethod(args)

    class Parent(){
        constructor(){
            console.log(this is parent constructor);
        }

        eat(){
            console.log("eat healthy");
        }
    }

    class child extends Parent{
        constructor(){

            super() --> this should be there if not this will throw an error

            console.log("this is the child constructor");
        }
        printName(name){
            console.log("hello" this.name);
        }
    }

    let obj = new child;

**Error Handlindling:**

    try(){
        ..normal code
    }
    catch(err){             //err is error object 
        ..handling error
    }
    final(){

    }


Callbacks | Promises | Async-await

Async-Await are generally better than Promise chains are generally better than call back hells

**Sync in JS**

Synchronus:
    Synchronus means the code runs in a particular sequence of instructions given in the program.
    Each instructions waits for the previous instructions to get complete its execution.

    The program gets executed in the way we write our instructions.

Asynchronus:
    Due to synchronous programming, sometimes important instructions get blocked due to some previous instructions but in,
    Asynchronus programming allows you to execute next instructions immediately and doesn't block the flow

ex:
    setTimeout() -->takes callback as an argument.
    function func(){
        console.log("Hi!!!!!!!")
    }

    setTimeout(func,1000) //timeout here it is 100ms

    or:
    console.log("Anji");
    setTimeout(()={
        console.log("hello");
    }, 5000);
    console.log("rontala");

    here Anji rontala gets printed first and after 5 secs hello gets printed.

Callbacks()
    Call backs are those functions which are passed as an arguments to the other functions 
    call backs are called without using the parenthesis.

**Callback Hell:**
    Nested callbacks are stacked below one another forming a pyramid structure (Pyramid of Doom)
    This type of programming becomes difficult to understand & manage


example at core level:
    Image we are fetching some data from the database using the ID:
    
    // let say we want the data calling after 2 seconds 

    function getData(dataID){
        setTimeout(()=>{
            console.log("data",dataID);
        }, 2000);
    }

    getData(1);
    getData(2);
    getData(3);

    // when we execute the above code we get all the data at a time 
    because the code synchronusly 3 function calls happens at a time and each function sets a timer of 2 sec.

    real life:

        instagram: 
                    username:
                    password:
        if a user wants to login we first search for username inthe db the asks to enter password in this case we want that search to happen or data delivery to happen at periodic intervals


    This can be acheived using callback's:

    function getData(dataId, getNextData){
        setTimeout(()=>{
            console.log("Data", dataId);
            if(getNextData){
                getNextData();
            }
        }, 2000);
    }

    getData(1, ()=>{
        getData(2);         --> callback()
    });

    this above function prints the data periodically.

    getData(1, ()=>{
        getData(2, ()=>{
            getData(3, ()=>{        // nexted call backs
                getData(4);
            })
        })
    })

This above code is most hard to understand and this depicts call back hell.

**Promises:**
    Promises in JS are objects which are for eventual completion of task.
    It is a solution to callback hell.

    syntax:

        let promise = new Promise((resolve,reject) => {}); // function with 2 handlers and these are also functions

    core example:

        let promise = new Promise((resolve,reject) => {
            console.log("I am a promise");
        })

    In promises resolve() and reject() are functions which are automatically created by the javascrit for us.

    each promise has 3 states:
    1.Pending state     --- result is undefined
    2.Full filled State / resolve (resolved)    --result is value
    3.Rejected State        --the result is an error object

    In real world scenario the apis that we are calling will be sending us the promise and we deal/handle with those promises accordingly.

    ex with respect to above secanrio:


        function getData(dataId,getNextData()){
            return new Promise((resolve, reject) => {
                setTimeout(()=>{
                    console.log("data",dataId);
                    resolve("sucess");
                    // if it is not sucess reject("error message");
                    if(getNextData){
                        getNextData();
                    }
                }, 5000);
            });
        }

    Using Promises

    .then() & .catch()

    promise.then((res)=>{...}) // used after fullfill 
    promise.catch((err)=>{...}) // used after reject

**Promise Chain**

    ex:
        // function returning some data after 3 secs this usally what apis do.
        function asyncFunc(){
            return new Promise((resolve, reject) => {
                setTimeout(()=>{
                    console.log("some data1");
                    resolve("sucess");
                },3000);
            });
        }

        function asyncFunc2(){
            return new Promise((resolve, reject) => {
                setTimeout(()=>{
                    console.log("some data2");
                    resolve("sucess");
                },3000);
            });
        }

        console.log("fetching data1...");
        let p1 = asyncFunc();
        p1.then((res)=>{
            console.log(res);
        })

        console.log("fetching data2...");
        let p2 = asyncFunc2();
        p1.then((res)=>{
            console.log(res);
        })

        this leads to printing the data1, data2 are fetching and printed at same time.

        to avoid this we use chaining

        console.log("fetching data1..")
        let p1=asyncFunc1();
        p1.then((res)=>{
            console.log("fetching data2..");
            let p2 = asyncFunc2();
            pe.then((res) => {
                console.log("fetching data3..");
                let p3 = asyncFunc3().....
            })
        })

        by this way we use chaining to get the data periodically
        

        in a simple way!

        getData(1).then((res) => {
            console.log(res);
            getData(2).then((res) =>{
                console.log(res);
                getData(3).then((res)=>{
                    ....this is chaining of promises.
                })
            })
        })

        or:

        getData(1).then((res) =>{
            return getData(2);
        })
        .then((res)=>{
            return getData(3);
        })
        .then((res)=>{
            console.log("sucess");
        })


**Async-Await**

    async functions always returns a promise

    async function myFunc(){
        .....
    }

    await pauses the execution of its surronding async function until the promise is settled.
    we can only use await keyword only inside the async function

    function getData(){
        return new Promise((resolve, reject) => {
            setTimeout(()=>{
                console.log("some data1");
                resolve("sucess");
            },3000);
        });
    }

    // we need to crate an async function to use await 

    async function getAllData(){
        await getData(1);
        await getData(2);
        await getData(3);
    }

    // this is more readable and easy to understand and we mostly use this way of writing the code.

**IIFE : Immediately Invoked Function Expression**
    IIFE is a function that is called immediately as soon as it is defined.

    we can get rid of the function call as in async function.

    syntax:

    (function) ();

    ( function (){

    }) ();

    (
        async function(){
            await.getData(1);
            await.getData(2);
            await.getData(3);
        }
    )();

**API's**

    API - Application Programming Interface

fetch API:
    The Fetch API provides an interface for fetching(sending/receiving) resources.
    It uses Request and Response objects
    The fetch() method is used to fetch a resource (data). It is already presented in the javascript

    let promise = fetch(url, [options])

    ex:

        const URL = "https://cat-fact.herokuapp.com/facts"

        cosnt getFacts = async () =>{
            console.log("getting dat..");
            let response = await fetch(URL);
            console.log(response);
        }  

        using the fetch() function we are calling the endpoint of the api and we are doining this in async mode coz the url may take time to return the promise which is nothing but json object.
    
Understanding Terms:

AJAX:
    It is Asynchronus JavaSrcipt ans XML

JSON: (AJAJ)
    It is JavaScript Object Notation

--erlier mostly data is transfered in the xml format but now the format is JSON format.

json() method:
    It returns a second promise that resolves with the result of parsing the response body text as JSON. (Input is JSON, output is JS object)


    Send Request to API ---> API sends response(JSON) -->Convert JSON to Object(.json())


    cosnt getFacts = async () =>{
        console.log("getting dat..");
        let response = await fetch(URL);
        console.log(response);

        // converting JSON to usable data using .json() method
        let data = await response.json();
        console.log(data);
    }  

Requests & Response:

HTTP verbs
GET
POST
DELETE
PUT

Response Status code 200 --sucessfull
                code 400 --client side bad request
                code 404 --page not fount 