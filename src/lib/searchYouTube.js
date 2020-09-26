var searchYouTube = (options, callback) => {
  // TODO
  console.log(options.key, 'key');
  $.get(`https://www.googleapis.com/youtube/v3/search?key=${options.key}&q=${options.query}&maxResults=5&part=snippet&type=video&videoEmbeddable=true`)
    .done(result => {
      if(callback){
        callback(result.items)
      }
    })
    .fail(err => {
      console.log('Err in getting data from YouTube', err);
    })
};

export default searchYouTube;


// https://www.googleapis.com/youtube/v3/search?key=AIzaSyBH41OxxoZjYhPhAB6o2crBuem6EwGwKWk&q=cute&maxResults=5&part=snippet&type=video&videoEmbeddable=true
