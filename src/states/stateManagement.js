import { atom } from "recoil";

export const roomStates = atom({
    key: 'roomState',
    default: {
      selectRoomId: '',
    },
  });
  