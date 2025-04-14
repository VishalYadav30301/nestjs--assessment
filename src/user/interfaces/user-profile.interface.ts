export interface UserProfile {
    id: string;
    email: string;
    name?: string;
    avatar?: string;
    createdAt: Date;
    updatedAt: Date;
  }