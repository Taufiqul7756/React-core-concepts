const friends =[
    {name: 'Rashed', money: 12},
    {name: 'kashed', money: 29},
    {name: 'pashed', money: 37},
    {name: 'nashed', money: 33},
    {name: 'tashed', money: 100},
];


const total = friends.reduce( (sum,friend)=>sum + friend.money,0);
console.log(total);