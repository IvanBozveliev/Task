import Header from '../HeaderPage/HeaderPage';
import Card from './Card/Card'

import { useState } from 'react';
import './GalleryPage.css';

const Gallery = () => {
    let cardsContent = [
        { img: '', title: 'ice', content: 'Ice from Iceberg' },
        { img: '', title: 'nice', content: 'this is text' },
        { img: '', title: 'Nice', content: 'Nice Nice' },
        { img: '', title: 'price', content: 'Price PricePrice' },
        { img: '', title: 'price', content: 'price some text' },
        { img: '', title: 'parrot', content: 'Ice from Iceberg' },
        { img: '', title: 'turtle', content: 'Lorem ipsum' },
        { img: '', title: 'none', content: 'Lorem ipsum' },
        { img: '', title: 'theme', content: 'Lorem ipsum' },
        { img: '', title: 'balon', content: 'ÐLorem' },
        { img: '', title: 'rock', content: 'ILorem' },
        { img: '', title: 'number', content: 'ILorem' },
        { img: '', title: 'sun', content: 'ILorem' },
        { img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Full_Moon_Luc_Viatour.jpg/800px-Full_Moon_Luc_Viatour.jpg', title: 'moon', content: 'ILorem' },
        { img: '', title: 'tree', content: 'ILorem' },
        { img: 'https://i.guim.co.uk/img/media/b3e038f98ce2cde24e5c5bb7e8200e65bbc4ae8c/0_363_5442_3265/master/5442.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=21f465c0b2bb13d012e17bae930d3db1', title: 'sea', content: 'turtle' },
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
                {allCards.map((x, i) => <Card key={i} image={x.img} title={x.title} content={x.content} />)}
            </div>
        </>
    )
}

export default Gallery