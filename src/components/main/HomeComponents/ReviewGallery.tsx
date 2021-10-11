import * as React from 'react';
import { isMobile } from 'react-device-detect';
import '../../../css/home/review-gallery.css'
import Img1 from '../../../images/review_gallery/1.png'
import Img2 from '../../../images/review_gallery/2.png'
import Img3 from '../../../images/review_gallery/3.png'
import Img4 from '../../../images/review_gallery/4.png'
import Img5 from '../../../images/review_gallery/5.png'
import Img6 from '../../../images/review_gallery/6.png'
import Img7 from '../../../images/review_gallery/7.png'
import Img8 from '../../../images/review_gallery/8.png'
import Img9 from '../../../images/review_gallery/9.png'
import Img10 from '../../../images/review_gallery/10.png'
import Img11 from '../../../images/review_gallery/11.png'
import Img12 from '../../../images/review_gallery/12.png'
import { range } from '../../../utils';

interface IReviewGalleryProps {
}

const ReviewGallery: React.FunctionComponent<IReviewGalleryProps> = (props) => {

    const mobileClass = isMobile ? ' mobile' : ''

    const gallery_items = [
        { item: Img1, id: 0 },
        { item: Img2, id: 1 },
        { item: Img3, id: 2 },
        { item: Img4, id: 3 },
        { item: Img5, id: 4 },
        { item: Img6, id: 5 },
        { item: Img7, id: 6 },
        { item: Img8, id: 7 },
        { item: Img9, id: 8 },
        { item: Img10, id: 9 },
        { item: Img11, id: 10 },
        { item: Img12, id: 11 },
    ]

    const [counter, setCounter] = React.useState(0)
    const onForward = () => {
        counter + 1 >= gallery_items.length ? setCounter(0) : setCounter(counter + 1)
    }
    const onBack = () => {
        counter - 1 < 0 ? setCounter(gallery_items.length - 1) : setCounter(counter - 1)
    }
    return <>
        <div className={'review-gallery-container' + mobileClass}>
            <div className={'review-gallery-image-container' + mobileClass}>
                <img src={gallery_items.find(i => i.id === counter).item}></img>
            </div>
            <div className={'review-gallery-nav-panel' + mobileClass}>
                <div className={'review-gallery-dots' + mobileClass}>
                    {range(gallery_items.length).map(i => {
                        const style = { color: '#386BEE' }
                        return <span onClick={_ => setCounter(i)} style={i === counter ? style : {}}><i className="fas fa-circle"></i></span>
                    })}
                </div>
                <div className={'review-gallery-buttons' + mobileClass}>
                    <button onClick={onBack}><i className="fas fa-chevron-left"></i></button>
                    <button onClick={onForward}><i className="fas fa-chevron-right"></i></button>
                </div>
            </div>
        </div>
    </>;
};

export default ReviewGallery;
