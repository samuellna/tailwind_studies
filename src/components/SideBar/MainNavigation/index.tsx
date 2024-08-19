import { BarChart2, CheckSquare, Flag, Home, SquareStack, Users } from "lucide-react";
import { NavItem } from "./NavItem";

const titles = ["Home", "Dashboard", "Projects", "Tasks", "Reporting", "Users"];
const icons = [Home, BarChart2, SquareStack, CheckSquare, Flag, Users];

export function MainNavigation () {
    return (
        <nav className="space-y-0.5">
            {/* Creating a NavItem for each title and icon above  */}
            {titles.map((title, index) => <NavItem key={index} icon={icons[index]} title={title} />)} 
        </nav>
    );
}