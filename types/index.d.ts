export interface CredentialResponse {
  credential: any;
  select_by:
    | "auto"
    | "user"
    | "user_1tap"
    | "user_2tap"
    | "btn"
    | "btn_confirm"
    | "btn_add_session"
    | "btn_confirm_add_session";
}

export interface Credential {
  id: string;
  password: string;
}

export type CredentialResponseCallbackFunc = (
  response: CredentialResponse
) => void;

export interface IdConfiguration {
  client_id: string;
  auto_select?: boolean;
  callback: CredentialResponseCallbackFunc;
  login_uri?: string;
  native_callback?: (response: Credential) => void;
  cancel_on_tap_outside?: boolean;
  prompt_parent_id?: string;
  nonce?: string;
  context?: "use" | "signin" | "signup";
  state_cookie_domain?: string;
  ux_mode?: "popup" | "redirect";
  allowed_parent_origin?: string | [string];
  intermediate_iframe_close_callback?: (response: any) => void;
}

export interface PromptMomentNotification {
  isDisplayMoment: () => boolean;
  isDisplayed: () => boolean;
  isNotDisplayed: () => boolean;
  getNotDisplayedReason: () =>
    | "browser_not_supported"
    | "invalid_client"
    | "missing_client_id"
    | "opt_out_or_no_session"
    | "secure_http_required"
    | "suppressed_by_user"
    | "unregistered_origin"
    | "unknown_reason";
  isSkippedMoment: () => boolean;
  getSkippedReason: () =>
    | "auto_cancel"
    | "user_cancel"
    | "tap_outside"
    | "issuing_failed";
  isDismissedMoment: () => boolean;
  getDismissedReason: () =>
    | "credential_returned"
    | "cancel_called"
    | "flow_restarted";
  getMomentType: () => "display" | "skipped" | "dismissed";
}

export interface ButtonConfiguration {
  type?: "standard" | "icon";
  theme?: "outline" | "filled_blue" | "filled_black";
  size?: "large" | "medium" | "small";
  text?: "signin_with" | "signup_with" | "continue_with" | "signin";
  shape?: "rectangular" | "pill" | "circle" | "square";
  logo_alignment?: "left" | "center";
  width?: number;
  locale?: string;
}

export type PromptCallbackFunc = (
  notification: PromptMomentNotification
) => void;

export interface RevocationResponse {
  successful: boolean;
  error: string;
}

export type StoreCredentialCallback = (credential: Credential) => void;

export type RevokeCallback = (response: RevocationResponse) => void;

export interface Client {
  initialize: (config: IdConfiguration) => void;
  prompt: (callback?: PromptCallbackFunc) => void;
  renderButton: (parent: HTMLElement, options?: ButtonConfiguration) => void;
  disableAutoSelect: () => void;
  storeCredential: (
    credential: Credential,
    callback?: StoreCredentialCallback
  ) => void;
  cancel: () => void;
  revoke: (hint: string, callback?: RevokeCallback) => void;
}

declare global {
  interface Window {
    onGoogleLibraryLoad: () => void | undefined;
  }

  namespace google {
    namespace accounts {
      let id: Client;
    }
  }
}
