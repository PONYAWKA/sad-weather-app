export {};

declare global {
  interface Window {
    gapi: Gapi;
  }
}

interface Gapi {
  auth2: {
    init: (obj: object) => Promise<null>;
  };
}
