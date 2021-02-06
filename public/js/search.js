var searchReviews = new Bloodhound({
    datumTokenizer: Bloodhound.tokenizers.obj.whitespace('value'),
    queryTokenizer: Bloodhound.tokenizers.whitespace,
    // prefetch: '../data/films/post_1960.json',
    remote: {
      url: '/api/search?s=%QUERY',  //before deploying, make this parameter like "current server"
      wildcard: '%QUERY'
    }
  });
  
  $('.typeahead').typeahead(null, {
    name: 'search-results',
    display: 'city_name',
    source: searchReviews,
    templates: {
        empty: [
          '<div class="empty-message">',
            'unable to find any matches',
          '</div>'
        ].join('\n'),
        suggestion: (review) =>`<div><strong>${review.city_name}</strong> – ${review.city_review.split(" ").slice(0, 10).join(" ")}...</div>`
      }   //displays search suggestions

  });


  $('.typeahead').bind('typeahead:select', function(ev, suggestion) {
        window.location.href=`/reviews/${suggestion.id}`;
        console.dir('Selection: ' , suggestion);

  });
//  render the object to the handlebars

//navigate to full results page.... 
//   });