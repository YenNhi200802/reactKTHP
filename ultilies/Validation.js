export const isValidEmail = stringEmail =>
  /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(
    stringEmail,
  );
export const isValidPassword = stringPassword => stringPassword.length >= 8;
