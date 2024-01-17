export interface UserResponse {
  message: string;
  data: User;
}

export interface User {
  id: number;
  telegramId: number;
  name: string;
  freelancerPreferencesId: number | null;
  clientPreferencesId: number | null;
  freelancerPreferences: FreelancerPreferences | null;
  clientPreferences: ClientPreferences | null;
}

interface FreelancerPreferences {
  id: number;
  isVerificationPending: boolean;
  isVerified: boolean;
}

interface ClientPreferences {
  // Add properties for client preferences here
}
