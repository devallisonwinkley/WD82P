# Problem Solving

Problem solving is the core thing that programmers do.

1. Understand the probem.

   > to solve a problem, you must first know what exactly the problem is.

2. Plan - know everything you need for the site.

   > what will it look like
   > what will the functionality be
   > what's the user interface
   > what inputs/data will you need
   > what is your desired output?
   > given your inputs from the user, what are the necessary steps needed to get the desired output?

   - Algorithm > Pseudocode (writing out a logic for your program using a ; instead of coding right away, solve the problem in your own language first)
   - Pseudocode Example:

   1. When the user inputs a number
   2. Initialise a counter variable and set its value to zero
   3. While counter is smaller than user inputted number. increment by one
   4. Print the value of the counter variable

   Output:
   inputNumber = 5;
   counter = 0;

   1
   2
   3
   4
   5

3. Divide and Conquer
   > decompose the problems into smaller easier sub-problems
   > break the big problem down and solve the smaller ones until it is fully resolved

## Solving Fizz Buzz

1. Write a program that takes a user's input and prints the numbers from one to the number the user entered. However, for multiples of three, print Fizz instead of the number and for the multiples of five, print Buzz. For numbers which are multiples of both three and five, print FizzBuzz.

2. Plan

   - An input to collect the number from user
   - The desired output is a list of numbers from 1 to the number that the user entered, but for numbers divisible by 3, print Fizz. For numbers divisible by 5, print Buzz. While for numbers divisible by both, print FizzBuzz.
   - Pseudocode:
     1. Wheen a user inputs a number
     2. Loop from 1 to the entered number
     3. If the current number is divisible by 3, then print "Fizz"
     4. If the current number is divisible by 5, then print "Buzz"
     5. If the current number is divisible by 3 and 5, then print "FizzBuzz"
     6. Otherwise, print the current number

3. Divide and Conquer
