// src/components/GoogleLogin.js
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';

const GoogleLoginComponent = ({ onLoginSuccess, onLoginFailure }: { onLoginSuccess: any; onLoginFailure: any }) => {
    const clientId = import.meta.env.VITE_GOOGLE_CLIENT_ID;

    return (
        <GoogleOAuthProvider clientId={clientId}>
            <GoogleLogin
                onSuccess={onLoginSuccess}
                onError={onLoginFailure}
            />
        </GoogleOAuthProvider>
    );
};

export default GoogleLoginComponent;