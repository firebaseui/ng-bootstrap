import AuthProvider = firebase.auth.AuthProvider;

export interface NgBootstrapAuthFirebaseUIConfig {
  authNextURL?: string, // popup or redirect
  tosUrl?: string, // term of services url
  ppUrl?: string, // privacy policy url
  authProviders?: Array<AuthProvider>,
  languageCode?: string, // todo: 28.3.18
  onlyEmailPasswordAuth?: boolean,
  toastMessageOnAuthSuccess?: boolean,
  toastMessageOnAuthError?: boolean
}

export const defaultAuthFirebaseUIConfig: NgBootstrapAuthFirebaseUIConfig = {
  // authMethod: 'redirect',
  // authProviders: [new GoogleAuthProvider(), new FacebookAuthProvider(), new TwitterAuthProvider(), new GithubAuthProvider()],
  // onlyEmailPasswordAuth: false,
  toastMessageOnAuthSuccess: true,
  toastMessageOnAuthError: true
};

