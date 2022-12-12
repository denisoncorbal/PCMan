import { render, screen } from '@testing-library/react';
import Footer from "./Footer"

describe("Footer", ()=>{
    it("should render links and copyright", ()=>{
        render(<Footer />)

        const links = screen.getAllByRole("link");
        const copyright = screen.getByText("Denison", {exact: false});

        links.forEach((link)=>{expect(link).toBeInTheDocument()});
        expect(copyright).toBeInTheDocument();
    })
})