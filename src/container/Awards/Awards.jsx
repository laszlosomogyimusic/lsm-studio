import React from 'react';
import { data, images } from '../../constants';
import { Article } from '../../components';
import './Awards.css';


const AwardCard = ({ award: { imgUrl, title, subtitle } }) => (
  <article className="awards__card">
    <img className="awards__card-image" src={imgUrl} alt="awards" />
    <div className="awards__card-content">
      <p className="article__subtitle" style={{ color: '#DCCA87' }}>{title}</p>
      <p className="article__text">{subtitle}</p>
    </div>
  </article>
);

const Awards = () => {
  let awardArticle = {
    type: "normal",
    justifyContentTo: "left",
    title:"Our Awards",
    subtitle: "Awards & recognitions", 
  }  
  return (
    <section className="app__bg app__wrapper app__section" id="awards">
      <div className="app__wrapper-info">
        <Article {...awardArticle} />

        <div className="awards__list">
          {data.awards.map((award) => <AwardCard award={award} key={award.title} />)}
        </div>
      </div>

      <figure className="app__wrapper-figure">
        <img className="awards__image" src={images.awards} alt="awards" />
      </figure>
    </section>
  )
};

export default Awards;
