import React, { useState, useEffect } from 'react';

const AuthenticateNotify = (props) => {
    const [msg, setMsg] = useState(props.msg);

    useEffect(() => {
        setMsg(props.msg)
    }, [props.msg]);

    return (
        <div>
            <p style={{ color: "red", fontWeight: 'bold' }}>{msg}</p>
        </div>
    );
};

export default AuthenticateNotify;