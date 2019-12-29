import React from 'react';
import JumbotronWrapper from '../../components/JumbotronWrapper';
import { Link } from 'react-router-dom';

export default function Register() {
    return (
        <JumbotronWrapper title="Register">
            <Link className="nav-link" to="/">
                Back to Login
            </Link>
        </JumbotronWrapper>
    )
}
