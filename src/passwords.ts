export const getAlphaPassword = (n: number): string => {
  let charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
  let x = charset.length;
  let pass = '';
  for (let i = 0; i < n; ++i) {
    pass += charset.charAt(Math.floor(Math.random() * x));
  }
  return pass;
};

export const getAlphaLowercasePassword = (n: number): string => {
  let charset = 'abcdefghijklmnopqrstuvwxyz';
  let x = charset.length;
  let pass = '';
  for (let i = 0; i < n; ++i) {
    pass += charset.charAt(Math.floor(Math.random() * x));
  }
  return pass;
};

export const getAlphaUppercasePassword = (n: number): string => {
  let charset = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  let x = charset.length;
  let pass = '';
  for (let i = 0; i < n; ++i) {
    pass += charset.charAt(Math.floor(Math.random() * x));
  }
  return pass;
};

export const getNumericPassword = (n: number): string => {
  let charset = '0123456789';
  let x = charset.length;
  let pass = '';
  for (let i = 0; i < n; ++i) {
    pass += charset.charAt(Math.floor(Math.random() * x));
  }
  return pass;
};

export const getAlphanumericPassword = (n: number): string => {
  let charset =
    'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  let x = charset.length;
  let pass = '';
  for (let i = 0; i < n; ++i) {
    pass += charset.charAt(Math.floor(Math.random() * x));
  }
  return pass;
};

export const getLowercasePassword = (n: number): string => {
  let charset = 'abcdefghijklmnopqrstuvwxyz0123456789';
  let x = charset.length;
  let pass = '';
  for (let i = 0; i < n; ++i) {
    pass += charset.charAt(Math.floor(Math.random() * x));
  }
  return pass;
};

export const getUppercasePassword = (n: number): string => {
  let charset = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  let x = charset.length;
  let pass = '';
  for (let i = 0; i < n; ++i) {
    pass += charset.charAt(Math.floor(Math.random() * x));
  }
  return pass;
};
