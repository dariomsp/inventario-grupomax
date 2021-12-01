let id=0;
class Material {
    constructor(){
        this.material = {
            id: id++,
            nombre:'',
            unidad:'',
            cantidad:null
        } 
    }
    agregar(nombre, unidad,cantidadInicial){
        const nombreMaterial = document.getElementById("material").value;
        const unidadMaterial = document.getElementById("unidad").value;
        const cantidadMaterial = document.getElementById("cantidadInicial").value;
        this.material.nombre=nombreMaterial;
        this.material.unidad=unidadMaterial;
        this.material.cantidad=cantidadMaterial;
        return this.material;
    }
    
}


function agregarMaterial(){
    const materialAgregado = new Material()
    materialAgregado.agregar()
    materiales.push(materialAgregado)
    console.log(`${materialAgregado.material.cantidad} ${materialAgregado.material.nombre} agregado.`)
    console.log(materiales)
}

let materiales = [];
