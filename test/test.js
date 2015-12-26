'use strict';
var should = require('should');
var orderBy = require('../index.js');

var friends =
       [{name:'John', phone:'555-1212', age:10},
       {name:'Mary', phone:'555-9876', age:19},
       {name:'Mike', phone:'555-4321', age:21},
       {name:'Adam', phone:'555-5678', age:35},
       {name:'Julie', phone:'555-8765', age:29}];

var expectAge =
       [
       {name:'John', phone:'555-1212', age:10},
       {name:'Mary', phone:'555-9876', age:19},
       {name:'Mike', phone:'555-4321', age:21},
       {name:'Julie', phone:'555-8765', age:29},
       {name:'Adam', phone:'555-5678', age:35},
       ];

var expectName =
       [
       {name:'Adam', phone:'555-5678', age:35},
       {name:'John', phone:'555-1212', age:10},
       {name:'Julie', phone:'555-8765', age:29},
       {name:'Mary', phone:'555-9876', age:19},
       {name:'Mike', phone:'555-4321', age:21}
       ];


describe('orderBy.js', function () {
  it('should exist orderBy', function () {
    should.exist(orderBy);
  });

  it('should put array in correct order (by number).', function () {
    var result = orderBy(friends, 'age');
    should.deepEqual(result, expectAge);
  });

  it('should put array in correct order (by string).', function () {
    var result = orderBy(friends, 'name');
    should.deepEqual(result, expectName);
  });
});

