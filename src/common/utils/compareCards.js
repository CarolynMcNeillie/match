   export const compareCards = (shuffledCards, compareArray, totalPairs, matchCounter, setIsWinner, setMatchCounter, flippedCards, setFlippedCards, setIsComparing) => {
     const firstCard = shuffledCards[compareArray[0]].name;
     const secondCard = shuffledCards[compareArray[1]].name;

     if (firstCard === secondCard) {
       if (totalPairs === matchCounter + 1) {
         setIsWinner(true);
       }
       setMatchCounter(matchCounter + 1);
       setIsComparing(false)
     } else {
       setTimeout(() => {
         const updatedFlippedCards = [...flippedCards];
         compareArray.forEach(cardIndex => {
           const index = updatedFlippedCards.indexOf(cardIndex);

           if (index > -1) {
             updatedFlippedCards.splice(index, 1);
           }
         });
         setFlippedCards(updatedFlippedCards);
         setIsComparing(false)
       }, 1000);
     }
   }
