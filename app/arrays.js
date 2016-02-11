exports = (typeof window === 'undefined') ? global : window;

exports.arraysAnswers = {

  indexOf : function(arr, item) {

},
  
  sum : function(arr) {
    var result=0


    return result;

  },

  remove : function(arr, item) {
    var result=[];
    for (i=0; i < arr.length; i++){
        
      if(arr[i]!== item){
        result.push(arr[i])
      }

    }

    return result;
  },

  removeWithoutCopy : function(arr, item) {

  },

  append : function(arr, item) {
    arr.push(item)

    return arr;

  },

  truncate : function(arr) {

  },

  prepend : function(arr, item) {
    arr.unshift(item)

    return arr;

  },

  curtail : function(arr) {

  },

  concat : function(arr1, arr2) {

  },

  insert : function(arr, item, index) {
    arr.splice(index, 0, item);

    return arr;

  },

  count : function(arr, item) {
    var result=0;
    for (i=0; i<arr.length; i++){
      if(arr[i]===item){
        result = result+1
      }

    }
    return result;
  },

  duplicates : function(arr) {

  },

  square : function(arr) {

  },

  findAllOccurrences : function(arr, target) {

  }
};
