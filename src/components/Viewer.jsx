import './Viewer.css';
import { getLogo } from '../util/Mlogo';
import SubPageButton from './SubPageButton';
import FlowText from './FlowText';
import Icon from '../public/Icon';
import Sticky from './Sticky';

function Viewer({ data }) {
    return (
        <div className="Viwer font_kimm">
            <div className="mainViewer" style={{ backgroundImage: `url(${data.photoUrl})` }}>
                <div className="backgroundCover">
                    <div className="mvHeader">
                        <div className="mvSubName">{data.subName}</div>
                        <div className="mvMainName">{data.name}</div>
                    </div>
                    <div className="position_section Pretendard">
                        <div className="positionCate">
                            <p className="positionSubHeader cgf">Categorie</p>
                            <p className="positionSubDesc ctf">{data.randomSubindustryItems}</p>
                        </div>
                        <div className="positionNum">
                            <p className="positionSubHeader cgf">Weekly Clicks</p>
                            <p className="positionSubDesc ctf">{`${data.isClick}번`}</p>
                        </div>
                        <div className="positionLink">
                            <p className="positionSubHeader cgf">Link</p>
                            <p className="positionSubDesc ctf">
                                <a href={data.photoUrl}>홈페이지 바로가기</a>
                            </p>
                        </div>
                    </div>
                    <div className="positionInfo Pretendard">
                        <p className="InfoCopy">Copyrightⓒ2024 AllWeb All rights reserved.</p>
                    </div>
                </div>
            </div>

            <div className="subDescContent Pretendard">
                <div className="leftCont">
                    <div className="lcCont">
                        <p className="lcSubHead">{`#${data.randomSubindustryItems}`}</p>
                        <img src={data.photoUrl} alt="" className="lcPhoto" />
                        <p className="lcName">{data.name}</p>
                        <p className="lcSubName">
                            {`한 주간 ${data.isClick}명이 방문했습니다!`}{' '}
                            <Icon name="subArrow" color={'#006aff'} width={'15px'} height={'15px'} />
                        </p>
                        <SubPageButton url={data.photoUrl} text={data.name} type={'Small'} />
                    </div>
                </div>
                <div className="rightCont">
                    <div className="rcCont">
                        <p>{data.subName}</p>
                        <div className="rcBigText">
                            <span>{data.randomSubDescs}</span>
                            <div className="rcBigTextImg">
                                <img src={data.photoUrl} alt="" />
                            </div>
                        </div>
                        <SubPageButton url={data.photoUrl} text={data.name} type={'Reverse'} />
                    </div>
                </div>
            </div>
            <Sticky data={data} />
            <FlowText text={data.name} />
        </div>
    );
}

export default Viewer;
