import { User } from "./User";

export interface AuthenticationResponse {
  accessToken?: string;
  secretImageUri?: string;
  user?: User;
}
