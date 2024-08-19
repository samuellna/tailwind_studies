import { LogOut } from "lucide-react";
// import Image from "next/image";

export function CardProfile () {
    return (
        <div className="flex items-center gap-3">
            <img src="https://github.com/samuellna.png" alt="Samuel's profile" className="rounded-full h-10 w-10"/>
            <div className="truncate flex flex-col">
                <span className="text-sm text-zinc-700 font-semibold">Samuel Nunes</span>
                <span className="text-sm text-zinc-500">samuelnunes4039@gmail.com</span>
            </div>
            <button type="button" className="ml-auto p-2 hover:bg-zinc-50 rounded-md">
                <LogOut className="mx-auto w-5 h-5 text-zinc-500" />
            </button>
        </div>
    );
}