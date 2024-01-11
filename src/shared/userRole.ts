export enum UserRole {
  FREELANCER = "Freelancer",
  CLIENT = "Client",
}

export const isUserRoleFreelancer = (userRole: UserRole) =>
  userRole === UserRole.FREELANCER;

export const isUserRoleClient = (userRole: UserRole) =>
  userRole === UserRole.CLIENT;
