//ES10 JavaScript funktioner
const array = [1,2,[3,4,[5]]] 
array.flat(2)

//Flat gör inget speciellt utan att man har "nested-arrays"
//Så användbart för arrayer inuti arrayer

//Med flat kan man välja hur många lager den ska göra det på t.ex 1, 2, 3

const entries = ['Erika', 'Fredrik',,,,,,,,, 'Johan']
entries.flat()

//Rensar undan alla onödiga ,,,,,,,

//Flatmap --> rensar undan arrayen samtidigt som man kan lägga till något på slutet
const greetings = [["Hello", "young", "grasshopper!"], ["you", "are"], ["learning", "fast!"]];
const greetingsNervous = greetings.flatMap(wordNervous => wordNervousCreate + 'Oh!')

const anvandareEmail  = '                   sdfsdfsdfjspdufsu@gmail.com'
const anvandareEmail2 = 'elviraSomMissar.se@gmail                      ' 
console.log(anvandareEmail.trimStart())
console.log(anvandareEmail2.trimEnd())


//Resultatet blir då, mycket trevligare och inga onödiga mellanrum med 
//.trimStart() och .trimEnd() metoderna
//[Log] 'sdfsdfsdfjspdufsu@gmail.com'
//[Log] 'elviraSomMissar.se@gmail'

//fromEntries() används för att ta arrayer och göra dem till användbara objekt istället 
//Där vi även kan få med mera information

anvandareProfiler = [['commanderAlf', 36], ['derekSkywalker', 18], ['strawberryBlueberry', 10]]
Object.fromEntries(anvandareProfiler)

//Denna spottar ut ett riktigt snyggt objekt med användarnamn och ålder tillsammans
//OBS!!! fromEntries() ska inte förväxlas med entries() vilket gör tvärtom

try {
  bob + 'hej'
} catch (error) {
  console.log('Apapapa sakta i bakarna!' + error)
}

//I catch delen så försöker JS lösa misstag som kan skett i try delen
//Lyckas den inte blir det som står i den det som körs
//Hör ihop med mera advancerade saker som "Asynchronous javascript"