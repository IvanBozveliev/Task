import './Card.css';

const Card = ({
    title,
    image,
    content,
}) => {
    return (
        <div className="card">

            {image ?
                (<div className='divImage'>
                    <img src={image} className='cardImage' />
                    <h4 className='title'>{title}</h4>

                    <div className='content'>
                        <p className='txt'>{content}</p>
                    </div>
                </div>)
                :
                (<div className='images'>

                    <p className='imageTxt'>Image</p>
                    <h4 className='title'>{title}</h4>

                    <div className='content'>
                        <p className='txt'>{content}</p>
                    </div>

                </div>)
            }


        </div>
    )
}

export default Card;