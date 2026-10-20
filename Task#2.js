//יוסף חלבי ,סתיו יקר

//funstion to find if num is a prime number if yes print it
function printPrimeNum(num)
{
  // פונקציה שמקבלת מספר ובודקת אם הוא ראשוני. אם כן, מדפיסה אותו
  if(num < 2) return
  
  for(let i = 2; i <= num;i++)
    if(num % i == 0)
      return
  console.log(num)
}

//loop from 2 till 236 and print all the prime numbers
let num1 = 237
for(let i =2; i < num1; i++)
   printPrimeNum(i)