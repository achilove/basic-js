module.exports = function createDreamTeam(arr) {

  if(!Array.isArray(arr)){
    return false
  }  

  let teamName = []
  for(let i=0; i<arr.length; i++){
      if( typeof(arr[i]) === 'string' ){
          arr[i] = arr[i].trim()
          teamName.push(arr[i][0].toUpperCase())
      }
  }

  if(teamName.length === 0){
      return false
  }

  return teamName.sort().join('')
};