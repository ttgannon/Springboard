describe("helpers.test.js", function() {
    beforeEach(function () {
      billAmtInput.value = 100;
      tipAmtInput.value = 20;
      submitPaymentInfo();
    });
  
    it('should sum total tip amount of all payments', function () {
      expect(sumPaymentTotal('tipAmt')).toEqual(20);
      billAmtInput.value = 200;
      tipAmtInput.value = 40;
      submitPaymentInfo();
  
      expect(sumPaymentTotal('tipAmt')).toEqual(60);
    });
  
    it('should sum total bill amount of all payments', function () {
      expect(sumPaymentTotal('billAmt')).toEqual(100);
      billAmtInput.value = 200;
      tipAmtInput.value = 40;
      submitPaymentInfo();
  
      expect(sumPaymentTotal('billAmt')).toEqual(300);
    });
  
    it('should sum total tip percent', function () {
      expect(sumPaymentTotal('tipPercent')).toEqual(20);
      billAmtInput.value = 100;
      tipAmtInput.value = 20;
      submitPaymentInfo();
  
      expect(sumPaymentTotal('tipPercent')).toEqual(40);
    });
  
    it('should sum tip percent of a single tip', function () {
      expect(calculateTipPercent(100, 20)).toEqual(20);
      expect(calculateTipPercent(10, 1)).toEqual(10);
    });
  
    it('should create new cell from value and add to row', function () {
      let newTr = document.createElement('tr');
      appendTd(newTr, 'test');
      expect(newTr.children.length).toEqual(1);
      expect(newTr.firstChild.innerHTML).toEqual('test');
    });
  
    it('should create delete td and add to row', function () {
      let newTr = document.createElement('tr');
      appendDeleteBtn(newTr);
      expect(newTr.children.length).toEqual(1);
      expect(newTr.firstChild.innerHTML).toEqual('X');
    });
  
    afterEach(function() {
      billAmtInput.value = '';
      tipAmtInput.value = '';
      paymentTbody.innerHTML = '';
      summaryTds[0].innerHTML = '';
      summaryTds[1].innerHTML = '';
      summaryTds[2].innerHTML = '';
      serverTbody.innerHTML = '';
      allPayments = {};
      paymentId = 0;
    });
  });