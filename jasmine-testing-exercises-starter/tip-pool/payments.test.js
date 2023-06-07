describe("Payments.js tests", function () {
  beforeEach(function () {
    billAmtInput.value = 100;
    tipAmtInput.value = 20;
})

it('should create a new payment on createCurPayment()', function () {
    let expectedPayment = {
      billAmt: '100',
      tipAmt: '20',
      tipPercent: 20,
    }

    expect(createCurPayment()).toEqual(expectedPayment);
  });


it("should add a current payment to list of AllPayments and reset input values submitPaymentInfo()", function () {
    submitPaymentInfo();

    expect(Object.keys(allPayments).length).toEqual(1);
    expect(allPayments['payment1'].billAmt).toEqual('100');
    expect(allPayments['payment1'].tipAmt).toEqual('20');
    expect(allPayments['payment1'].tipPercent).toEqual(20);
});

it("should append the paymenttable", function() {
    let curPayment = createCurPayment();
    allPayments['payment1'] = curPayment;
    appendPaymentTable(curPayment);

    let newTable = document.querySelectorAll('#paymentTable tbody tr td');
    expect(newTable.length).toEqual(3);
    expect(newTable[0].innerText).toEqual('$100');
    expect(newTable[1].innerText).toEqual('$20');
    expect(newTable[2].innerText).toEqual('20%');
    
})


afterEach(function () {
    billAmtInput.value = '';
    tipAmtInput.value = '';
    paymentTbody.innerHTML = '';
    summaryTds[0].innerHTML = '';
    summaryTds[1].innerHTML = '';
    summaryTds[2].innerHTML = '';
    serverTbody.innerHTML = '';
    paymentId = 0;
    allPayments = {};
});
})
