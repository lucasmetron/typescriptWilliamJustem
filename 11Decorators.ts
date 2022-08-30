// é uma declaração que pode ser anexada eu uma classe, propriedade, metodo, prametro ou acessor
// vai trabalhar em cima dessas partes anotadas, para add coisas novas, vigiando essas marcações, para poder add elemento novo ou validacção e etc

// @Component
// @Selector
// @useState("asdasd")


// CLASS

// factory
function Logger(prefix:string){
    return (constructor:any)=>{
        console.log(`${prefix} - ${constructor}`)
    }
}


@Logger('awesome')
class Foo {}

function setAPIVersion(versionAPI:string){
    return(constructor:any)=>{
        return class extends constructor{
            version = versionAPI
        }
    }
}


@setAPIVersion("2.0.0.0")
class API{
}

console.log(new API)



// PROPERTY

function minLenght(length:number){
    return (target:any, key:string)=>{
        console.log('target', target)
        console.log(key)
    }
}

class Movie{
    // validação - se for menor que 5 --eror
    @minLenght(5)
    title: string;

    constructor(t:string){
        this.title = t
    }
}

const movie = new Movie('Interestellar')

console.log("🚀 ~ file: 11Decorators.ts ~ line 50 ~ movie", movie)

// Class decorator
// Property decorator
// Method decorator
// Parameter decorator
// Acessor decorator
