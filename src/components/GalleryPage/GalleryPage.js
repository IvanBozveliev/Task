import Header from '../HeaderPage/HeaderPage';
import Card from './Card/Card';

import { useState } from 'react';
import './GalleryPage.css';

const Gallery = () => {

    let cardsContent = [
        { img: 'https://cdn.britannica.com/09/162509-131-9D36AD0E/Ice-cubes-background.jpg', title: 'ice', content: 'Ice from Iceberg' },
        { img: '', title: 'nice', content: 'this is text' },
        { img: '', title: 'Nice', content: 'Nice Nice' },
        { img: 'http://www.coloraccounting.com/uploads/2/4/8/0/24801950/published/p1_60.jpg?1527788559', title: 'price', content: 'Price PricePrice' },
        { img: '', title: 'price', content: 'price some text' },
        { img: '', title: 'parrot', content: 'Ice from Iceberg' },
        { img: 'https://files.worldwildlife.org/wwfcmsprod/images/Sea_Turtle_Hol_Chan_Marine_Reserve_WW1105958/hero_small/5fv88fm3v6_Sea_Turtle_Hol_Chan_Marine_Reserve_WW1105958.jpg', title: 'turtle', content: 'Lorem ipsum' },
        { img: '', title: 'none', content: 'Lorem ipsum' },
        { img: '', title: 'theme', content: 'Lorem ipsum' },
        { img: '', title: 'balon', content: 'ÐLorem' },
        { img: '', title: 'rock', content: 'ILorem' },
        { img: '', title: 'number', content: 'ILorem' },
        { img: '', title: 'sun', content: 'ILorem' },
        { img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Full_Moon_Luc_Viatour.jpg/800px-Full_Moon_Luc_Viatour.jpg', title: 'moon', content: 'ILorem' },
        { img: '', title: 'tree', content: 'ILorem' },
        { img: 'https://www.impel.eu/wp-content/uploads/2019/08/mediterranean-sea.jpg', title: 'sea', content: 'turtle' },
    ];

    const [allCards, setAllCards] = useState(cardsContent);

    const onSearch = (e) => {

        let currentWord = e.target.value;

        if (currentWord !== '') {

            let currentCardsContent = cardsContent.filter(x => x.title.toLocaleLowerCase().includes(currentWord.toLocaleLowerCase()));

            if (currentCardsContent.length !== 0) {

                return setAllCards(currentCardsContent)

            } else {
                let currentCardsContent = cardsContent.filter(x => x.content.toLocaleLowerCase().includes(currentWord.toLocaleLowerCase()));
                return setAllCards(currentCardsContent)
            }


        } else {
            return setAllCards(cardsContent)
        }
        
    }
    
   
    return (
        <>
            <Header />
            <input type='text' name='search' className='dynamicSearch' onBlur={onSearch} />
            <div className='matrixCards'>
                {allCards.map((x, i) =><Card key={i} image={x.img} title={x.title} content={x.content} />)} 
            </div>
        </>
    )
}

export default Gallery