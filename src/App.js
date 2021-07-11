import React, {useEffect, useState} from 'react';
import './App.css';
import {Button, Container, TextField} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import webtoons from './data';
import Webtoon from './components/Webtoon';

const useStyles = makeStyles(theme => ({
container: {
  alignItems: 'center',
  display: 'flex',
  flexDirection: 'column'
}
}));


function App() {

  const classes=useStyles();
  const [genre, setGenre] = useState("");
  const [matchingWebtoons, setMatchingWebtoons]= useState([]); //initial value is going to be an empty array.
  

  const handleSubmit = (e) => {
    e.preventDefault(); //to prevent the page from automatically refreshing.

    if (genre) {

      //finding the webtoons with matching genre
      const matched = webtoons.filter(webtoon => webtoon.genre.includes(genre.toLowerCase()));

      //generating a random number within the length of the matched webtoons array.
      if (matched.length >= 0) {
        const randomWebtoonIndex = Math.floor(Math.random()*matched.length);

        setMatchingWebtoons(matched[randomWebtoonIndex]);
        // console.log("Before useEffect:", matchingWebtoons);
      // } else {
      //   console.log("Oopsie no matching webtoons for that genre. :/")
      // }
    }
  }
}

useEffect(()=> {
  console.log(matchingWebtoons)
}, [matchingWebtoons]);

  // function showMatchingWebtoon(id) {
  //   setMatchingWebtoons(matchingWebtoons.filter((webtoonItem, index) =>{
  //     return index === id; //only returning the webtoon with the matching id.
  //   }))
  // }

  // console.log("After", matchingWebtoons);

  // const matched = webtoons.filter(webtoon => webtoon.genre.includes("wholesome"));


    return (

      <Container maxWidth="sm" className={classes.container}>
      <h1>Manhwa Generator</h1>
      <form className={classes.root} onSubmit={handleSubmit} noValidate autoComplete="off">
        <TextField id="outlined-basic" label="Genre" variant="outlined" onChange={(e) => setGenre(e.target.value)}/>
        <Button type="submit" variant="contained" color="secondary">
        Generate
      </Button>
      </form>

      {/*You only want to render one webtoon title. */}
      {matchingWebtoons.map(webtoonItem => {
        return <Webtoon
        title = {webtoonItem.title}
        genre = {webtoonItem.genre}
        synopsis = {webtoonItem.synopsis}
        />
      })}




      {/* <Webtoon 
      title = {webtoons[0].title}
      genre = {webtoons[0].genre}
      synopsis = {webtoons[0].synopsis}
      />

    <Webtoon 
      title = {webtoons[1].title}
      genre = {webtoons[1].genre}
      synopsis = {webtoons[1].synopsis}
      />

    <Webtoon 
      title = {webtoons[2].title}
      genre = {webtoons[2].genre}
      synopsis = {webtoons[2].synopsis}
      /> */}

      </Container>
    );
}

export default App;
