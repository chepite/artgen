import create from "zustand";
const useStore = create((set) => ({
  //positions
  mouthPos: { x: 0, y: 0 },
  earPos: { x: 0, y: 0 },
  eyePos: { x: 0, y: 0 },
  nosePos: { x: 0, y: 0 },
  emotion: "neutral",
  primaryColor: "#FFFFFF",
  secondaryColor: "#FFFFFF",
  tertiaryColor: "#FFFFFF",

  //colour scheme with primary and secondary/tertiary colours => colour scheme generator?
  //=> chroma.js or so

  //test function works
  // posfunc: (pos) =>
  //   set((state) => ({
  //     mouthPos: {x: pos},
  //   })),
  setEmotion: (emo) =>
    set((state) => ({
      emotion: emo,
    })),
  setPrimaryColor: (color) =>
    set((state) => ({
      primaryColor: color,
    })),
  setSecondaryColor: (color) =>
    set((state) => ({
      secondaryColor: color,
    })),
  setTertiaryColor: (color) =>
    set((state) => ({
      tertiaryColor: color,
    })),
  setmouthPos: (pos) =>
    set((state) => ({
      mouthPos: { x: pos.x, y: pos.y },
    })),
  setearPos: (pos) =>
    set((state) => ({
      earPos: { x: pos.x, y: pos.y },
    })),
  seteyePos: (pos) =>
    set((state) => ({
      eyePos: { x: pos.x, y: pos.y },
    })),
  setnosePos: (pos) =>
    set((state) => ({
      nosePos: { x: pos.x, y: pos.y },
    })),
}));
export default useStore;
