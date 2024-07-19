import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectGroup,
  SelectItem,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";

interface SelectDropDownProps {
  placeholder: string;
  inputPlaceholder: string;
  items: any;
  icon: any;
  textHide?: boolean;
  style?: string;
}

export function SelectDropDown({
  placeholder,
  inputPlaceholder,
  items,
  icon,
  textHide,
  style,
}: SelectDropDownProps) {
  const InputCom = () => {
    if (!textHide) {
      return (
        <Input
          type="search"
          placeholder={inputPlaceholder}
          className="border-b border-b-muted py-2 pl-8 pr-4 focus:outline-none"
        />
      );
    }
  };
  const sectionContainer = !style ? "w-full" : style + " w-full";
  return (
    <section className={sectionContainer}>
      <Select>
        <SelectTrigger className="w-full h-12">
          <div className="flex gap-2 items-center justify-between">
            {icon}
            <SelectValue placeholder={placeholder} />
          </div>
        </SelectTrigger>
        <SelectContent>
          <div className="relative">
            <SearchIcon className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
            {InputCom()}
          </div>
          <SelectGroup>
            {items.map((item: any) => (
              <SelectItem key={item.value} value={item.value}>
                {item.name}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    </section>
  );
}

function SearchIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  );
}
