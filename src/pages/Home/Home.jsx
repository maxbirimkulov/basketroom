import React from 'react';
import Slider from "./Slider/Slider";
import Category from "../../components/CategoryCard/Category";
import Card from "../../components/Card/Card";
import CardRow from "../../components/CardRow/CardRow";

const Home = () => {
    return (
        <div>
            <Slider/>

            <div>
                <div className="container">
                    <div className="home__category">
                        <Category img={'https://static.insales-cdn.com/r/QfnbTWn-e-o/rs:fit:570:570:1/plain/images/collections/1/3822/80924398/015__%D0%9E%D1%80%D0%B8%D0%B3%D0%B8%D0%BD%D0%B0%D0%BB_.png'}/>
                        <Category img={'https://static.insales-cdn.com/r/FgD_Xb4k23o/rs:fit:570:570:1/plain/images/collections/1/3818/80924394/013__%D0%9E%D1%80%D0%B8%D0%B3%D0%B8%D0%BD%D0%B0%D0%BB_.png'}/>
                        <Category img={'https://static.insales-cdn.com/r/C95ji4gS9FE/rs:fit:570:570:1/plain/images/collections/1/3819/80924395/014__%D0%9E%D1%80%D0%B8%D0%B3%D0%B8%D0%BD%D0%B0%D0%BB_.png'}/>
                        <Category img={'https://static.insales-cdn.com/r/J9hnTq8RMT8/rs:fit:570:570:1/plain/images/collections/1/3210/88624266/021__%D0%9E%D1%80%D0%B8%D0%B3%D0%B8%D0%BD%D0%B0%D0%BB_.png'}/>
                        <Category img={'https://static.insales-cdn.com/r/QVpMAdtiTFg/rs:fit:570:570:1/plain/images/collections/1/1742/88557262/017__%D0%9E%D1%80%D0%B8%D0%B3%D0%B8%D0%BD%D0%B0%D0%BB_.png'}/>
                        <Category img={'https://static.insales-cdn.com/r/mIhESSH1kAw/rs:fit:570:570:1/plain/images/collections/1/2255/88737999/024-_%D0%9E%D1%80%D0%B8%D0%B3%D0%B8%D0%BD%D0%B0%D0%BB_.gif'}/>
                    </div>
                </div>
            </div>


            <div className="container">
                <CardRow/>
                <CardRow category={'SALE'}/>
                <CardRow category={'Выбор покупателей'}/>

            </div>
            <div className="container">
                <div className="home__category">
                    <Category img={'https://static.insales-cdn.com/r/I-dzfSn1bJM/rs:fit:570:570:1/plain/images/collections/1/1228/81372364/Travis_Collection__01_.jpg'}/>
                    <Category img={'https://static.insales-cdn.com/r/yJEVPK-0zp0/rs:fit:570:570:1/plain/images/collections/1/6176/81221664/Off_White_Collection__01_.jpg'}/>
                    <Category img={'https://static.insales-cdn.com/r/iqmn03TwVNg/rs:fit:570:570:1/plain/images/collections/1/3883/80924459/Yeezy_Collection__01_.jpg'}/>
                    <Category img={'https://static.insales-cdn.com/r/Vb-C3tZfI4k/rs:fit:570:570:1/plain/images/collections/1/1740/88557260/016__%D0%9E%D1%80%D0%B8%D0%B3%D0%B8%D0%BD%D0%B0%D0%BB_.png'}/>
                    <Category img={'https://static.insales-cdn.com/r/QVpMAdtiTFg/rs:fit:570:570:1/plain/images/collections/1/1742/88557262/017__%D0%9E%D1%80%D0%B8%D0%B3%D0%B8%D0%BD%D0%B0%D0%BB_.png'}/>
                    <Category img={'https://static.insales-cdn.com/r/gEWxamk3rVE/rs:fit:570:570:1/plain/images/collections/1/2154/88557674/018__%D0%9E%D1%80%D0%B8%D0%B3%D0%B8%D0%BD%D0%B0%D0%BB_.png'}/>
                </div>
            </div>

            <div className="container">
                <div className="home__salesStimulus">
                    <div className='home__salesStimulus-block'>
                        <img src="https://static.insales-cdn.com/files/1/4255/16494751/original/%D0%9F%D1%80%D0%B5%D0%B8%D0%BC%D1%83%D1%89%D0%B5%D1%81%D1%82%D0%B2%D0%B0__05__3ffcae16669ad3b599bf519ce26b486b.png" alt=""/>
                    </div>
                    <div className='home__salesStimulus-block'>
                        <img src="https://static.insales-cdn.com/files/1/4301/16494797/original/Преимущества__04__2bba2fc8bf9a979406669c09ef337f31.png" alt=""/>
                    </div>
                    <div className='home__salesStimulus-block'>
                        <img src="https://static.insales-cdn.com/files/1/4258/16478370/original/Преимущества__03_.png" alt=""/>
                    </div>
                    <a href='#' className='home__salesStimulus-block'>
                        <img src="https://static.insales-cdn.com/files/1/3182/16559214/original/Преимущества__02__91192c81fb591590a33bf5a2c075629b.png" alt=""/>
                    </a>
                    <a href='#' className='home__salesStimulus-block'>
                        <img src="https://static.insales-cdn.com/files/1/3179/16559211/original/Преимущества__01__f1e3c8bfa54f2dd04c1d7ed16dee4c9d.png" alt=""/>
                    </a>

                </div>
            </div>




        </div>
    );
};

export default Home;