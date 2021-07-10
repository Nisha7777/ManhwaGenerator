import React, {useState} from 'react';
import './App.css';
import {Button, Container, TextField} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import webtoons from './data';
import Webtoon from './components/Webtoon';
//howdy partner.
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
      // console.log(genre);

      //I will not need the below two lines later, as I will just want to be returning one webtoon. 
      //finding the webtoons with matching genre
      const matched = webtoons.filter(webtoon => webtoon.genre.includes(genre.toLowerCase()));

      //generating a random number within the length of the matched webtoons array.
      if (matched.length >= 0) {
        const randomWebtoonIndex = Math.floor(Math.random()*matched.length);

        setMatchingWebtoons([...matchingWebtoons,matched[randomWebtoonIndex]]);
        console.log(matchingWebtoons);
      } else {
        console.log("Oopsie no matching webtoons for that genre. :/")
      }
    }
  }

  function showMatchingWebtoon(id) {
    setMatchingWebtoons(matchingWebtoons.filter((webtoonItem, index) =>{
      return index === id; //only returning the webtoon with the matching id.
    }))
  }

    return (
      <Container maxWidth="sm" className={classes.container}>
      <h1>Weeb Generator</h1>
      <form className={classes.root} onSubmit={handleSubmit} noValidate autoComplete="off">
        <TextField id="outlined-basic" label="Genre" variant="outlined" onChange={(e) => setGenre(e.target.value)}/>
        <Button type="submit" variant="contained" color="secondary">
        Generate
      </Button>
      </form>
      <br></br>

      {/* You don't need below function but it's handy to practice anyway. You only want to render one webtoon title. So you probably won't need map. You should create a random function first. */}
      {/* {matchingWebtoons.map((webtoonItem) => {
        return <Webtoon
        title = {webtoonItem.title}
        genre = {webtoonItem.genre}
        synopsis = {webtoonItem.synopsis}
        />
      })} */}




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
