let assert = require("assert");
var mostProfitableDepartment = require('../mostProfitableDepartment.js');
var salesData = [
    {department : 'hardware', sales : 4500, day : 'Monday'},
    {department : 'outdoor', sales : 1500, day : 'Monday'},
    {department : 'carpentry', sales : 5500, day : 'Monday'},
    {department : 'hardware', sales : 7500, day : 'Tuesday'},
    {department : 'outdoor', sales : 2505, day : 'Tuesday'},
    {department : 'carpentry', sales : 1540, day : 'Tuesday'},
    {department : 'hardware', sales : 1500, day : 'Wednesday'},
    {department : 'outdoor', sales : 8507, day : 'Wednesday'},
    {department : 'carpentry', sales : 8009, day : 'Wednesday'},
    {department : 'hardware', sales : 12000, day : 'Thursday'},
    {department : 'outdoor', sales : 18007, day : 'Thursday'},
    {department : 'carpentry', sales : 6109, day : 'Thursday'},
    {department : 'hardware', sales : 7005, day : 'Friday'},
    {department : 'outdoor', sales : 12006, day : 'Friday'},
    {department : 'carpentry', sales : 16109, day : 'Friday'},
];

var salesData2 = [
    {department : 'electronics', sales : 4500, day : 'Monday'},
    {department : 'outdoor', sales : 1500, day : 'Monday'},
    {department : 'carpentry', sales : 5500, day : 'Monday'},
    {department : 'steelwork', sales : 7500, day : 'Tuesday'},
    {department : 'outdoor', sales : 2505, day : 'Tuesday'},
    {department : 'carpentry', sales : 1540, day : 'Tuesday'},
    {department : 'hardware', sales : 1500, day : 'Wednesday'},
    {department : 'outdoor', sales : 8507, day : 'Wednesday'},
    {department : 'carpentry', sales : 8009, day : 'Wednesday'},
    {department : 'hardware', sales : 12000, day : 'Thursday'},
    {department : 'carpentry', sales : 6109, day : 'Thursday'},
    {department : 'hardware', sales : 7005, day : 'Friday'},
    {department : 'electronics', sales : 21006, day : 'Friday'},
    {department : 'electronics', sales : 16109, day : 'Saturday'},
    {department : 'steelwork', sales : 7500, day : 'Tuesday'},
    {department : 'outdoor', sales : 2505, day : 'Tuesday'},
    {department : 'carpentry', sales : 1540, day : 'Tuesday'},
    {department : 'steelwork', sales : 1500, day : 'Wednesday'},
    {department : 'carpentry', sales : 8009, day : 'Wednesday'},
];

var salesData3 = [
  {department : 'electronics', sales : 4100, day : 'Monday'},
  {department : 'outdoor', sales : 1500, day : 'Monday'},
  {department : 'carpentry', sales : 5500, day : 'Monday'},
  {department : 'steelwork', sales : 8500, day : 'Tuesday'},
  {department : 'outdoor', sales : 2500, day : 'Tuesday'},
  {department : 'carpentry', sales : 1540, day : 'Tuesday'},
  {department : 'hardware', sales : 1500, day : 'Wednesday'},
  {department : 'outdoor', sales : 8500, day : 'Wednesday'},
  {department : 'carpentry', sales : 8009, day : 'Wednesday'},
  {department : 'hardware', sales : 15000, day : 'Thursday'},
  {department : 'carpentry', sales : 6109, day : 'Thursday'},
  {department : 'hardware', sales : 7005, day : 'Friday'},
  {department : 'electronics', sales : 10000, day : 'Friday'},
  {department : 'electronics', sales : 1500, day : 'Saturday'},
  {department : 'steelwork', sales : 89500, day : 'Tuesday'},
  {department : 'outdoor', sales : 2505, day : 'Tuesday'},
  {department : 'carpentry', sales : 15040, day : 'Tuesday'},
  {department : 'steelwork', sales : 15000, day : 'Wednesday'},
  {department : 'carpentry', sales : 8019, day : 'Wednesday'},
];
describe('This mostProfitableDepartment function' , function(){
    it('should check which departments are the most profitable' , function(){
        assert.equal('outdoor', mostProfitableDepartment(salesData));

    });

    it('should check which departments are the most profitable' , function(){
        assert.equal('electronics', mostProfitableDepartment(salesData2));

    });

    it('should check which departments are the most profitable' , function(){
        assert.equal('steelwork', mostProfitableDepartment(salesData3));

    });
});