import Header from './Header.component';
import Hero from './Hero.component';
import Description from './Description.component';
import Footer from './Footer.component';

const Home = () => {
    return (
        <main className='max-w-6xl mx-auto'>
            <Header />
            <Hero />
            <Description />
            <Footer />
        </main>
    );
};

export default Home;
