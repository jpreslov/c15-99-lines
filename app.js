let friends = ['Josh', 'Garrett', 'Thimothy', 'Jhohn', 'Wallace']

// console.log(friends[0]) //output: 'Josh'
// console.log(friends[1]) //output: 'Garrett'

//for(starting point; how long loop should run; increment/decrement)
for(let friend = 0; friend < friends.length; friend++){

    //nested for loop
    for(let num = 99; num > 0; num--){
        if (num > 2){
            console.log(num + ' lines of code in the file, ' + num + ' lines of code; ' + friends[friend] + 
            ' strikes one out, clears it all out, ' + (num - 1) + ' lines of code in the file')
        } else if (num == 2){
            console.log(num + ' lines of code in the file, ' + num + ' lines of code; ' + friends[friend] + 
            ' strikes one out, clears it all out, ' + (num - 1) + ' line of code in the file')

        //one line
        } else {
            console.log(num + ' line of code in the file, ' + num + ' line of code; ' + friends[friend] + 
            ' strikes one out, clears it all out, no more lines of code in the file')
            
        }
    }
}