import {AuthInfo, AuthInfoFromServer} from '../../types/auth-info';

export const adaptAuthInfoToClient = (authInfo: AuthInfoFromServer): AuthInfo => ({
  id: authInfo.id,
  email: authInfo.email,
  name: authInfo.name,
  avatarUrl: authInfo.avatar_url,
  token: authInfo.token,
});
