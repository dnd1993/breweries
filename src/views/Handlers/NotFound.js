import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <section>
            <div style={{textAlign:'center'}}>
                <h1>Oops! We couldn't find anything</h1>
                <Link className="btn-back-home" to="/">
                    Back Home
                </Link>
            </div>
        </section>
    );
};

export default NotFound;
