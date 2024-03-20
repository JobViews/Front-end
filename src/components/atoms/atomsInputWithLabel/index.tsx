'use client'
import { useState } from 'react';
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface IInputWithLabel {
  id: string;
  label: string;
  value?: string;
  placeholder: string;
  type: string;
  onChange?: (value: string) => void;
}

export function InputWithLabel({ id, label, value, placeholder, type, onChange }: IInputWithLabel) {
  const [inputValue, setInputValue] = useState(value || '');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setInputValue(newValue);
    if (onChange) {
      onChange(newValue);
    }
  };

  return (
    <div className="grid w-full max-w-sm items-center gap-1.5">
      <Label htmlFor={id} className='text-primary dark:text-slate-200'>{label}
        <Input
          type={type}
          id={id}
          value={inputValue}
          className='text-primary dark:text-slate-200 mt-2'
          onChange={handleInputChange}
          placeholder={placeholder}
        />
      </Label>
    </div>
  );
}
