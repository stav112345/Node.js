//מגישים - סתיו יקר ויוסף חלבי

const fs = require('fs');
const path = require('path');
const arr = ["a1", "a2", "a3"];
const DerechToFileWrite = path.join(__dirname, 'output.txt');
const files = [];

//שבירת המערך לשורות
for (let i = 0; i < arr.length; i++)
{
    const DerechToFile = path.join(__dirname, arr[i]);
    const readFromFile = fs.readFileSync(DerechToFile, 'utf-8');
    const splits = readFromFile.split(/\r?\n/);

    files.push(splits);
    
}

//עד לכאן בנינו מערך עם כל התוכן ועדיין לא בדקנו שורות חסרות או לא

//הכנסנו למחרוזת ובסוף כתבנו את כל התוכן למטה ב
//write (שורה 49)
let output = '';

const pointers = [0, 0, 0];//נתונים התחלתיים
let blockSize = 1;//נתונים התחלתיים
let hasMoreLines = true;//נתונים התחלתיים

//למעשה מדובר בלולאה שעוברת על כל המערך כל עוד קיים שורות באחד הקבצים
while (hasMoreLines) 
{
    hasMoreLines = false;

    for (let i = 0; i < files.length; i++)
    {
        for (let j = 0; j < blockSize; j++) 
        {
            let lineIndex = pointers[i];
            if (lineIndex < files[i].length) 
            {
                //הוספת התוכן לקובץ ייצוא חיצוני
                output += files[i][lineIndex] + '\n';
                pointers[i]++;
                hasMoreLines = true;
            }
        }
    }

    blockSize++;
}


fs.writeFileSync(DerechToFileWrite, output);
console.log(output);


// למעשה התוכנית קוראת קבצים ומדפיסה את התוכן שלה שורה אחת מכל קובץ בכל סבב  
// עד להשמת כל! התוכן בכל הקבצים, גם אם מספר השורות בהם שונה אל קובץ אחר

