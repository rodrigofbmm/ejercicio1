const input = document.getElementById("search"),
display = document.getElementById("characters");

fetch(`https://rickandmortyapi.com/api/character/`)
    .then(res => res.json())
    .then(data => {
        console.log(data);

        characters.innerHTML = data.results.map(item => `
        
            <div class = 'characters'>
            
                <img src = '${item.image}' />
                
                    <h3>${item.name}</h3>
                
                </div>
            
            </div>
        
        `).join('');
    });

// Next clicking
let counter = 1;
next.addEventListener('click', () => {

    fetch(`https://rickandmortyapi.com/api/character/?page=${++counter}`)
        .then(res => res.json())
        .then(data => {
            console.log(data);

            characters.innerHTML = data.results.map(item => `
            
                <div class = 'character'>
                
                    <img src = '${item.image}' />
                    
                        <h3>${item.name}</h3>
                    
                    </div>
                
                </div>
            
            `).join('');
        });
});

// Prev clicking
prev.addEventListener('click', () => {

    fetch(`https://rickandmortyapi.com/api/character/?page=${--counter}`)
        .then(res => res.json())
        .then(data => {
            console.log(data);

            characters.innerHTML = data.results.map(item => `
            
                <div class = 'character'>
                
                    <img src = '${item.image}' />
    
                        <h3>${item.name}</h3>
                    
                    </div>
                
                </div>
            
            `).join('');
        });
});

input.addEventListener("keyup", (e) => {
  let output = "";
  fetch(`https://rickandmortyapi.com/api/character/?name=${e.target.value}`)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      data.results.forEach((character) => {
        if (e.target.value.length >= 1) {
          output += `          
            <div class="card mt-5 mx-auto" style="width: 18rem">
            <img src="${
              character.image
            }" class="card-img-top" alt="character image" />
                <div class="card-body">
                    <h3 class="card-title">${character.name}</h3>
                </div>
            </div>        
          `;
        }
      });
      display.innerHTML = output;
    });
  output = "";
});
