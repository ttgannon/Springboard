describe("Servers test (with setup and tear-down)", function() {
  beforeEach(function () {
    // initialization logic
    serverNameInput.value = 'Alice';
  });

  it('should add a new server to allServers on submitServerInfo()', function () {
    submitServerInfo();

    expect(Object.keys(allServers).length).toEqual(1);
    expect(allServers['server' + serverId].serverName).toEqual('Alice');
  });

  it('should reject empty input', function() {
    serverNameInput.value = '';
    submitServerInfo();

    expect(Object.keys(allServers).length).toEqual(0);
  })

  it('should add new table element to servertable with correct data', function() {
    submitServerInfo();
    updateServerTable();

    let updatedTable = document.querySelectorAll('#serverTable tbody tr td');
    expect(updatedTable[0].innerText).toEqual('Alice');
    expect(updatedTable[1].innerText).toEqual('$0.00');
  })

  afterEach(function() {
    // teardown logic
    serverId = 0;
    serverTbody.innerHTML = '';
    allServers = {};
  });
});
