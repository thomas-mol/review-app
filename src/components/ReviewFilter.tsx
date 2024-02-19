import React from "react";

interface Props {
  onSelectCategory: (category: string) => void;
}

const ReviewFilter = ({ onSelectCategory }: Props) => {
  return (
    <select
      className="form-select"
      onChange={(event) => onSelectCategory(event.target.value)}
    >
      <option value="">All categories</option>
      <option value="Coffee">Coffee</option>
      <option value="Food">Food</option>
      <option value="Other">Other</option>
    </select>
  );
};

export default ReviewFilter;
