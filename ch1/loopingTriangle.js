
// Write a loop that makes seven calls to console.log to output the following triangle:

// #
// ##
// ###
// ####
// #####
// ######
// #######

for(let line = '#'; line.length; line+= '#')
  console.log(line)

module.exports = loopingTriangle;