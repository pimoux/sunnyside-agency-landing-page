import React from 'react';
import emily from "../images/image-emily.jpg";
import thomas from "../images/image-thomas.jpg";
import jennie from "../images/image-jennie.jpg";
import Feedback from './Feedback';

const Testimonials = () => {

    const data = [
        {
            image: emily,
            comment: "We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit.",
            fullname: "Emily R.",
            job: "Marketing Director",
        },
        {
            image: thomas,
            comment: "Sunnyside's enthusiasm coupled with their keen interest in our brand's success made it a satisfying and enjoyable experience.",
            fullname: "Thomas S.",
            job: "Chief Operating Officer",
        },
        {
            image: jennie,
            comment: "Incredible end result! Our sales increased over 400% when we worked with Sunnyside. Highly recommended!",
            fullname: "Jennie F.",
            job: "Business Owner",
        },
    ]
    
    return (
        <div className='testimonials'>
            <h1 className='testimonials-title'>CLIENT TESTIMONIALS</h1>
            <div className="advices">
                {data.map((elt, i) => <Feedback 
                    id={`feedback-${i + 1}`}
                    key={elt.fullname}
                    image={elt.image} 
                    comment={elt.comment} 
                    fullname={elt.fullname} 
                    job={elt.job} 
                />)}
            </div>
        </div>
    )
}

export default Testimonials