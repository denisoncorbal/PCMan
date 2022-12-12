import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event";
import MainMenu from "./MainMenu"

describe("MainMenu", ()=>{
    it("should render menu elements", () => {
        render(<MainMenu />);

        const menuElements = screen.getAllByRole("button");

        menuElements.forEach((element)=>{expect(element).toBeInTheDocument()});
    })

    it("should dropdown on click", async () => {
        render(<MainMenu />);

        const menuElementsBefore = screen.getAllByRole("button");

        await menuElementsBefore.forEach((element)=>{userEvent.click(element)});

        const menuElementsAfter = screen.getAllByRole("button");

        expect(menuElementsBefore.length).toBeLessThan(menuElementsAfter.length);
        
        expect(menuElementsAfter.filter((element)=>{return element.classList.contains("dropdown2")}).length).toBeGreaterThan(0);
    })
})