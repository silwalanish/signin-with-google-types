import {
  CredentialResponse,
  Credential,
  PromptMomentNotification,
  RevocationResponse,
} from "signin-with-google-types";

// $ExpectType (response: CredentialResponse) => void
const credentialResponseCallback = (response: CredentialResponse) => {
  // $ExpectType any
  response.credential;

  // $ExpectType "auto" | "user" | "user_1tap" | "user_2tap" | "btn" | "btn_confirm" | "btn_add_session" | "btn_confirm_add_session"
  response.select_by;
};

// $ExpectType (response: Credential) => void
const nativeCallback = (response: Credential) => {
  // $ExpectType string
  response.id;

  // $ExpectType string
  response.password;
};

// $ExpectType (response: any) => void
const iframeCallback = (response: any) => {
  // $ExpectType any
  response;
};

// $ExpectType Client
google.accounts.id;

// $ExpectType () => void | undefined
window.onGoogleLibraryLoad;

// $ExpectType void | undefined
window.onGoogleLibraryLoad();

// $ExpectType void
google.accounts.id.initialize({
  client_id: "client_id",
  callback: credentialResponseCallback,
});

google.accounts.id.initialize(
  // $ExpectError
  {
    client_id: "client_id",
  }
);

google.accounts.id.initialize(
  // $ExpectError
  {
    callback: credentialResponseCallback,
  }
);

google.accounts.id.initialize({
  client_id: 1, // $ExpectError
  callback: credentialResponseCallback,
});

google.accounts.id.initialize({
  client_id: "client_id",
  callback: (response: string) => {}, // $ExpectError
});

// $ExpectType void
google.accounts.id.initialize({
  client_id: "client_id",
  callback: credentialResponseCallback,
  auto_select: true,
});

// $ExpectType void
google.accounts.id.initialize({
  client_id: "client_id",
  callback: credentialResponseCallback,
  context: "signin",
});

// $ExpectType void
google.accounts.id.initialize({
  client_id: "client_id",
  callback: credentialResponseCallback,
  context: "use",
});

// $ExpectType void
google.accounts.id.initialize({
  client_id: "client_id",
  callback: credentialResponseCallback,
  context: "signup",
});

google.accounts.id.initialize({
  client_id: "client_id",
  callback: credentialResponseCallback,
  context: "anything_else", // $ExpectError
});

// $ExpectType void
google.accounts.id.initialize({
  client_id: "client_id",
  callback: credentialResponseCallback,
  ux_mode: "popup",
});

// $ExpectType void
google.accounts.id.initialize({
  client_id: "client_id",
  callback: credentialResponseCallback,
  ux_mode: "redirect",
});

google.accounts.id.initialize({
  client_id: "client_id",
  callback: credentialResponseCallback,
  ux_mode: "anything_else", // $ExpectError
});

// $ExpectType void
google.accounts.id.initialize({
  client_id: "client_id",
  callback: credentialResponseCallback,
  auto_select: false,
  login_uri: "http://example.com",
  native_callback: nativeCallback,
  cancel_on_tap_outside: true,
  prompt_parent_id: "",
  nonce: "",
  context: "signin",
  state_cookie_domain: "",
  ux_mode: "popup",
  allowed_parent_origin: "",
  intermediate_iframe_close_callback: iframeCallback,
});

// $ExpectError
google.accounts.id.initialize();

google.accounts.id.initialize({
  client_id: "client_id",
  callback: credentialResponseCallback,
  auto_select: false,
  login_uri: "http://example.com",
  native_callback: nativeCallback,
  cancel_on_tap_outside: true,
  prompt_parent_id: "",
  nonce: "",
  context: "signin",
  state_cookie_domain: "",
  ux_mode: "popup",
  allowed_parent_origin: "",
  intermediate_iframe_close_callback: (response) => {
    console.log(response);
  },
  extra_parameter: "extra", // $ExpectError
});

// $ExpectType void
google.accounts.id.prompt();

// $ExpectType (notification: PromptMomentNotification) => void
const promptCallback = (notification: PromptMomentNotification) => {
  // $ExpectType boolean
  notification.isDisplayed();
  // $ExpectType boolean
  notification.isDisplayMoment();
  // $ExpectType boolean
  notification.isNotDisplayed();
  // $ExpectType boolean
  notification.isSkippedMoment();
  // $ExpectType boolean
  notification.isDismissedMoment();

  // $ExpectType "credential_returned" | "cancel_called" | "flow_restarted"
  notification.getDismissedReason();

  // $ExpectType "browser_not_supported" | "invalid_client" | "missing_client_id" | "opt_out_or_no_session" | "secure_http_required" | "suppressed_by_user" | "unregistered_origin" | "unknown_reason"
  notification.getNotDisplayedReason();

  // $ExpectType "auto_cancel" | "user_cancel" | "tap_outside" | "issuing_failed"
  notification.getSkippedReason();

  // $ExpectType "display" | "skipped" | "dismissed"
  notification.getMomentType();
};

