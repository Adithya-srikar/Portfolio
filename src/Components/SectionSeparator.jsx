import { Plus } from 'lucide-react';

export const SectionSeparator = () => (
    <div className="w-[90%] mx-auto py-8 relative flex items-center justify-between">
    <div className="flex flex-col items-center">
        <div className="h-6 w-px bg-gray-300" />
        <Plus className="text-gray-400 z-10" />
    </div>

    <div className="flex-grow absolute left-10 right-10 transform -translate-y-1/2 h-px bg-gray-300" />

    <div className="flex flex-col items-center">
        <div className="h-6 w-px bg-gray-300" />
        <Plus className="text-gray-400 z-10" />
    </div>
    </div>


);
