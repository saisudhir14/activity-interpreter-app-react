import React, { useState } from "react";
import "./styles.css";

var emojiDictionary = {
  "⛷️": "Skier",
  "🏂": "Snowboarder",
  "⚽": "Soccer Ball",
  "🏸": "Badminton",
  "🎿": "Skies",
  "🎯": "Direct Hit!",
  "🎳": "Bowling",
  "🥊": "Boxing Glove",
  "🏀": "Basketball",
  "🏈": "American Football",
  "🏐": "Volleyball",
  "🎾": "Tennis",
  "🏏": "Cricket ",
  "🏹": "Bow and Arrow"
};

var emojisWeKnow = Object.keys(emojiDictionary);

export default function App() {
  var [meaning, setMeaning] = useState("");

  function emojiInputHandler(event) {
    var userInput = event.target.value;

    var meaning = emojiDictionary[userInput];

    if (meaning === undefined) {
      meaning = "Sorry, we don't have this in our Database";
    }
    setMeaning(meaning);
  }

  function emojiClickHandler(emoji) {
    // processing
    var meaning = emojiDictionary[emoji];
    setMeaning(meaning); // react call to show output
  }

  return (
    <div className="background">
      <div className="App">
        <h1>
          Welcome to <span style={{ color: "yellow" }}>Emoji Interpretor</span>
        </h1>
        <p>Lets test your knowledge on activity emoji's </p>
        <input
          className="input"
          placeholder="please enter your interested emoji"
          onChange={emojiInputHandler}
        />
        <div className="output">{meaning} </div>

        <h3>Here are the most played activities!</h3>

        {emojisWeKnow.map(function (emoji) {
          return (
            <span
              onClick={() => emojiClickHandler(emoji)}
              style={{
                fontSize: "2rem",
                padding: "0.5rem",
                cursor: "pointer",
                justifyContent: "center",
                margin: "auto"
              }}
              key={emoji}
            >
              {emoji}
            </span>
          );
        })}
      </div>
    </div>
  );
}
