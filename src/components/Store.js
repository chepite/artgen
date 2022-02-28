import create from "zustand";
const useStore = create((set) => ({
  //positions
  mouthPos: { x: 0, y: 0 },
  earPos: { x: 0, y: 0 },
  eyePos: { x: 0, y: 0 },
  nosePos: { x: 0, y: 0 },

  //test function works
    // posfunc: (pos) =>
    //   set((state) => ({
    //     mouthPos: {x: pos},
    //   })),

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
