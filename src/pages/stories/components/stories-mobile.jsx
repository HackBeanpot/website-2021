import React, { Fragment } from 'react'; 
import Quotes from 'data/quotes.json';
import Quote from 'pages/stories/components/quote';

import Flickity from 'flickity';
import 'flickity/dist/flickity.min.css';

class StoriesMobile extends React.Component {

    renderQuotes() {
        return Quotes.map((person, index)=> {
            return (
                <div key={`stories-${index}`} className="carousel-cell">
                    <div className="stories-round-image__selected stories-round-image center" >
                        <img className="portrait" src={person.imgSrc}  />
                    </div>
                    <Quote quote={person} />
                </div>
            )
        })
    }
    render() {
        return(
            <Fragment>
                <div class="carousel" data-flickity>
                    {this.renderQuotes()}
                </div>
            </Fragment>
        )
    }
}

export default StoriesMobile;