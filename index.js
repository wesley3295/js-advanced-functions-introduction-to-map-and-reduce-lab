// Your code here
function mapToNegativize(sourceArray){
     const neg = sourceArray.map((s)=>{
        return -1 * s
    })
    return neg
}

function mapToNoChange(sourceArray){
const original = sourceArray.map((s)=>{
    return s
})
return original
}

function mapToDouble(sourceArray){
    const doubled = sourceArray.map((s)=>{
        return s * 2
    })
    return doubled
}

function mapToSquare(sourceArray){
    const squared = sourceArray.map((s)=>{
        return s**2
    })
    return squared
}

function reduceToTotal(sourceArray, startingPoint=0){
    const total = sourceArray.reduce((startingPoint, s)=>{
        return s + startingPoint
    }, startingPoint)
    return total
}

function reduceToAllTrue(ssourceArray) {
    for (let i = 0; i < ssourceArray.length; i++ ) {
      if (!ssourceArray[i]) return false
    }
    return true
  }

function reduceToAnyTrue(sourceArray){
    for (let i = 0; i < sourceArray.length; i++ ) {
        if (sourceArray[i]) return true
      }
      return false
}

