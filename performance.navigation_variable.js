function () {

  //Getting the performance.navigation value
    var navType = performance.navigation.type;
    
  //Convert the performance.navigation integer value to a string and return corresponding type in understandable text  
    if (navType === 0) {
      return "firstAccess";
      
    } else if (navType === 1) {
      return "pageRefresh";
      
    } else if (navType === 2) {
      return "pageBack";
      
    } else {
      return "unknown";
    }
  
  }