const singleton=(function(){
    let instancia;
    function crearInstancia(){
        const objeto=new Object({nombre:'Jonathan'});
        return objeto;
    }

    return{
        obtenerInstancia:function(){
            if(!instancia){
                instancia=crearInstancia();
            }
            return instancia;
        }
    }
})();

/* 

const Singleton = (function() {
  let instance;

  function createInstance() {
    const object = new Object({name:'Brad'});
    return object;
  }

  return {
    getInstance: function() {
      if(!instance){
        instance = createInstance();
      }
      return instance;
    }
  }
})();

const instanceA = Singleton.getInstance();
const instanceB = Singleton.getInstance();

console.log(instanceA === instanceB);
*/

const instanciaA= singleton.obtenerInstancia();
console.log(instanciaA);