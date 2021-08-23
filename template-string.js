const priya = 'asif akbar';
const meye = "meye tomi ki dokkho chino";
const kobita = `kobita tomi sopno charini`;
 const multiline = 'this is my first line.'+
            'this is my first line.'+
            'this is my first line.'+
            'this is my first line.'
 console.log(multiline);

 const friends = ['abul', 'imtiaj', 'shawon'];
 const count = 5;
 const old =  '<h3 class="friend-name">friend-5</h3>'
 const old2 =  '<h3 class="friend-name">friend- '+ count +'</h3>';
 const new1 =  `<h3 class="friend-name">friend-${count.length}</h3>`;
// console.log(new1);
 
const first = 'mamun';
const last = 'chowdhury'
const fullOld = first + '' + last;
const fullNew = `${first} ${last}. has money:${friends.length*500}`;

console.log(fullNew);
