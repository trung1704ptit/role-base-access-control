import React from 'react';
import JumbotronWrapper from '../../components/JumbotronWrapper';
import { Link } from 'react-router-dom';

export default function ForgotPassword() {
    return (
        <JumbotronWrapper title="Forgot password">
            <Link className="nav-link" to="/">
                Back to Login
            </Link>
        </JumbotronWrapper>
    )
}
