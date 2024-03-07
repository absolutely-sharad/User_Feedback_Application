import { atom } from "recoil";

let FeedbackStore = atom({
  key: "FeedBack",
  default: {name:"",
    remaining:""
},
});

export default FeedbackStore ;
