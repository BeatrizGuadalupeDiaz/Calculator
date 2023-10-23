export class BasicOperation {
    private currentValue : number
     constructor (){
         this.currentValue = 0
     }
     setAdd(value :number){
         this.currentValue += value
         return this
     }
     setSubtract(value :number){
         this.currentValue -= value
         return this
     }
     setDivide(value : number) {
         if(value === 0){
             console.log('No se puede dividir entre 0')
         }
         this.currentValue /= value
         return this
     }
     setMultuply(value : number){
         this.currentValue *= value
         return this
     }
     getTotal(){
         return this.currentValue
     }
 }