import React from 'react';
import { Link } from 'react-router-dom';

const BadRequest = () => {
    return (
        <section>
            <div>
                <h1>Bad request</h1>
                <Link className="btn-back-home" to="/">
                    Back Home
                </Link>
            </div>
        </section>
    );
};

export default BadRequest;
