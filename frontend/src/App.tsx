import { useState } from 'react';
import GoogleLoginComponent from './components/GoogleLogin';
import CustomerServiceForm from './components/CustomerServiceForm';
import CustomerServiceRequests from './components/CustomerServiceRequests';

export interface IUser {
  googleId: string,
  name: string,
  email: string,
}

function App() {
  const [user, setUser] = useState<IUser | null>(null);

  const handleLoginSuccess = (response: any) => {
    // Extract user profile information from the response
    const profile = response.profileObj;
    setUser(profile);
  };

  const handleLoginFailure = (error: unknown) => {
    console.error('Login failed:', error);
  };

  return (
    <div>
      {!user ? (
        <GoogleLoginComponent onLoginSuccess={handleLoginSuccess} onLoginFailure={handleLoginFailure} />
      ) : (
        <>
          <h1>Welcome, {user.name}</h1>
          <CustomerServiceForm userId={user.googleId} />
          <CustomerServiceRequests />
        </>
      )}
    </div>
  );
}

export default App;