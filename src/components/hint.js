import React, { useState } from 'react';
import { Button, Alert } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
//import { useCookies } from 'react-cookie';// console

const Hint = () => {
    //const [show, setShow] = useState(true);
    const [show, setShow] = useState(() => {
        if (document.cookie) return false;// if git cookies will not display
        else return true;
    });

    function handleCookies(req, res) {
        setShow(false);
        document.cookie = 'button=true; max-age=604800; path=/';
    }

    return (
        < Alert show={show} variant="success" >
            <p>歡迎來到線上商城，全館免運中!!</p>
            <div className="d-flex justify-content-end">
                <Button onClick={handleCookies} variant="outline-success">知道了</Button>
            </div>
        </Alert >
    );
};

export default Hint;
