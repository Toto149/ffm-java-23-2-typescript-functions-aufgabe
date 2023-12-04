
import './App.css'

function App() {
  let numbers: number[] = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
  const numbers2: number[] = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
  const words: string[] = ["Hallo", "wie", "geht", "es", "dir?","Mir", "geht", "es", "gut.", "Das", "ist", "schön." ];
  numbers = numbers.map((num:number) => num*2);
  const words2 : string[] = words.filter((word:string) :boolean => word.length>= 5);
  const number1 : number = numbers2.reduce((num1 : number, num2 :number) :number => num1 + num2);
  return (
    <>
    <h1>{numbers}</h1>
        <p>{number1}</p>
        <p>{numbers.some((num : number) : boolean => num >= 10)}</p>
        <p>{words2}</p>
    </>
  )
}

export default App
