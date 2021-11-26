import React from 'react';
import contact from './../../../Images/contact.jpg'

const Contact = () => {
    return (
        <div className="container card mb-3">
            <div className="row g-0">
                <div className="col-md-6">
                    <img src={contact} className="img-fluid rounded-start" alt="..." />
                </div>
                <div className="col-md-6">
                    <div className="card-body mt-5 pt-5">
                        <h5 className="text-center card-title">Take It Anywhere, Film In Any Condition</h5>
                        <p className="text-center card-text">And when the odds are against him and their dangers work to do. You bet your life Speed Racer he will see it through. On the most sensational inspirational celebrational
                            Muppetational is what we call the Muppet Show. If you have a problem if no one else can help and if you can find them maybe you can hire well we're movin' on up to the east side to a deluxe apartment in the sky. Makin their way the only way they know how. That's just a little bit more than the law will allow.</p>
                    </div>
                    <div className="text-center">
                        <button type="button" className="btn btn-primary">Contact us</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;