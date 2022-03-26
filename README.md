# Password-Generator-HW3-Pseudo
Random Password Generator app based on certain criteria selected by the user

Overview:
-   This App will prompt user for different password criteria to choose from to generate a random password for    the user. 
-   The HTML and CSS files are given
-   A starter code is given in the JavaScript file. We had to edit, add and modify to get the app functionality to work as expected. 


JavaScript:
I had to declare a function with two variables to start, one for the password and another for the password length. I used to condition statements to get the user to input password length between 8 and 128 characters.
I assigned variables to the criteria and used Windeow.confirm to display it on the screen for the user to choose from. Then I created arrays for each on of these criteria and another empty array to put the password into. I chose to use the condition statements on these arrays to decide if a certain criteria should be added or not, based on the user selection.
I add the for loops to iterate over the arrays along with Math.random to choose random elements form the arrays.
At the end, we used another function with an event listener to display the password screen after the button has been clicked and user chose the criteria. 

URL: https://hatech88.github.io/Password-Generator-HW3-Pseudo/ 

![Alt text](/Assests/Password%20App.jpg "Password Generator")





Credits:
URL: http://127.0.0.1:5501/03-JavaScript/02-Homework/Develop/index.html
URL: https://www.w3schools.com/js/default.asp

Copyright (c) [2022] [Password Creator]

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.