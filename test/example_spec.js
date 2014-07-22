describe('testingTest initial page', function () {
  it('should greet the named user', function () {
    browser.get('http://angularjs.dev');

    element(by.model('sometext')).sendKeys('Me Julie');

    var greeting = element(by.binding('sometext'));

    expect(greeting.getText()).toEqual('Hello Me Julie!');
  });
});
