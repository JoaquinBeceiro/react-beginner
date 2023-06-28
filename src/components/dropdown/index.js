import Select from "react-select";

const Dropdown = ({
  options,
  isLoading,
  isDisabled,
  isClearable,
  onChange,
}) => {
  return (
    <Select
      options={options}
      isLoading={isLoading}
      isDisabled={isDisabled}
      isClearable={isClearable}
      onChange={onChange}
    />
  );
};

export default Dropdown;
