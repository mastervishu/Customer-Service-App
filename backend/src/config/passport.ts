import passport from 'passport';
import { Strategy as GoogleStrategy } from 'passport-google-oauth20';
import User, { IUser } from '../models/User';

passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID!,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    callbackURL: '/auth/google/callback'
}, async (accessToken, refreshToken, profile, done) => {
    try {
        const user = await User.findOneAndUpdate(
            { googleId: profile.id },
            { name: profile.displayName, email: profile.emails && profile.emails.length > 0 ? profile.emails[0].value : '' },
            { upsert: true, new: true }
        )
        return done(null, user)
    } catch (error: unknown) {
        return done(error);
    }
}));

passport.serializeUser((user: any, done) => {
    done(null, user.id);
});

passport.deserializeUser((id, done) => {
    User.findById(id, (err: unknown, user: IUser) => {
        done(err, user);
    });
});
