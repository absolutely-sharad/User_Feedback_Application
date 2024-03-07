import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import React, { useState } from "react";
import style from "./FeedBackApp.module.css";
import Button from "@mui/material/Button";
import FeedbackStore from "./Atoms/FeedBackStore";
import { useRecoilState, useRecoilValue } from "recoil";
import GiveFeedBack from "./Selector/GiveFeedBack";
export default function FeedBackApp() {
  let [data, setData] = useRecoilState(FeedbackStore);
  let [show, setShow] = useState({ name: "", remaining: "" });
  let remainingFeedBack = useRecoilValue(GiveFeedBack);
  function handleInput(e) {
    let x = e.target.value;
    if (e.target.id === "name") {
      setData({ ...data, name: x });
    } else {
      setData({
        ...data,
        remaining: x > 5 ? 5 : x === "" ? "" : x,
      });
    }
  }
  function handleOutput() {
    if (data.name.length !== 0 && data.name !== show.name) {
      setShow((prev) => ({ ...prev, name: data.name }));
    }
    if (data.remaining.length !== 0 && data.remaining !== undefined) {
      setShow((prev) => ({ ...prev, remaining: remainingFeedBack }));
    }
  }
  return (
    <div className={style.Parent}>
      <h1>
        {show.name === "" ? "Please Enter Your Name" : "Hi " + show.name + " !"}
      </h1>
      <h1>
        {"FeedBack : " +
          (show.remaining === ""
            ? "No FeedBack Yet! Please Fill All The Details"
            : show.remaining)}
      </h1>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          "& > :not(style)": { m: 1 },
        }}
      >
        <TextField id="name" label="Your Name " onChange={handleInput} />
        <TextField
          id="remaining"
          sx={{
            width: "20vw",
          }}
          label="Number Of Pending Assignments"
          onChange={handleInput}
        />
        <Button variant="contained" onClick={handleOutput}>
          Get FeedBack
        </Button>
      </Box>
    </div>
  );
}
