simpleOverload
==============

A simple method to overload functions in a beautiful and pratical from/to relationship way.



How to use:
===========
```javascript
  var myOverloadedFunc = _$over({
    /**
     * Called without params
     */
      '' : function() {
      return 'Overloaded!!!';
    }
    , 'String' : function(str) {
      return 'Simple Overload: ' + str; 
    }
    , 'Number' : function(n) {
      return 'It\'s a the number ' + n;
    }
    // It's a from/to relationship with the prop name and expected params!!!
    , 'String,Number,String' : function(str1, n, str2) {
      return str1 + n*n + str2;
    }
  });
  
  myOverloadedFunc();
  myOverloadedFunc('Fernando');
  myOverloadedFunc('2'); // it's a String, not a Number!!! Pay attention.
  myOverloadedFunc(47);
  myOverloadedFunc('', 32, 'Faria');
  myOverloadedFunc(21, 'fernando', 45); // throws an exception because it's not a registered signature...
```



Regards XD
