
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';

export const DropDown = () => {
    return (
        <DropdownMenu.Root>
            <DropdownMenu.Trigger className="px-4 py-2 bg-gray-200 rounded-md">
                Person
            </DropdownMenu.Trigger>

            <DropdownMenu.Content
                className="min-w-[150px] bg-white shadow-md rounded-md p-2"
                align="start"
            >
                <DropdownMenu.Item className="px-4 py-2 hover:bg-gray-100 rounded-md">
                    Option 1
                </DropdownMenu.Item>
                <DropdownMenu.Item className="px-4 py-2 hover:bg-gray-100 rounded-md">
                    Option 2
                </DropdownMenu.Item>
                <DropdownMenu.Item className="px-4 py-2 hover:bg-gray-100 rounded-md">
                    Option 3
                </DropdownMenu.Item>
            </DropdownMenu.Content>
        </DropdownMenu.Root>
    );
};
