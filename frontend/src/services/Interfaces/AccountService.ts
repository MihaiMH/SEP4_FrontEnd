import Account from "../../models/Account";

interface AccountService {
  login(user: Account): Promise<string>;
  logout(): Promise<void>;
  register(user: Account): Promise<void>;
  getUser(): Promise<Account>;
  update(user: Account, newPassword: string): Promise<void>;
  updatePreferences(preferences: string): Promise<void>;
}

export default AccountService;