// $ExpectType void
google.accounts.id.prompt();

// $ExpectType void
google.accounts.id.prompt(promptCallback);

// $ExpectType void
google.accounts.id.renderButton(document.body);

// $ExpectType void
google.accounts.id.renderButton(document.body, {
  type: "standard",
});

// $ExpectType void
google.accounts.id.renderButton(document.body, {
  type: "icon",
});

google.accounts.id.renderButton(document.body, {
  type: "anything_else", // $ExpectError
});

// $ExpectType void
google.accounts.id.renderButton(document.body, {
  theme: "outline",
});

// $ExpectType void
google.accounts.id.renderButton(document.body, {
  theme: "filled_blue",
});

// $ExpectType void
google.accounts.id.renderButton(document.body, {
  theme: "filled_black",
});

google.accounts.id.renderButton(document.body, {
  theme: "red", // $ExpectError
});

// $ExpectType void
google.accounts.id.renderButton(document.body, {
  size: "large",
});

// $ExpectType void
google.accounts.id.renderButton(document.body, {
  size: "medium",
});

// $ExpectType void
google.accounts.id.renderButton(document.body, {
  size: "small",
});

google.accounts.id.renderButton(document.body, {
  size: "x-large", // $ExpectError
});

// $ExpectType void
google.accounts.id.renderButton(document.body, {
  text: "signin_with",
});

// $ExpectType void
google.accounts.id.renderButton(document.body, {
  text: "signup_with",
});

// $ExpectType void
google.accounts.id.renderButton(document.body, {
  text: "continue_with",
});

// $ExpectType void
google.accounts.id.renderButton(document.body, {
  text: "signin",
});

google.accounts.id.renderButton(document.body, {
  text: "login_with", // $ExpectError
});

// $ExpectType void
google.accounts.id.renderButton(document.body, {
  shape: "rectangular",
});

// $ExpectType void
google.accounts.id.renderButton(document.body, {
  shape: "pill",
});

// $ExpectType void
google.accounts.id.renderButton(document.body, {
  shape: "circle",
});

// $ExpectType void
google.accounts.id.renderButton(document.body, {
  shape: "square",
});

google.accounts.id.renderButton(document.body, {
  shape: "triangle", // $ExpectError
});

// $ExpectType void
google.accounts.id.renderButton(document.body, {
  logo_alignment: "left",
});

// $ExpectType void
google.accounts.id.renderButton(document.body, {
  logo_alignment: "center",
});

// $ExpectType void
google.accounts.id.renderButton(document.body, {
  logo_alignment: "right", // $ExpectError
});

// $ExpectType void
google.accounts.id.renderButton(document.body, {
  width: 800,
});

google.accounts.id.renderButton(document.body, {
  width: "Eigth Hundred", // $ExpectError
});

// $ExpectType void
google.accounts.id.renderButton(document.body, {
  locale: "en",
});

google.accounts.id.renderButton(document.body, {
  locale: 123, // $ExpectError
});

// $ExpectType void
google.accounts.id.renderButton(document.body, {
  type: "standard",
  theme: "outline",
  size: "large",
  text: "signin",
  shape: "circle",
  logo_alignment: "left",
  width: 800,
  locale: "en",
});

google.accounts.id.renderButton(document.body, {
  type: "standard",
  theme: "outline",
  size: "large",
  text: "signin",
  shape: "circle",
  logo_alignment: "left",
  width: 800,
  locale: "en",
  extra_param: "extra", // $ExpectError
});

// $ExpectType void
google.accounts.id.disableAutoSelect();

// $ExpectType void
google.accounts.id.storeCredential({
  id: "id",
  password: "password",
});

// $ExpectType void
google.accounts.id.storeCredential(
  {
    id: "id",
    password: "password",
  },
  nativeCallback
);

google.accounts.id.storeCredential(
  {
    id: "id",
    password: "password",
  },
  credentialResponseCallback // $ExpectError
);

google.accounts.id.storeCredential(
  {
    id: "id",
    password: "password",
    username: "username", // $ExpectError
  },
  nativeCallback
);

google.accounts.id.storeCredential(
  // $ExpectError
  {
    id: "id",
  },
  nativeCallback
);

google.accounts.id.storeCredential(
  // $ExpectError
  {
    password: "password",
  },
  nativeCallback
);

// $ExpectError
google.accounts.id.storeCredential();

// $ExpectType void
google.accounts.id.cancel();

// $ExpectType void
google.accounts.id.revoke("hint");

// $ExpectType (response: RevocationResponse) => void
const revokeCallback = (response: RevocationResponse) => {
  // $ExpectType boolean
  response.successful;
  // $ExpectType string
  response.error;
};

// $ExpectType void
google.accounts.id.revoke("hint", revokeCallback);

google.accounts.id.revoke(
  "hint",
  credentialResponseCallback // $ExpectError
);

// $ExpectError
google.accounts.id.revoke();

// $ExpectError
google.accounts.id.revoke(123);
