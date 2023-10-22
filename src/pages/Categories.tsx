import React, { useEffect, useState } from 'react';
import { data } from '../components/category/mock.json';
import { Outlet, useNavigate, useParams } from 'react-router-dom';
import styled from '@emotion/styled';
import { PATH } from '../constants/path';
import { useSpeechRecognition, useSpeechSynthesis } from 'react-speech-kit';

const StyledCategories = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;
  flex-wrap: wrap;
`;

const StyledCategoryItem = styled.input`
  border-radius: 5px;
  width: 150px;
  height: 180px;
  cursor: pointer;
`;

export const Categories = () => {
  const [value, setValue] = useState('');
  const { speak } = useSpeechSynthesis();
  const [playing, setPlaying] = useState(false);

  const { listen, listening, stop } = useSpeechRecognition({
    onResult: (result: any) => {
      // 음성인식 결과가 value 상태값으로 할당됩니다.
      setValue(result);
      console.log('result', result);
    },
  });
  useEffect(() => {
    // 안내 음성이 끝났을 때 인식
    if (!playing) {
      // 말하는 도중이 아닌 말이 끝난 뒤(말 사이 텀이 생기면) 출력
      listen({ interimResults: false });
    }
  }, [playing]);

  console.log('useSpeechRecognition', useSpeechRecognition);

  const { category } = useParams();
  const navigate = useNavigate();

  const handleCateogryClick = (category: string) => navigate(`/${PATH.CATEGORIES}/${category}`);

  if (category) {
    return (
      <StyledCategories>
        <Outlet />
      </StyledCategories>
    );
  }

  return (
    <>
      <div>
        <div>{value}</div>
        {console.log('value', value)}
        <button onMouseDown={listen} onMouseUp={stop}>
          🎤
        </button>
        {listening && <div>음성인식 활성화 중</div>}
        <button onClick={() => speak({ text: value })}>Speak</button>
      </div>
      <StyledCategories>
        {data.map((c) => (
          <StyledCategoryItem
            type="image"
            src={c.imgUrl}
            key={c.categoryName}
            onClick={() => handleCateogryClick(c.categoryName)}
          />
        ))}
      </StyledCategories>
    </>
  );
};
