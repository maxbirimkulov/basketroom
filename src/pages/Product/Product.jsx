import React, {useEffect, useRef, useState} from "react";
import {Link, NavLink, useNavigate, useParams} from "react-router-dom";
import Fancybox from "../../components/Fancybox/Fancybox";
import Card from "../../components/Card/Card";
import {MdFavorite} from 'react-icons/md'
import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {findUser} from "../../redux/user";
// import required modules
import {Keyboard, Navigation} from "swiper";
import SalesInfo from "../../components/SalesInfo/SalesInfo";
import {useDispatch, useSelector} from "react-redux";
import {getOneProduct} from "../../redux/clothes";
import ProductDetails from "./ProductDetails";
import {MdOutlineAddShoppingCart} from 'react-icons/md'
import {AiFillCloseCircle} from 'react-icons/ai'


const Product = () => {
    const notify = (text) =>toast(text, {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        className: 'toast-message',
        closeOnClick: true,
        theme:"dark",
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
    });
    const params = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const user = useSelector(s => s.user.user);
    const {oneProduct, status, products , watchedProducts, error} = useSelector(state => state.clothes);
    useEffect(( ) =>{

        if (oneProduct?._id !== params.id){
            dispatch(getOneProduct(params.id))
        }
    },[params.id]);
    const [popup, setPopup] = useState(false);
    const [mySizes, setMySizes] = useState([]);
    const sameBrands = products?.filter((item ) => item.brand === oneProduct?.brand  )
    console.log(sameBrands)
    const favBtn = useRef(null);
    const categorySliderLength = products?.filter((item ) => item.category === oneProduct?.category).length;
    const secs = Date.parse(oneProduct.createdAt);
    const addedToFavorite = user?.favourites?.filter(el => el?._id === oneProduct?._id).length;

    const addFav = () => {
        const favorites = document.querySelector('#favorites');
        const favBtn = document.querySelector('#favBtn');
        user?.favourites.findIndex(el => el._id === oneProduct._id) >= 0 ? notify('????????????') : notify('?????????????????? ?? ????????????????');
            dispatch(findUser( {user: {...user, favourites:
                    user?.favourites.findIndex(el => el._id === oneProduct._id) >= 0 ?
                        user?.favourites.filter((el) => el._id !== oneProduct._id)
                        : [...user.favourites, {...oneProduct}]
                }}));
            // if (user?.favourites.findIndex(el => el._id === oneProduct._id) < 0) favBtn.classList.add('sendtocart');
        const moveAmount = setTimeout(() =>{
            favorites.classList.add('shake');
            // favBtn.classList.remove('sendtocart');
            // favorites.setAttribute('data-totalitems', user?.favourites?.length);
            setTimeout(() => {
                favorites.classList.remove('shake');
            },500)
        },300);
        window.scrollTo(0, 0);

        return () => {
            clearTimeout(moveAmount)
        }
    };
    const handleChoseSize = (size) =>{
        console.log(mySizes)
      setMySizes(prev => prev.indexOf(size) === -1 ? [...prev, size] : prev.filter(el => el !== size));
    };

    const addToCart = () =>{
        const cart = document.querySelector('#cart');
        const favBtn = document.querySelector('#favBtn');
        if (mySizes.length){
        setTimeout(() =>{
            cart.classList.add('shake');
            setTimeout(() => {
                cart.classList.remove('shake');
            },500)
        },500);
        window.scrollTo(0, 0);
        user?.cart.findIndex(el => el._id === oneProduct._id) >= 0 ?
            notify('?????????? ?????? ??????????') :  setPopup(true);
        dispatch(findUser({user: {...user, cart:
                    user?.cart.findIndex(el => el._id === oneProduct._id) >= 0 ?

                        user?.cart.filter((el) => el._id !== oneProduct._id)
                        : [...user.cart, {...oneProduct, sizes: mySizes}]
            }}));
        }
        else {
            notify('???????????????? ????????????')
        }
    };
    return (
        <div>
            <div className="container">
                <div className='product'>
                    {
                        popup &&
                            <>
                                <div className='popup__box'>
                                    <h2 className='popup__title'>?????????? ?????? ????????????????</h2>
                                    <span className='popup__close' onClick={() => setPopup(false)}><AiFillCloseCircle/></span>
                                    <div className='popup__btns'>
                                        <button className='popup__btn active' onClick={() => navigate('/catalog/1')}>???????????????????? ??????????????</button>
                                        <button className='popup__btn ' onClick={() => navigate('/basket')}>?????????????? ?? ??????????????</button>
                                    </div>
                                </div>
                                <div className="overlay" onClick={() => setPopup(false)}>

                                </div>
                            </>
                    }

                    <div className="product__top">
                        <div className="product__top-images">
                            <Swiper initialSlide={0}  navigation={true} keyboard={true} modules={[Navigation, Keyboard]} className="mySwiper product__top-imgPlace">
                                {
                                    status === 'loading' ?
                                    <div className='product__top-loading'>
                                        <ProductDetails/>
                                    </div>
                                    :
                                   JSON.stringify(oneProduct) !== '{}'  && oneProduct.images.map((img, idx) => img &&
                                        (
                                            <React.Fragment key={idx}>
                                                <SwiperSlide>
                                                    <div className='product__top-backImg' style={{background: `url(${`${process.env.REACT_APP_URL}${img}`})center/contain no-repeat`}}> </div>
                                                </SwiperSlide>
                                            </React.Fragment>
                                    )
                                    )
                                }
                            </Swiper>
                            <div className='product__top-gallery'>
                                <Fancybox>
                                    {status === 'loading' ?
                                            <div className='product__top-l'>loading</div>
                                            :
                                            oneProduct?.images?.map((img, idx) => img &&
                                                (
                                                    <React.Fragment key={idx}>
                                                        <a data-fancybox="gallery" href={`${process.env.REACT_APP_URL}${img}`}
                                                           className='product__top-gallery-block'>
                                                                <div className='product__top-galleryImage' style={{background: `url(${`${process.env.REACT_APP_URL}${img}`})center/contain no-repeat`}}> </div>
                                                        </a>
                                                    </React.Fragment>

                                                )
                                            )
                                    }
                                </Fancybox>
                            </div>
                        </div>

                        <div className='product__top-variables'>
                            <h3><Link className='product__top-link product__top-link-back'
                                      to={'/'}>??????????????</Link> / <Link className='product__top-link '
                                                                      to={'/catalog'}>??????????????</Link></h3>
                            <h2 className='product__top-title'>{oneProduct ? oneProduct.title : 'Air Jordan 1 \'Black Toe\''}</h2>
                            <p className='product__top-price'>{oneProduct ? oneProduct.price : '13127'} ??????</p>
                            <p className='product__top-comment'>???????????????? ??????????</p>
                            <p className='product__top-text'>{
                                oneProduct.description
                            }
                            </p>
                            <p className='product__top-sizesText'>????????????</p>
                            <div className='product__top-sizes'>

                                {
                                    oneProduct?.sizes?.map((size, idx) =>{
                                        console.log(idx)
                                        return (
                                        <button key={idx} className={`product__top-size ${mySizes.indexOf(size)> -1 && 'active'}`} onClick={() => handleChoseSize(size)}> {size}</button>
                                        )
                                    })
                                }


                            </div>
                            <p className='product__top-return'>??????????/?????????????? ?? ?????????????? 14 ????????</p>

                            <div className='product__top-pick'>
                                <button className='product__top-pickAdd' onClick={() => addToCart()}><MdOutlineAddShoppingCart/>{!user?.cart?.filter(el => el?._id === oneProduct?._id).length ? '?? ??????????????' : '????????????'} </button>
                                <span className='product__top-pickFav' id='favBtn' ref={favBtn} onClick={() => addFav()}>
                                    <span className={`${!addedToFavorite && 'productCard__like-default'}`}><MdFavorite/>  {addedToFavorite ? <span className="cart-item"> </span> : ''}</span>
                                </span>
                            </div>

                            <div className='product__top-category'>?????????????????? ?? ???????????????????? :
                                <span className='product__top-category_link'> {oneProduct?.category}</span>
                                <span className='product__top-category_link'> {oneProduct?.brand}</span>
                            </div>
                        </div>

                    </div>
                    <div className="product__info">

                    </div>
                </div>

            </div>


            <div className="container">
                <h2 className='home__cardBlock-title'>?????? ?????? ???? ????????????????????</h2>

                <div className='home__cardBlock-row'>
                    <Swiper navigation={true} slidesPerView={categorySliderLength > 3 ? '4' : categorySliderLength} loop={true} modules={[Navigation]}
                            breakpoints={ {
                                960: {
                                    slidesPerView: '4',
                                },
                                720: {
                                    slidesPerView: 3,
                                },
                                540: {
                                    slidesPerView: 2,
                                },
                                0: {
                                    slidesPerView: 1,
                                },
                            }   }
                            className="mySwiper">
                        {
                            sameBrands.length >= 3 &&
                            sameBrands?.map((pare, idx) =>{
                                console.log(idx)
                                return (
                                <div key={idx} className='home__productCard'>
                                    <SwiperSlide><Card product={pare} page={'slide'}/></SwiperSlide>
                                </div>
                            )})
                        }
                    </Swiper>

                </div>
            </div>
            <div className="container">
                {
                    watchedProducts?.length > 4 &&
                    <>
                        <h2 className='home__cardBlock-title'>?????????? ?????????????????????????? ????????????</h2>

                        <div className='home__cardBlock-row'>
                            <Swiper navigation={true} slidesPerView={'4'} modules={[Navigation]}
                                    breakpoints={ {
                                        960: {
                                            slidesPerView: '4',
                                        },
                                        720: {
                                            slidesPerView: 3,
                                        },
                                        540: {
                                            slidesPerView: 2,
                                        },
                                        0: {
                                            slidesPerView: 1,
                                        },
                                    }   }
                                className="mySwiper">
                                {
                                    watchedProducts?.map((pare, idx) =>{
                                        console.log(idx)
                                        return (
                                        <React.Fragment key={idx}>
                                            <SwiperSlide><Card product={pare} page={'slide'}/></SwiperSlide>
                                        </React.Fragment>
                                    )})
                                }
                            </Swiper>

                        </div>
                    </>
                }
            </div>


            <SalesInfo/>

        </div>
    );
};

export default Product;