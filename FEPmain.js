const app = document.getElementById('app');


let clickCount = 0;
let firstCard = "";
let secondCard = "";
let cardIds = [];
let i = 0;


const picturesPick = async () => {
    const x = await fetch(
      "https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=f315febdc75fb1e9b82dec177517312a&tags=clowns%2C+carnival%2C+circus&content_type=1&content_types=0&extras=url_n%2C+path_alias&per_page=10&page=1&format=json&nojsoncallback=1"
    );
    const response = await x.json();
    const data = [response.photos];
    // console.log(data);
    return data;
  };
  

  const getArrayOfUrls = async () => {
  const newArray = await picturesPick();
  // need to iterate over array of objects and return the property with the key of id for each object element in the array and store it in a new array
  let el = newArray[0].photo.map((el) => {
    return el.url_n;
    });
    console.log(el);
    return el;
  };

  getArrayOfUrls();

 
const boardBiz = async () => {
    const board = await getArrayOfUrls();
    const cards = board.concat(board);
    const card = [cards[i = 0, i < cards.length, i++]];
    console.log(cards);
    const grid = document.createElement("div");
    grid.classList.add("activeCards");
    app.appendChild(grid);
    cards.forEach((el) => {
        const cardElement = document.createElement("div");
        cardElement.classList.add("card");
        grid.appendChild(cardElement);

        const cardImageElement = document.createElement('div');
        cardImageElement.classList.add('card-image');
        cardElement.appendChild(cardImageElement);

        // const cardBackElement = document.createElement('div');
        // cardBackElement.classList.add('card-back');
        // cardImageElement.appendChild(cardBackElement);

        // const cardBackImageElement = document.createElement('img');
        // cardBackImageElement.classList.add('card-back-image');
        // cardBackImageElement.src = el;
        // cardBackElement.appendChild(cardBackImageElement);

        const cardFrontElement = document.createElement('div');
        cardFrontElement.classList.add('card-front');
        cardImageElement.appendChild(cardFrontElement);

        const cardFrontImageElement = document.createElement('img');
        cardFrontImageElement.classList.add('card-front-image');
        cardFrontImageElement.src = cards[i];
        cardFrontElement.appendChild(cardFrontImageElement);

//     //     const flipCard = {onclick, cards}
//     //         card.forEach(element => {
//     //         [cardFrontImageElement, cardBackImageElement]
//     //     });
//     //     cardBackImageElement.ATTRIBUTE_NODE('click', flipCard);
        
//     //     const clicked = firstCard.addEventListener('click', (flipCard) => {
//     //         cardElement.classList.add('flipped');
//     //         toggleCard(cardElement);
//     //         if (firstCard === secondCard) {
//     //             cardElement.classList.add('matched');
//     //             firstCard.removeEventListener('click', flipCard);
//     //             secondCard.removeEventListener('click', flipCard);
//     //             clickCount++;
                
//     //         }
//     //         if (firstCard !== secondCard) {
//     //             cardElement.classList.remove('flipped');
//     //             re
//     //         }






//     //     });

        
    

//     // const app = document.getElementById('app');
    


    cards.sort(() => 0.5 - Math.random());
    // card.setAttribute("id", i);
//     grid.appendChild(cards);

    
//     // card.appendChild(card);
//     // i++;
//     // need to push cards to DOM and append them 
//     // const grid = document.createElement("div");
//     // grid.classList.add("grid");
//     // const app = document.createElement("div");
//     // grid.classList.add("grid");
//     // appendChild(cards);


//     const app = document.createElement("div");
//     grid.classList.add("grid");
//     appendChild(cards);
//     cards.forEach((card) => {
//         card.addEventListener("click", cards);
//         cards.classList.add("card");
//         cards.setAttribute("data", i);
//         i++;
//       });
//         // console.log(img);
//         // console.log(div);
//         // console.log(grid);
//         console.log(cards);
//         // console.log(board);
//         return cards;
        
    })};
    
    boardBiz();



  

    const flipCard = async () => {
        const card = await boardBiz();
        const cardIds = card.getAttribute.id;
        cardIds.push(cardIds);
        card.classList.add("flip");
        if (cardIds.length === 2) {
            setTimeout(checkForMatch, 500);
        }
    };


    const checkForMatch = async () => {
        const cardset = await boardBiz();
        const firstCard = cardset[cardIds[0]];
        const secondCard = cardset[cardIds[1]];
        if (firstCard.dataset.id === secondCard.dataset.id) {
            firstCard.removeEventListener("click", flipCard);
            secondCard.removeEventListener("click", flipCard);
            clickCount++;
            cardIds = [];
            if (clickCount === 10) {
                alert("You win!");
            }
        } else {
            firstCard.classList.remove("flip");
            secondCard.classList.remove("flip");
            cardIds = [];
        }
    };


    // checkForMatch();

    



// const dataset = async () => {
//     const cards = await boardBiz();
//     const card = cards.map((el) => {
//         return el.dataset.id;
//     });
//     console.log(card);
//     return card;
// };

// dataset();

// const cardIds = async () => {
//     const cards = await boardBiz();
//     const card = cards.map((el) => {
//         return el.dataset.id;
//     });
//     console.log(card);
//     return card;
// };

// cardIds();

// const boardBiz = async () => {
//     const board = await getArrayOfUrls();
//     const app = document.getElementById('app');
//     const duplicateBoard = board.concat(board);
//     const shuffleBoard = duplicateBoard.sort(() => 0.5 - Math.random());
//     const buildBoard = shuffleBoard.map((el) => {
//         const div = document.createElement('div');
//         div.classList = 'activeCard';
//         div.setAttribute('id', i);
//         app.appendChild(div);
//         div.appendChild(el);
//         i++;
//         return div;
//     });
//     return buildBoard;
//     // console.log(shuffledBoard);
//     // return shuffledBoard;
// };

// boardBiz();
// const addPicsToDom = async () => {
//     const response = await buildBoard(); {
     
//         const img = document.createElement("img");
//         const imgsrc = response[i = 0, i < response.length, i++];
//         app.appendChild(imgsrc);
//         img.classList = 'activeCard';
//         console.log(imgsrc);
//         return img;
//     };
//     };
// buildBoard();

// const board2 = async () => {
//     const response = await buildBoard();
//     const board2 = response.concat(response);
//duplicate the array of cards to make a match for each card
    
    // }});
    
    // console.log(board);
    // return buildBoard;
// };

// const buildBoard2 = async () => {
//     await buildBoard();  
    
//     const board3 = buildBoard().concat(buildBoard());
//     const randomBoard = board3.sort(() => Math.random() - 0.5);
//     console.log(randomBoard);
//     const buildBoard = randomBoard.map((el) => {
//         return el;
//     })};
    
// board2();
//   function renderItem() {
//     // div.innerText = name;
//     // div.setAttribute('url', URL);
//     app.setAttribute('url', URL);
//     div.appendChild(app);
//     app.appendChild(img); //entry point to the DOM
//     div.classList = 'activeCard';
//     // app.appendChild(addPicsToDom);
//   };

//   renderItem();
