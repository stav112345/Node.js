//מגישים יוסף חלבי וסתיו יקר
let numArr= [1,20,0,0,5,3,40,5,6,0],count=0
//loop through all number Array and check if it has a zero if yes count+1
for(let i=0;i < numArr.length;i++)
  count= numArr[i] === 0 ? count+1 : count
console.log(count)
