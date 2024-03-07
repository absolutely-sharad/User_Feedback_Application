import { selector } from "recoil";
import FeedBackStore from "../Atoms/FeedBackStore";

const feed = [
  "You Are Brilliant",
  "Come On You Can Do It",
  "Need Improvement.",
  "Need Revision",
  "No Internship",
  "You Have Failed",
];

const GiveFeedBack = selector({
  key: "GiveFeedBack",
  get: ({ get }) => {
    const val = get(FeedBackStore);
    return feed[val.remaining];
  },
});

export default GiveFeedBack;
