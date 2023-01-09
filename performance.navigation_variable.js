function () {
    var navType = performance.navigation.type;
    
    
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