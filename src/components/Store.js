import create from "zustand";
const useStore = create((set) => ({
  //positions
  mouthPos: { x: 0, y: 0 },
  earPos: { x: 0, y: 0 },
  eyePos: { x: 0, y: 0 },
  nosePos: { x: 0, y: 0 },
  emotion: "neutral",

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
  setmouthPos: (pos) =>
    set((state) => ({
      mouthPos: { x: 2 * pos.x, y: 2 * pos.y },
    })),
  setearPos: (pos) =>
    set((state) => ({
      earPos: { x: 2 * pos.x, y: 2 * pos.y },
    })),
  seteyePos: (pos) =>
    set((state) => ({
      eyePos: { x: 2 * pos.x, y: 2 * pos.y },
    })),
  setnosePos: (pos) =>
    set((state) => ({
      nosePos: { x: 2 * pos.x, y: 2 * pos.y },
    })),
}));
export default useStore;
