import { create } from 'zustand';

interface User {
    name: string;
    profileImage: string;
    userId: string;
}

interface UserStore {
    user: User | null;
    setUser: () => void;
}

const initialUser: User = {
    profileImage: 'https://avatars.githubusercontent.com/u/77581509?v=4',
    userId: '1',
    name: 'John Doe',
}

export const useUserStore = create<UserStore>((set) => ({
    user: null,
    setUser: () => set({ user:initialUser }),
}));
