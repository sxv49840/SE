//const api_url = 'https://ys8gxfz792.execute-api.us-east-1.amazonaws.com/prod';

//const resource = '/properties';
const url = './js/data/properties.json';

async function getListings() {

    try {
        let res = await fetch(url);
        return await res.json();  
    } catch (error) {
        console.log(error);
    }
}

async function renderListings() {
    let listings = await getListings();
    let html = '';
    listings.forEach(p => {
        let htmlSegment = `
        <div class="col-md-4">
            <div class="card mb-4 box-shadow">
              <img class="card-img-top" src="${p.primaryURL}" alt="Thumbnail [100%x225]" >
              <div class="list-card-info">  
                    <a href="detail.html?${p.id}" class="list-card-link list-card-link-top-margin" tabindex="0" id="">
                   <stock class="list-card-addr">${p.stock}</stock></a> 
                  <div class="list-card-footer">
                   <p class="list-card-extra-info">${p.agent}</p>
                  </div>
                  <div class="list-card-heading">
                      <div class="list-card-price">$${p.price}</div>
                      <ul class="list-card-details">
                        <li class="">${p.likes}<abbr class="list-card-label"> like</abbr></li>
                        <li class="">${p.dislike}<abbr class="list-card-label"> dislike</abbr></li>
                        <li class="">${p.type}<abbr class="list-card-label"> stock </abbr></li>
                        <li class="list-card-statusText">- ${p.type} for rent</li>
                   </ul>
                </div>
              </div>
            </div>
        </div>`;
        html += htmlSegment;
        })
    
    let card = document.querySelector('.row');
    card.innerHTML = html;
    }
    

renderListings();
