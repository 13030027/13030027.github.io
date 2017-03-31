'use strict';

describe('my app', function() {


  it('should automatically redirect to /view1 when location hash/fragment is empty', function() {
    browser.get('index.html');
    expect(browser.getLocationAbsUrl()).toMatch("/view1");
  });

  describe('view2', function() {

    beforeEach(function() {
      browser.get('index.html#!/view2');
    });


    it('should render view2 when user navigates to /view2', function() {
      expect(element.all(by.css('[ng-view] p')).first().getText()).
        toMatch(/Show :/);
    });
	
	it('it should be able to add a new show, result is tested in view1', function() {
		
	  var date = new Date();
	  
	  element(by.model('showdate')).sendKeys('16-12-2017');
	  
	  element(by.model('showseason')).sendKeys('1');
	  
	  element(by.model('showepisode')).sendKeys('1');

      element(by.css('[value="Add Show"]')).click();

    });

  });
  
  describe('view1', function() {

    beforeEach(function() {
      browser.get('index.html#!/view1');
    });


    it('should render view1 when user navigates to /view1', function() {
      expect(element.all(by.css('[ng-view] p')).first().getText()).
        toMatch(/Search:/);
    });
	
	it('should have 1 show and filter based on the search box input', function() {
      var showList = element.all(by.repeater('show in shows'));
      var query = element(by.model('query'));

      expect(showList.count()).toBe(1);

      query.sendKeys('Show name');
      expect(showList.count()).toBe(1);

      query.clear();
      query.sendKeys('test');
      expect(showList.count()).toBe(0);
    });

  });

});
