import './Sticky.css';
import React, { useContext } from 'react';
import CurrentTime from './CurrentTime';
import { AosContext } from '../Context/AosProvider';
import { MediaQueryContext } from '../Context/MediaQueryContext';

function Sticky({ data }) {
    const { refresh } = useContext(AosContext); // refresh 메서드 가져오기
    const { isMobile } = useContext(MediaQueryContext);

    return (
        <div className="StickyWrap Pretendard">
            <div className="stickyItem">
                <p className="smi">Company Infomation</p>
                {isMobile ? (
                    <p className="mni">
                        <div>고객을 위하는</div>
                        <div>
                            <span style={{ display: 'inline-block' }}>{data.name}</span>는
                        </div>
                        <div>숫자와 규모부터 다릅니다.</div>
                    </p>
                ) : (
                    <p className="mni">
                        {`고객을 위하는 `}
                        <span>{data.name}</span>
                        {` 는 `}
                        <br />
                        숫자와 규모부터 다릅니다.
                    </p>
                )}
            </div>
            <div className="stickyInfo ">
                <ul>
                    <li className="infoCont" data-aos="fade-up" data-aos-duration="1000">
                        <div className="infoText">산업 분야</div>
                        <div className="info">{data.randomSubindustryItems}</div>
                    </li>
                    <li className="infoCont" data-aos="fade-up" data-aos-duration="1000">
                        <div className="infoText">슬로건</div>
                        <div className="info">{data.subName}</div>
                    </li>
                    <li className="infoClick" data-aos="fade-up" data-aos-duration="1000">
                        <div className="infoText ">
                            <span>주간 클릭 수</span>
                            <CurrentTime color={'white'} size={'15px'} />
                        </div>
                        <div className="info">{` ${data.isClick}명 방문`}</div>
                    </li>
                    <li className="infoCont" data-aos="fade-up" data-aos-duration="1000">
                        <div className="infoText">홈페이지 옵션</div>
                        <div className="info">{data.randomSubSelectOption.join(' , ')}</div>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Sticky;
