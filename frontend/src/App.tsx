import React from 'react';
import Header from './components/header/Header';
import HeaderContent from './components/headerContent/HeaderContent';
import MainContent from './components/mainContent/MainContent';
import MainMenu from './components/mainMenu/MainMenu';
import SideContent from './components/sideContent/SideContent';
import Footer from './components/footer/Footer';
import PageContext from './context/PageContext';


function App() {  
  return (    
    <>
      <PageContext>
        <Header />
        <MainMenu />
        <HeaderContent />
        <MainContent />
        <SideContent />
        <Footer />
      </PageContext>
    </>
  );
}

export default App;
