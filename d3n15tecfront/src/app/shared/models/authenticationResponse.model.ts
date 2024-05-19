import { User } from "./user.model";

export interface AuthenticationResponse {
  accessToken?: string;
  refreshToken?: string;
  user?: User;
}
