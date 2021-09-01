console.log('***** Music Collection *****')

// - Create a variable `collection` that starts as an empty array.

let collection = [];

//- Add a function named `addToCollection`. This function should:
//- Take in the album's `title`, `artist`, `yearPublished` as input parameters
  function  addToCollection({title, artist, yearPublished}) {
    //- Create a new object having the above properties
    let myQuranObj = {
        title : title ,
        artist : artist,
        yearPublished: yearPublished
    } 
    //- Add the new object to the end of the `collection` array
    collection.push(myQuranObj)
  //- Return the newly created object
    return collection;
  }

  // addToCollection('Quran', 'Sudaisy', 1999 ) - // this way will also work

addToCollection({title: 'Al-Faatiha', artist:'Husary', yearPublished: 1985})
  console.log(collection);

  // - Test the `addToCollection` function:
  // - Add 6 albums to your collection. Aim to have a mix of both same and different artists and published years. (Feel free to share your musical interests, or make stuff up. Totally fine either way.)

  addToCollection({title: 'Al-Baqarah', artist:'Huthaify', yearPublished: 1995})
  addToCollection({title: 'Al-Imraan', artist:'Sadaisy', yearPublished: 2005})
  addToCollection({title: 'Al-Nisa', artist:'Manshaawy', yearPublished: 1911})
  addToCollection({title: 'Al-Maidah', artist:'Shuraim', yearPublished: 2004})
  addToCollection({title: 'Al-Anaam', artist:'As-Sayed', yearPublished: 1995})
  addToCollection({title: 'Al-Araaf', artist:'Husary', yearPublished: 1989})
  
  // - Console.log each album as added using the returned value.
  // - After all are added, console.log the `collection` array.

  console.log(collection);

  // - Add a function named `showCollection`. This function should:
  // - Take in an array parameter. (This allows it to be reused to show any collection, like the results from the find or search.)

  function showCollection(array){
    // - Console.log the number of items in the array.
    console.log(array);
      // - Loop over the array and console.log each album's information formatted like: `TITLE by ARTIST, published in YEAR`.
    for (let i = 0; i < array.length; i++){
      console.log(`${array[i].title} by: ${array[i].artist}, Published: ${array[i].yearPublished}`);

    }   // end of foor loop
  }     // end of of showCollection
  
  // - Add a function named `findByArtist`. This function should:
  // - Take in `artist` (a string) parameter
  function findByArtist (artist){
   // - Create an array to hold any results, empty to start
    let results = [];
   // - Loop through the `collection` and add any objects with a matching artist to the array.
    for (let i = 0; i < collection.length; i++){
      if ( artist == collection[i].artist){
        results.push(collection[i])
      }
    } if (results.length == 0){
   // - Return the array with the matching results. If no results are found, return an empty array.
        return[]
    }else {
        return results
    }
  }

  console.log(findByArtist('Husary'));
  
   
