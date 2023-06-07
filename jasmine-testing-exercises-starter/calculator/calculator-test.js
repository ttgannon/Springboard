it('should calculate the monthly rate correctly', function () {
  expect(calculateMonthlyPayment(10000, 8, 5.8)).toEqual('130.44');
});


it("should return a result with 2 decimal places", function() {
  expect(calculateMonthlyPayment(10043,8,5.8)).toEqual('131.00');
});
