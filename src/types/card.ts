type Card = {
  category: string; // TODO: 카테고리 타입 논의 필요
  name: string;
  img: string;
  audio: unknown; // TODO: 음성 자료구조
};

const isObject = (data: unknown): data is object => {
  if (typeof data !== 'object' || data == null) return false;
  return true;
};

const isCard = (data: unknown): data is Card => {
  if (!isObject(data)) return false;
  // TODO: in 대신 object.hasOwnProperty로 타입 검사 할 것
  if (!('category' in data) || typeof data.category !== 'string') return false;
  if (!('name' in data) || typeof data.name !== 'string') return false;
  if (!('img' in data) || typeof data.img !== 'string') return false;
  // TODO: audio 타입 검증
  if (!('audio' in data)) return false;
  return true;
};

export type { Card };
export { isCard, isObject };
