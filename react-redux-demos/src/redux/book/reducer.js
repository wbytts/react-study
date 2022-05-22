import { ADD_BOOK } from "../constant"

const initState = [];

export default function bookReducer(preState=initState, action) {
  const { type, data } = action;
  switch (type) {
    case ADD_BOOK:
      return [...preState, data]
    default: return preState;
  }
};
