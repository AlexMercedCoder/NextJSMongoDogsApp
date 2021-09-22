import {atom} from "recoil"

// atom for our list of dogs
export const dogData = atom({
    key: "dogData",
    default: []
})