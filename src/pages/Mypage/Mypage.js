import React from 'react';
import { Link } from 'react-router-dom';
import './Mypage.scss';

const Mypage = () => {
  return (
    <div className="mypage">
      <div className="grayBack">
        <div className="boxLeft">
          <p>
            안녕하세요
            <br />
            오늘도 가심비있는 하루 되세요!
          </p>
          <button>SIMPLE 회원</button>
        </div>
        <div className="boxRight">
          <div className="">
            <span>적립금</span>
            <Link>0원</Link>
          </div>
          <div>
            <span>쿠폰</span>
            <Link>1개</Link>
          </div>
          <div>
            <span>010-1234-5678</span>
            <Link>정보수정</Link>
          </div>
        </div>
      </div>
      <div />
    </div>
  );
};
export default Mypage;
