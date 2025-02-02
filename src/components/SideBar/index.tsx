import { Search } from 'lucide-react';
import {Logo} from '../../assets/Logo';
import { MainNavigation } from './MainNavigation';
import { NavItem } from './MainNavigation/NavItem';
import { LifeBuoy, Settings } from 'lucide-react';
import { UsedSpaceWidget } from './UsedSpaceWidget';
import { CardProfile } from './CardProfile';

const titles = ["Support", "Settings"];
const icons = [LifeBuoy, Settings];
export function SideBar() {
    return (
        <aside className="flex flex-col gap-6 border-r border-zinc-200 px-5 py-8">
            <Logo/>
            <div className="mx-1 flex w-full items-center gap-2 rounded-lg border border-zinc-300 px-3 py-2 shadow-sm">
                <Search className='h-5 w-5 text-zinc-500'/>
                <input type='text' placeholder='Search' className='flex-1 border-0 bg-transparent p-0 text-zinc-900 placeholder-zinc-600 focus: '></input>
            </div>
            <MainNavigation/>

            <div className='mt-auto flex flex-col gap-6'>
                <nav className='space-y-0.5'>
                    {titles.map((title, index) => <NavItem key={index} icon={icons[index]} title={title} />)}
                </nav>
                <UsedSpaceWidget/>
                
                <div className='h-0.5 bg-zinc-200' />

                <CardProfile/>
            </div>
        </aside>
    );
}