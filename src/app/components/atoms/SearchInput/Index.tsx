import SearchIcon from "../../../../../public/assets/icons/SearchIcon";

interface SearchInputProps {
  width?: string;
  height?: string;
}

export default function SearchInput() {
  return (
    <div className="relative w-full h-[60px] bg-white rounded-2xl border flex items-center">
      <input
        type="text"
        placeholder="Pesquisar..."
        className="text-black w-full h-full pl-4 rounded-2xl outline-none"
      />
      <div className="absolute right-4">
        <SearchIcon width="26px" height="26px" />
      </div>
    </div>
  );
}
