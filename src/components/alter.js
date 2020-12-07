import React, { useState } from 'react';
import { Button, Alert } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useCookies } from 'react-cookie';

const Alter = () => {
    const [show, setShow] = useState(true);

    function handleCookie() {
        setShow(false);
    }

    return (
        <Alert show={show} variant="success">
            <p>歡迎來到線上商城，全館免運中!!</p>
            <div className="d-flex justify-content-end">
                <Button onClick={handleCookie} variant="outline-success">知道了</Button>
            </div>
        </Alert>
    );
};

export default Alter;
