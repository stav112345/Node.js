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

//יצרנו מספר שסופר את השורות הגדולות ביותר מבין כל הקבצים.
let maxLines = 0;
//בעזרת לולאה נעבור על כל המערך של הקבצים שעשינו להם ספליט ונכניס את הכמות הגדולה ביותר שמצאנו 
for (let i = 0; i < files.length; i++)
{
    if (files[i].length > maxLines)
         maxLines = files[i].length;
    
}
//לא ידעתי איך להכניס את כל התוכן אז פשוט הכנסתי ל"סטרינג" ובסוף כתבנו את כל התוכן למטה ב
//write (שורה 45)
let output = "";

//ההדפסה הבסיסית - מעבר על כל המערך 
for (let i = 0; i < maxLines; i++)
{
    for (let j = 0; j < files.length; j++)
    {
        if (i < files[j].length)
        {
            output += files[j][i] + "\n"
            //הכנסה לנתון + ירידת שורה שיראה טוב
        }
    }
}

           const write = fs.writeFileSync(DerechToFileWrite,output);



// למעשה התוכנית קוראת קבצים ומדפיסה את התוכן שלה שורה אחת מכל קובץ בכל סבב  
// עד להשמת כל! התוכן בכל הקבצים, גם אם מספר השורות בהם שונה אל קובץ אחר

