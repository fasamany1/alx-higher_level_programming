#!/usr/bin/node

// Importing required modules
const request = require('request');
const url = process.argv[2];

// Make a GET request to the JSONPlaceholder API to get all the tasks
request.get(url, { json: true }, (error, response, body) => {
  if (error) {
    console.log(error);
    return;
  }
  // Filter the tasks by the given user ID and completed status
  const tasksCompleted = {};
  body.forEach((todo) => {
    if (todo.completed) {
      if (!tasksCompleted[todo.userId]) {
        tasksCompleted[todo.userId] = 1;
      } else {
        tasksCompleted[todo.userId] += 1;
      }
    }
  });
  // Print the number of completed tasks by the user
  console.log(tasksCompleted);
});
