import { useState, useMemo } from 'react';
import useInterval from '@use-it/interval';
import { spread } from './spread';

type HMS = {
  h: number;
  m: number;
  s: number;
  toString: () => string;
};

// '1' => '0001'
// '9'  = '1001'
const digitToBinary4 = (digit: string) => {
  const num = parseInt(digit, 10);
  const str = `0000${(0 + num).toString(2)}`;
  return str.substr(str.length - 4);
};

// 9  => '00001001'
// 12 => '00010010'
const toBinary = (value: number) => {
  const str = `0${value}`;
  const str2 = str.substr(str.length - 2);
  const digits = spread(str2);
  const [tens, ones] = [...digits];
  return `${digitToBinary4(tens)}${digitToBinary4(ones)}`;
};

const timeToHms = (time: Date): HMS => ({
  h: time.getHours(),
  m: time.getMinutes(),
  s: time.getSeconds(),
});

export const useBinaryClock = (refresh = 100) => {
  const [hms, setHms] = useState<HMS>(() => timeToHms(new Date()));

  useInterval(() => {
    const now = new Date();
    const nowHms = timeToHms(now);
    if (nowHms.s !== hms.s || nowHms.m !== hms.m || nowHms.h !== hms.h) {
      setHms(nowHms);
    }
  }, refresh);

  const binaryHms = useMemo(
    () => ({
      hours: toBinary(hms.h),
      mins: toBinary(hms.m),
      secs: toBinary(hms.s),
    }),
    [hms]
  );

  return binaryHms;
};
