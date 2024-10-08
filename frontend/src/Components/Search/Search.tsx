import React, { ChangeEvent, MouseEvent, useState } from "react";
import "./Search.css";
interface Props {
  onClick: (e: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>) => void;
  search: string | undefined;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const Search: React.FC<Props> = ({
  onClick,
  search,
  handleChange,
}: Props): JSX.Element => {
  return (
    <div>
      <input value={search} onChange={(e) => handleChange(e)} />
      <button onClick={(e) => onClick(e)} />
    </div>
  );
};

export default Search;
