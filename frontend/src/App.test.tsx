import { render, screen } from '@testing-library/react';
import App from './App';

describe('App', ()=>{
  it('should render all home elements', ()=>{
    render(<App />);
    const header = screen.getByRole("banner"); //header
    const mainMenu = screen.getByRole("navigation"); //nav
    const headerContent = screen.getAllByRole("img");
    const mainContent = screen.getByRole("main"); //main
    const sideContent = screen.getByRole("complementary"); //aside
    const footer = screen.getByRole("contentinfo"); //footer
    

    expect(header).toBeInTheDocument();
    expect(mainMenu).toBeInTheDocument();
    headerContent.forEach((content)=>{expect(content).toBeInTheDocument()})    
    expect(mainContent).toBeInTheDocument();
    expect(sideContent).toBeInTheDocument();
    expect(footer).toBeInTheDocument();
  })

  it("should initialize PageContext with home", ()=>{
    render(<App />);        
    const mainContent = screen.getByRole("main"); //main
    expect(mainContent).toHaveTextContent('PCMan');    
  })
})