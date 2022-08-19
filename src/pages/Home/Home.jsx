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
            Home



        </div>
    );
};

export default Home;