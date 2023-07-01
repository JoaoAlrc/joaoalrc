export const isMobileDevice =
  !!(typeof navigator !== "undefined") && /Mobi/.test(navigator.userAgent);
