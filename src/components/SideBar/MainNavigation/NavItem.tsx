import { ElementType } from "react";
import { ChevronDown } from "lucide-react";

interface NavItemProps {
    icon: ElementType;
    title: string;
}

export function NavItem({icon: Icon, title}: NavItemProps) {
    return (
        <a className="group flex items-center gap-3 rounded px-3 py-2 hover:bg-slate-200 hover:cursor-pointer">
            <Icon className="w-5 h-5 text-zinc-500" />
            <span className="font-medium text-zinc-700 group-hover:text-purple-500" >{title}</span>
            <ChevronDown className="ml-auto h-5 w-5 text-zinc-400 group-hover:text-violet-400"/>
        </a>
    );
}