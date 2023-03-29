import React from 'react';
import './Card.modules.css'

const Card = ({book}) => {
    console.log(book);
    return (
        <>
        {
            book.map((item) => {
                let img = item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.smallThumbnail;
                let category = item.volumeInfo.categories;
                let bookName = item.volumeInfo.title;
                let author = item.volumeInfo.authors;
                return(
                    <div className='BookBlock'>
                        <div className='InBlock'>
                            <img src={img} alt=''/>
                            <div>{category}</div>
                            <h2>{bookName}</h2>
                            <div>{author}</div>

                        </div>
                    </div>

                )
            })
        }
        </>
    );
};

export default Card;