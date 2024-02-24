import React, { ChangeEvent } from 'react';

interface FormFieldProps {
  labelName?: string;
  placeholder: string;
  inputType: string;
  isTextArea?: boolean;
  value: string | number;
  handleChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}

const FormField: React.FC<FormFieldProps> = ({
  labelName,
  placeholder,
  inputType,
  isTextArea,
  value,
  handleChange,
}) => {
  return (
    <label className="flex flex-col flex-1 w-full">
      {labelName && (
        <span className="font-epilogue font-medium text-[14px] leading-[22px] text-white mb-[10px]">
          {labelName}
        </span>
      )}
      {isTextArea ? (
        <textarea
          required
          value={value as string}
          onChange={(e)=>{handleChange(e)}}
          rows={4}
          placeholder={placeholder}
          className="py-[15px] sm:px-[25px] px-[15px] outline-none border-[1px] border-[#3a3a43] bg-transparent font-epilogue text-white text-[14px] placeholder:text-[#4b5264] rounded-[10px] sm:min-w-[300px]"
        />
      ) : (
        <input
          required
          value={value as string}
          onChange={(e)=>{handleChange(e)}}
          type={inputType}
          placeholder={placeholder}
          className="py-[15px] sm:px-[25px] px-[15px] outline-none border-[1px] text-white border-[#3a3a43] bg-transparent font-epilogue  text-[14px] placeholder:text-[#4b5264] rounded-[10px] sm:min-w-[300px]"
        />
      )}
    </label>
  );
};

export default FormField;
