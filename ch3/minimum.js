import { exportAllDeclaration, isModuleDeclaration } from "@babel/types"

// Write a function min that takes two arguments and returns their minimum.

function min(a,b) {
  if(a < b) return a;
  else return b;
}

module.exports = min;