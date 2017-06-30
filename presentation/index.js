// Import React
import React from "react";

// Import Spectacle Core tags
import {
  BlockQuote,
  Cite,
  Deck,
  Heading,
  ListItem,
  List,
  Quote,
  Slide,
  Text,
  Image
} from "spectacle";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");


const images = {
  foodcard1: require("../assets/foodcard1.jpg"),
  foodcardswipe: require("../assets/foodcardswipe.jpg"),
  foodcardheart: require("../assets/foodcardheart.jpg"),
  foodcardhistory: require("../assets/foodcardhistory.jpg"),
};

preloader(images);

const theme = createTheme({
  primary: "white",
  secondary: "red",
  tertiary: "black",
  quartenary: "#CECECE"
}, {
  primary: "Montserrat",
  secondary: "Helvetica"
});

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck transition={["zoom", "slide"]} transitionDuration={500} theme={theme}>
        <Slide transition={["zoom"]} bgColor="secondary">
          <Heading size={1} fit lineHeight={1} textColor="primary">
            FoodMood
          </Heading>
          <Text margin="10px 0 0" textColor="tertiary" size={1} fit bold>
            Stop asking what's for dinner!
          </Text>
        </Slide>
        <Slide transition={["fade"]} bgColor="tertiary">
          <Heading size={6} textColor="primary" caps>We bring you the recipes </Heading>
          <Heading size={3} textColor="secondary">Just swipe to see your options</Heading>
          <Image src={images.foodcardswipe}/>
        </Slide>
        <Slide transition={["zoom"]} bgColor="primary">
          <Heading size={6} textColor="secondary" caps>Once you have found something</Heading>
          <Heading size={3} textColor="tertiary">Press on the heart to save and see the recipe</Heading>
          <Image src={images.foodcardheart}/>
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary">
          <Heading size={6} textColor="tertiary" caps>Don't cook the same things</Heading>
          <Heading size={3} textColor="primary">Just select that you have cooked a recipe</Heading>
          <Image src={images.foodcardhistory}/>
        </Slide>
        <Slide transition={["zoom"]} bgColor="secondary" textColor="primary">
          <BlockQuote>
            <Quote>I don't know... What do you want to eat?</Quote>
            <Cite>Every Person Ever</Cite>
          </BlockQuote>
        </Slide>
      </Deck>
    );
  }
}
