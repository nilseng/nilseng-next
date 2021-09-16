import Link from "next/link";
import { Popover } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/solid";

export interface INavPopoverProps {
  buttonText: string;
  linkGroups: LinkGroup[];
}

interface LinkGroup {
  id: string;
  links: { id: string; name: string; link: string }[];
}

export function NavPopover({ buttonText, linkGroups }: INavPopoverProps) {
  return (
    <Popover>
      <Popover.Button>
        <div className="flex items-center font-light text-sm text-gray-50 px-6 p-2">
          <p className="whitespace-nowrap">{buttonText}</p>
          <ChevronDownIcon height="20" width="20" />
        </div>
      </Popover.Button>
      <Popover.Panel
        unmount={false}
        className="absolute z-10 rounded font-light text-sm text-gray-50 bg-gray-800 py-2"
      >
        {({ close }) =>
          linkGroups.map((linkGroup) => (
            <div key={linkGroup.id} className="flex flex-col">
              {linkGroup.links.map((linkItem) => (
                <Link key={linkItem.id} href={linkItem.link}>
                  <a
                    className="hover:bg-gray-700 px-4 py-2 sm:px-6"
                    onClick={() => close()}
                  >
                    {linkItem.name}
                  </a>
                </Link>
              ))}
            </div>
          ))
        }
      </Popover.Panel>
    </Popover>
  );
}
