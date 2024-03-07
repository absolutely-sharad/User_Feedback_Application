# User Feedback Application

## Overview

This React application, built with Recoil for state management, empowers users to receive personalized feedback based on their input. Users can provide their username and the number of pending assignments, and the application dynamically generates feedback messages accordingly.

## Features

- **User Input:** Allows users to enter their username and the number of pending assignments.
- **Recoil State Management:** Utilizes Recoil to efficiently manage and share the application state.
- **Personalized Feedback:** Generates tailored feedback messages based on user input.
- **Feedback Categories:**
  - No input: "Fill the details to get feedback"
  - 0: "You are brilliant"
  - 1: "Come on, you can do it."
  - 2: "Need improvement."
  - 3: "Need revision."
  - 4: "No internship."
  - 5: "You have failed."

## Components

### 1. Atom: `FeedbackStore`

The `FeedbackStore` atom stores user data, including the username and the number of pending assignments.

```jsx
// Atoms/FeedBackStore.js
import { atom } from "recoil";

const FeedbackStore = atom({
  key: "FeedbackStore",
  default: {
    name: "",
    remaining: "",
  },
});

export default FeedbackStore;
```

### 2. Selector: `GiveFeedBack`

The `GiveFeedBack` selector generates feedback based on the user's input. It provides different messages depending on the number of pending assignments.

```jsx
// Selector/GiveFeedBack.js
import { selector } from "recoil";
import FeedbackStore from "../Atoms/FeedBackStore";

const feedbackMessages = [
  "Fill the details to get feedback",
  "You are brilliant",
  "Come on, you can do it.",
  "Need improvement.",
  "Need revision.",
  "No internship.",
  "You have failed.",
];

const GiveFeedBack = selector({
  key: "GiveFeedBack",
  get: ({ get }) => {
    const { remaining } = get(FeedbackStore);
    const index = remaining > 5 ? 0 : remaining;
    return feedbackMessages[index];
  },
});

export default GiveFeedBack;
```

### 3. Component: `FeedBackApp`

The `FeedBackApp` component is the main user interface that allows users to input their data and displays personalized feedback.

```jsx
// FeedBackApp.js
import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import FeedbackStore from "./Atoms/FeedBackStore";
import { useRecoilState, useRecoilValue } from "recoil";
import GiveFeedBack from "./Selector/GiveFeedBack";

const FeedBackApp = () => {
  const [data, setData] = useRecoilState(FeedbackStore);
  const [show, setShow] = useState({ name: "", remaining: "" });
  const remainingFeedBack = useRecoilValue(GiveFeedBack);

  const handleInput = (e) => {
    const x = e.target.value;
    if (e.target.id === "name") {
      setData({ ...data, name: x });
    } else {
      setData({
        ...data,
        remaining: x > 5 ? 5 : x === "" ? "" : x,
      });
    }
  };

  const handleOutput = () => {
    if (data.name.length !== 0 && data.name !== show.name) {
      setShow((prevShow) => ({ ...prevShow, name: data.name }));
    }

    if (data.remaining.length !== 0 && data.remaining !== undefined) {
      setShow((prevShow) => ({ ...prevShow, remaining: remainingFeedBack }));
    }
  };

  return (
    <div>
      {/* UI Components */}
    </div>
  );
};

export default FeedBackApp;

```

## Usage

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/your-username/user-feedback-app.git
   ```

2. **Install Dependencies:**
   ```bash
   cd user-feedback-app
   npm install
   ```

3. **Run the Application:**
   ```bash
   npm start
   ```

4. **Access the Application:**
   Open your web browser and navigate to [http://localhost:3000](http://localhost:3000).

## Contribution

Feel free to contribute to the project by opening issues or submitting pull requests. Your input is highly valued.

