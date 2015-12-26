### orderBy

Order an array of objects by given key.

#### orderBy(`array`, `key`[, `shouldDecend`])

Order `array` by `key`, and __returns__ the result array.

+ `array`: the array of objects to be orderd.
+ `key`: target key.
+ `shouldDecend`: [__optional__] _Default:_ false. If `true`, the result will be in decending order.

#### Example

~~~js
// In Node.js
var orderBy = require('orderBy').orderBy;
var ordered = orderBy(targetArray, 'id');


// In browser. Include `orderBy` through <script> tag, then:
var ordered = orderBy(targetArray, 'id'); // `orderBy` is attached to `window`.
~~~

#### License

MIT
