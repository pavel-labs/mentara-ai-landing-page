export const respectsPrivacy = (): boolean =>
  navigator.doNotTrack === '1' ||
  ('globalPrivacyControl' in navigator &&
    navigator.globalPrivacyControl === true);
