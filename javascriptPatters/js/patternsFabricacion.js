function fabricarBalon(){
    this.crearBalon=function(type){
    let balon;
    if(type==='football'||type==='soccer') balon=new football();
            
    else if(type==='basketball') balon=new basketBall();
    
    balon.rodar=function(){
        return`el ${this._type} es ta rodando`;
    }
    return balon;
}
}

const football= function(){
    this._type ='football';
        this.patada=function(){
            return 'Pateaste el balon de football'
        };
}
const basketBall= function(){
    this._type ='basketball';
        this.botar=function(){
            return 'Botaste el balon de basketball'
        };
}

const ball=[];
const factory=new fabricarBalon();
const  myFootball=factory.crearBalon('football');
const myBasketball=factory.crearBalon('basketball');
ball.push(myFootball);
ball.push(myBasketball);
console.log(ball)
ball.forEach(element => {
    element.rodar();
});
/* class fabricarBalon{
    constructor(){
        this.crearBalon=function(type){
            let balon;
            if(type==='football'||type==='soccer') balon=new football();
            
            else if(type==='basketball') balon=new basketBall();

            balon.rodar=function(){
                return`el ${this._type} es ta rodando`;
            }
            return balon;
        }
    }
}

class football{
    constructor() {
        this._type ='football';
        this.patada=function(){
            return 'Pateaste el balon de football'
        };
    }
}

class basketBall{
    constructor() {
        this._type ='basketball';
        this.botar=function(){
            return 'Botaste el balon de basketball'
        };
    }
}

const factory=new fabricarBalon();
const  myFootball=factory.crearBalon('football');
const myBasketball=factory.crearBalon('basketball');

console.log(myFootball.rodar());
console.log(myFootball.patada());
console.log(myBasketball.rodar());
console.log(myBasketball.botar());
 */