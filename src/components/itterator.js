function toItter(object){
    return{
      ...object,
      [Symbol.iterator](){
        const $this = this;
        const keys = Object.keys($this);
        const maxSize = keys.length;
        let current = 0;
        return{
          next(){
            if(current < maxSize){
              return{
                done:false,
                value:$this[keys[current++]],
              }
            }
            else{
              return{
                done:true,
              }
            }
          }
        }
      }
    }
  }
  export default toItter