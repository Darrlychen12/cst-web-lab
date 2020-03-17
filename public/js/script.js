


function createUserTemplate(name, about, url){
  return `<div class="artists_item">
  <div class="artists_item_left">
    <img
      src="${url}"
      alt="img"
    />
  </div>
    <div class="artists_item_description">
      <h3>${name}</h3>
      <p>${about}</p>
    </div>
    <div>
      <button class="delete" onclick="deleteUser(event, '${name}','${url}','${about}')">Delete</button>
    </div>
</div>`;
};






async function searchArtist(){

    let term = document.getElementById('text').value.toUpperCase()
    let pagecontent  = document.querySelectorAll('h3');
    let jsonBlocks;
    try {
      var response = await fetch('/artists');
      jsonBlocks = await response.text();
      console.log(jsonBlocks)
    } catch (e) {
      // handle error
      console.error(e)
    }
    let value = JSON.parse(jsonBlocks)
    if(term != "") {
      for(let i = 0; i < value.length; i++){
        if(value[i].artist.toUpperCase().search(term) < 0){
          pagecontent[i].parentNode.parentNode.setAttribute('style', 'display: none');
        
        }else{
          let val = document.querySelector('.artists_item_left')
          pagecontent[i].parentNode.parentNode.setAttribute('style', 'display: flex');
          pagecontent[i].parentNode.parentNode.setAttribute('style',val);

        }
      }
    }else{
      for (let i = 0; i < value.length; i++) {
        let val = document.querySelector('.artists_item_left')
        pagecontent[i].parentNode.parentNode.setAttribute('style', 'display: flex');
        pagecontent[i].parentNode.parentNode.setAttribute('style',val);
      }
}


  
}


function toggle(){
    let x = document.getElementById('artists_hidden');
    if (!x.style.display) {
      x.style.display = 'none';
    }
    if (x.style.display == 'none') {
      x.style.display = 'flex';
      x.style.flexDirection = 'column';
      x.style.alignItems = 'center';
    } else {
      x.style.display = 'none';
    }
}