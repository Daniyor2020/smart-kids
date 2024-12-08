import React from 'react';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { User } from './types';


interface SelectUserProps {
  users: User[];
  handleUserChange: (value: string) => void;
  isLoading: boolean;
}

export const SelectUser: React.FC<SelectUserProps> = ({
  users,
  handleUserChange,
  isLoading,
}) => {
  return (
    <Select onValueChange={handleUserChange} disabled={isLoading}>
      <SelectTrigger className="w-full">
        <SelectValue placeholder="Choose a user" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Available Users</SelectLabel>
          {isLoading ? (
            <SelectItem disabled value="loading">Loading users...</SelectItem>
          ) : (
            users?.map((user) => (
              <SelectItem value={user.id.toString()} key={user.id.toString()}>
                {user.username}
              </SelectItem>
            ))
          )}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};