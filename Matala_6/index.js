//מגישים - סתיו יקר ויוסף חלבי

const fs = require("fs");
const path = require("path");
const arr = ["1.txt", "2.txt", "3.txt"];
const matrix = [];
let maxLength = 0;

//שבירת המערך לשורות
for (let i = 0; i < arr.length; i++) {
  const DerechToFile = path.join(__dirname, arr[i]);
  const readFromFile = fs.readFileSync(DerechToFile, "utf-8");
  const splits = readFromFile.split(/\r?\n/);

  matrix.push(splits);
  if (splits.length > maxLength) maxLength = splits.length;
}
//עד לכאן בנינו מערך עם כל התוכן ועדיין לא בדקנו שורות חסרות או לא

//הכנסנו למחרוזת ובסוף כתבנו את כל התוכן למטה ב
//write (שורה 49)
let output = [];

const pointers = new Array(matrix.length).fill(0);
let chunkSize = 1;

//למעשה מדובר בלולאה שעוברת על כל המערך כל עוד קיים שורות באחד הקבצים
while (pointers.some((pointer) => pointer < maxLength)) {
  for (let row = 0; row < matrix.length; row++) {
    for (let step = 0; step < chunkSize; step++) {
      let lineIndex = pointers[row];
      if (lineIndex < matrix[row].length) {
        //הוספת התוכן לקובץ ייצוא חיצוני
        output.push(matrix[row][lineIndex]);
      }
      pointers[row]++;
    }
  }

  chunkSize++;
}

fs.writeFileSync("output.txt", output.join("\n"), "utf-8");

// למעשה התוכנית קוראת קבצים ומדפיסה את התוכן שלה שורה אחת++ מכל קובץ בכל סבב
// עד להשמת כל! התוכן בכל הקבצים, גם אם מספר השורות בהם שונה אל קובץ חדש
