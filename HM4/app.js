
const fs = require('fs'); 
const path = require('path');
const arrDir = ["1st.txt","2nd.txt","3rd.txt","4th.txt","5th.txt","6th.txt","7th.txt","8th.txt","9th.txt","10th.txt"];
    
let output = "";

for(let i = 0 ; i<arrDir.length;i++)
{
    const dirPath = path.join(__dirname, '/INPUT',arrDir[i]);
    const txtin = fs.readFileSync(dirPath,'utf-8')
    const spilters = txtin.split('\n')     

    for(let j = 1 ; j<=i+1 && j<=spilters.length;j++)
            output += spilters[j - 1] + '\n';   


    
}
    //console.log(dirPath);
fs.writeFileSync(path.join(__dirname, 'output.txt'), output);



