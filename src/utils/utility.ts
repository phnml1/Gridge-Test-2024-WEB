import { ID_KEY, JWT_KEY } from "../config/constant";

export const randomString = (length:number) => {
  let result = '';
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let charactersLength = characters.length;
  for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

export const isValidEmail = (email: string) => {
  const emailRegex = /^[a-zA-Z0-9]([-_.]?[a-zA-Z0-9]+)*@[a-zA-Z0-9]([-_.]?[a-zA-Z0-9]+)*\.[a-zA-Z]{2,4}$/;
  if (emailRegex.test(email)){
    return '';
  }
  return '이메일이 정확하지 않습니다.'
};

export const isValidPhoneNumber = (phoneNumber: string) => {
  const formattedNumber = formatPhoneNumber(phoneNumber);
  const phoneNumberRegex = /^01(?:0|1|[6-9])-(?:\d{3}|\d{4})-\d{4}$/;

  if (phoneNumberRegex.test(formattedNumber)){
    return true
  }
  return false;
};

export const formatPhoneNumber = (phoneNumber:string) => {
  return phoneNumber.replace(/(\d{3})(\d{4})(\d{4})/, '$1-$2-$3');
}

export const addZeroIfNeeded = (number:number) => {
  // 입력된 숫자가 한 자리 수인지 확인
  const isSingleDigit = number < 10;

  // 한 자리 수일 경우 0을 붙이고, 아닐 경우 그대로 반환
  return isSingleDigit ? `0${number}` : `${number}`;
}
export const activateJoinButton = (id:string,name:string,nickname:string,password:string) => {
  if (id.length>=1 && name.length>=1 && nickname.length>=1 && isValidPassword(password)) {
    return true
  }
  return false;
}


export const isValidPhoneOrEmail =  (input: string) => {
  return isValidPhoneNumber(input) && isValidEmail(input);
}

export const isValidName = (name:string) => {
  return (name.length>=1);
}

export const isValidId = (id:string) => {
  const regex = /^[a-zA-Z0-9_.]+$/;

  if (regex.test(id)) {
    return true;
  }
  return false;
}

export const removeJwt = () => {
  localStorage.removeItem(JWT_KEY);
  localStorage.removeItem(ID_KEY);
}
// 7자리로 했는데 오류나서 8자리로 합니다.
export const isValidPassword = (password:string) => {
  if(password.length>=8) {
    return true;
  }
  return false;
}

export const truncateText = (text:string) => {
  if (text.length > 100) {
    return text.substring(0, 100) + '...';
  } else {
    return text;
  }
}

export const isCanLogin = (id:string,password:string) => {
  if(id.length>=1 && password.length>=8) {
    return true;
  }
  return false;
}

export const timeForToday = (value:string) => {
  const today = new Date();
  const timeValue = new Date(value);

  const betweenTime = Math.floor((today.getTime() - timeValue.getTime()) / 1000 / 60);
  if (betweenTime < 1) return '방금전';
  if (betweenTime < 60) {
      return `${betweenTime}분전`;
  }

  const betweenTimeHour = Math.floor(betweenTime / 60);
  if (betweenTimeHour < 24) {
      return `${betweenTimeHour}시간전`;
  }

  const betweenTimeDay = Math.floor(betweenTime / 60 / 24);
  if (betweenTimeDay < 365) {
      return `${betweenTimeDay}일전`;
  }

  return `${Math.floor(betweenTimeDay / 365)}년전`;
}

export const years: number[] = [];
for (let year = 2021; year >= 1919; year--) {
  years.push(year);
}

// 월 배열: 1부터 12까지
export const months: number[] = Array.from({ length: 12 }, (_, index) => index + 1);

// 일 배열: 1부터 31까지
export const days: number[] = Array.from({ length: 31 }, (_, index) => index + 1);

export const changeBirthtoNumber = (birth:string) => {
  const bitrharr = birth.split('-');
  return bitrharr;
}
export const isValidBirth = (year: number, month: number, day: number) => {
  if ((1919 <= year && year <= 2015) && (1 <= month && month <= 12) && (1 <= day && day <= 31)) {
    return true;
  }
  return false;
}

/*export const saveLoginInfo = (loginInfo: UserInfo) => {
  window.localStorage.setItem(
    process.env.REACT_APP_LOGIN_INFO ?? "",
    JSON.stringify(loginInfo) ?? ""
  );
};

export const clearLoginData = () => {
  window.localStorage.removeItem(process.env.REACT_APP_LOGIN_INFO ?? "");
};

export const getLoginInfoUserName = (): string => {
  const loginInfo: UserInfo = JSON.parse(
    window.localStorage.getItem(process.env.REACT_APP_LOGIN_INFO ?? "") ?? ""
  );
  return loginInfo.name ?? "";
};

export const getLoginInfoJwt = () => {
  const loginInfo = JSON.parse(
    window.localStorage.getItem(process.env.REACT_APP_LOGIN_INFO ?? "") ?? ""
  );
  return loginInfo.jwt ?? "";
};*/
