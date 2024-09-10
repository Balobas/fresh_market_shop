import { IconProps } from "@/types";
import { rem } from "@mantine/core";

export const User = ({ size, fill, ...others }: IconProps) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill={fill}
      xmlns="http://www.w3.org/2000/svg"
      style={{ width: rem(size), height: rem(size) }}
      {...others}
    >
      <path d="M12 12C15.3141 12 18 9.31406 18 6C18 2.68594 15.3141 0 12 0C8.68594 0 6 2.68594 6 6C6 9.31406 8.68594 12 12 12ZM16.2 13.5H15.4172C14.3766 13.9781 13.2188 14.25 12 14.25C10.7812 14.25 9.62813 13.9781 8.58281 13.5H7.8C4.32187 13.5 1.5 16.3219 1.5 19.8V21.75C1.5 22.9922 2.50781 24 3.75 24H20.25C21.4922 24 22.5 22.9922 22.5 21.75V19.8C22.5 16.3219 19.6781 13.5 16.2 13.5Z" />
    </svg>
  );
};
