import { Routes, Route } from 'react-router-dom';

import Home from './components/Home.component';
import SignIn from './components/SignIn.component';
import Questions from './components/Questions.component';
import Thankyou from './components/Thankyou.component';

import './App.css';

function App() {
    return (
        <Routes>
            <Route
                path='/'
                element={<Home />}
            />

            <Route
                path='/sign-in'
                element={<SignIn />}
            />

            <Route
                path='/questions'
                element={<Questions />}
            />

            <Route
                path='/thankyou'
                element={<Thankyou />}
            />
        </Routes>
    );
}

export default App;
