import React from "react";
import type { Profile } from "../types/profile";


type ProfileContextType = {
    profile: Profile;
    setProfile: (profile: Profile) => void;
}

const ProfileContext = React.createContext<ProfileContextType | undefined>(undefined);