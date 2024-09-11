import { useRef } from "react";
import { IoSearch } from "react-icons/io5";

interface Props {
  handleSearchQuery: (query: string) => void;
}

const SearchInput = ({ handleSearchQuery }: Props) => {
  const input = useRef<HTMLInputElement>(null);

  return (
    <form
      className="w-full"
      onSubmit={(event) => {
        event.preventDefault();
        if (input.current) handleSearchQuery(input.current.value);
      }}
    >
      <div className="relative">
        <IoSearch className="absolute top-[23px] left-2" size="18px" />
        <input
          ref={input}
          type="text"
          placeholder="What do you want to cook today?"
          className="w-full shadow-lg rounded-sm text-base mt-4 mb-3 p-1 ps-8"
        />
      </div>
    </form>
  );
};

export default SearchInput;
