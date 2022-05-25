// Copyright (c) 2022 Maria Goemans All rights reserved
//
// Created by: Maria G
// Created on: May 25, 2022
// This file contains the JS functions for index.html

"use strict"

function numSent() {
  //initializing variables
  let counter = 1;
  let facAnswer = 1;
  
  //getting user input for the variable userNum
  let userNum = parseInt(document.getElementById("number").value);

  //using a do... while loop to find factorial
  do {
    facAnswer = facAnswer * counter;
    counter = counter + 1;
  } while (counter <= userNum);

  //display factorial back to screen
  document.getElementById("results").innerHTML = "The factorial of your inputted number (!" + userNum + ") = " + facAnswer + ".";
}
