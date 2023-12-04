
import './App.css'

interface Character{
    id: number;
    name: string;
    status: string;
    species: string;
    origin: string;
}
interface ReducedCharacter{
    name: string;
    origin: string;
}
function App() {
  let numbers: number[] = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
  const numbers2: number[] = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
  const words: string[] = ["Hallo", "wie", "geht", "es", "dir?","Mir", "geht", "es", "gut.", "Das", "ist", "schön." ];
  numbers = numbers.map((num:number) => num*2);
  const words2 : string[] = words.filter((word:string) :boolean => word.length>= 5);
  const number1 : number = numbers2.reduce((num1 : number, num2 :number) :number => num1 + num2);
  const rickAndMortyApiCharacterList : Character[] = [
          { id: 1, name: "Rick Sanchez", status: "Alive", species: "Human", origin: "Earth" },
          { id: 2, name: "Morty Smith", status: "Alive", species: "Human", origin: "Earth" },
          { id: 3, name: "Summer Smith", status: "Alive", species: "Human", origin: "Earth"},
          { id: 13, name:"Alexander", status: "Dead", species: "Human", origin: "Earth"}
      ];
    const filter = rickAndMortyApiCharacterList.filter((character : Character) :boolean => character.status ==="Alive" && character.species==="Human");
    console.log(filter);
    const names : string[] = rickAndMortyApiCharacterList.map((char) => char.name);
    const namesAsString = names.reduce((s1,s2) => s1.concat(", " + s2));

    function reduceCharacters(characters : Character[]):ReducedCharacter[]{
        const reduxChars: ReducedCharacter[] = [];
        for(let i = 0; i<characters.length; i++){
            reduxChars.push({name: characters[i].name, origin:characters[i].origin })
        }
        return reduxChars;
    }
    console.log(reduceCharacters(rickAndMortyApiCharacterList));
  return (
    <>
    <h1>{numbers}</h1>
        <p>{number1}</p>
        <p>{numbers.some((num : number) : boolean => num >= 10)}</p>
        <p>{words2}</p>
        <p>{rickAndMortyApiCharacterList[1].name}</p>
        <p> {namesAsString} </p>

    </>
  )
}

export default App
