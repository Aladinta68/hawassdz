import { create } from "zustand";

const useProfileStore = create((set) => ({
  ProfileData: null,
  setProfileData: (data) => set({ ProfileData: data }),
}));

export default useProfileStore;
