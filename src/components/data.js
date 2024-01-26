let searchForm = document.getElementById('searchForm'),
    searchResults = document.getElementById("searchResults"),
    results = document.getElementById("results")

searchForm.addEventListener("submit", function(event) {
    event.preventDefault()
    searchResults.innerHTML = ""
    
    fetch(
            `https://itunes.apple.com/search
                ?term=${encodeURI(this.query)}
                &limit=${this.limit}
                &entity=musicTrack`
        )
    .then (function (data){
        return data.json()
    })
    .then (function(json) {
        // console.log(json, "data") 
      
        //Mapping the data to HTML elements
        let data= json.results
        results.innerHTML = (data.length>0) ?"Results...": "Nothing found..."
        
       
        data.map((item)=>{
          // console.log(item)
        let id = item.trackId,
            artist = item.artistName,
            audioFile = item.previewUrl,
            cover = item.artworkUrl100,
            name = item.trackName,
            album = item.collectionName

              results = `
                          
                          <div id= "${id}" class="songcard">
                              <img class="" src="${cover}" alt="Card image cap">

                              
                              <div class="songcard-body">
                                 
                                  <h4 class="songcard-title">${name}</h4>
                                  <!--Text-->
                                  <p >${artist}</p>
                                  <h4 class="album">${album}</h4>
                                  <audio controls class ="audio">
                                  <source value="" src="${audioFile}" type="audio/mpeg">
                                  <a href="#" class="btn btn-primary">Play</a>
                              </div>

                          </div>
                         
                       `
               searchResults.insertAdjacentHTML("beforeEnd", results)
            
            
          
        })//Data Mapping
        
    })
})
