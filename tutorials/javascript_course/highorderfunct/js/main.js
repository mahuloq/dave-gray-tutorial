// Higher ORder Funcitons

// A higher order function is a function that does at least one
// of the following:
// ** Takes one or more functions as an argument (parameter)
// ** Returns a function as the result

import { posts } from "./posts.js";

//forEach()

posts.forEach((post) => {
  console.log(post);
});

console.clear();

const fliteredPosts = posts.filter((post) => {
  return post.userId === 10;
});

console.log(fliteredPosts);

const mappedPosts = fliteredPosts.map((post) => {
  return post.id * 10;
});

console.log(mappedPosts);

const reducedPostsValue = mappedPosts.reduce((sum, post) => {
  return sum + post;
});

console.log(reducedPostsValue);
