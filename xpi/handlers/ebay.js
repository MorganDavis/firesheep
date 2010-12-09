// Authors:
//   Morgan Davis <serif@hexoffenders.com>

register({
  name: 'eBay',
  domains: [ 'ebay.com' ],
  url: 'http://my.ebay.com',
  sessionCookieNames: [ 'shs', 'ds1', 'dp1', 'ns1', 's', 'nonsession', 'secses', 'ebay', 'npii' ],
  
identifyUser: function () {
    var resp = this.httpGet(this.siteUrl);
    this.userName = resp.body.querySelector('.greeting').textContent.split(', ')[1].slice(0, -12);
  }
});
