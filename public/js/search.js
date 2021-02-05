var searchReviews = new Search({
    datumTokenizer: Bloodhound.tokenizers.obj.whitespace('value'),
    queryTokenizer: Bloodhound.tokenizers.whitespace,
    // prefetch: '../data/films/post_1960.json',
    remote: {
      url: 'https://yahuaxydlj:p1p8dt5y8g@birch-114820214.us-east-1.bonsaisearch.net:443',
      wildcard: '%QUERY'
    }
  });
  
  $('#remote .typeahead').typeahead(null, {
    name: 'search-results',
    display: 'value',
    source: reviews
  });