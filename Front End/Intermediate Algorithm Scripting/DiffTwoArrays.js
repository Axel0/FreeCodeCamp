function diffArray(arr1, arr2) {
  var newArr = [];
  // Same, same; but different.
  var list=[];
  list=arr1.concat(arr2);
  
  newArr=list.filter(function(element){
    
    if(arr1.indexOf(element)!=-1){
      if (arr2.indexOf(element)==-1){
            return element;
      }
    }
    else{
      if(arr1.indexOf(element)==-1){
        if (arr2.indexOf(element)!=-1){
          return element;
        }
      }
      
    }
        
      
    
  });
  
  
  
  
  
  
  
  
  
  
  return newArr;
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);

