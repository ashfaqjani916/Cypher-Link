import React, { useState } from 'react';
import { Button } from './ui/button';
import FormField from './FormField';
import { FaMoneyBillAlt } from "react-icons/fa";
import  { ChangeEvent } from 'react';


import { format } from "date-fns"
import { Calendar as CalendarIcon } from "lucide-react"
 
import { cn } from "@/lib/utils"
import { Calendar } from "@/components/ui/calendar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
 

interface CampaignCreate{
  title:string;
  description:string;
  target:number;
  deadline:number;
  image:string;
}

interface CampaignCreateFormProps {
  onSubmit: (formData: CampaignCreate) => void;
}

const CampaignCreateForm: React.FC<CampaignCreateFormProps> = ({ onSubmit }) => {
  const [date, setDate] = React.useState<Date>(new Date(2030, 2, 16));
  const [form, setForm] = useState<CampaignCreate>({
    title: '',
    description: '',
    target: 0,
    deadline: 0,
    image: '',
  });




  const handleFormFieldChange = (fieldName:string,e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [fieldName]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  
    // Assuming 'date' is a variable containing the new date value
    setForm({
      ...form,
      deadline: Math.floor(date.getTime() / 1000),
    });
    
    console.log(form);
  
    // Trigger the onSubmit callback with the updated form state
    onSubmit(form);
  };
  

  return (
    <div className="bg-[#1c1c24] flex justify-center items-center flex-col rounded-[10px] sm:p-10 p-4">
      <div className="flex justify-center items-center p-[16px] sm:min-w-[380px] bg-[#3a3a43] rounded-[10px]">
        <h1 className="font-epilogue font-bold sm:text-[20px] text-[15px] leading-[38px] text-white">Start a Campaign</h1>
      </div>

      <form onSubmit={handleSubmit} className="w-full mt-[65px] flex flex-col gap-[30px]">
        <div className="flex flex-wrap gap-[40px]">
          <FormField 
            labelName="Campaign Title *"
            placeholder="Write a title"
            inputType="text"
            value={form.title}
            handleChange={(e) => handleFormFieldChange('title', e)}
          />
        </div>
        <FormField 
            labelName="Story "
            placeholder="Write your story"
            inputType="textarea"
            isTextArea
            value={form.description}
            handleChange={(e) => handleFormFieldChange('description', e)}
          />

        <div className="w-full flex justify-center items-center p-4 bg-[#2db875] rounded-[10px]">
         <FaMoneyBillAlt size={30}/>
          <h4 className="font-epilogue font-bold text-xl text-white m-[10px]">You will get 100% of the raised amount</h4>
        </div>

        <div className="flex flex-wrap gap-[40px] items-center justify-center">
          <FormField 
            labelName="Goal *"
            placeholder="ETH 0.50"
            inputType="text"
            value={form.target}
            handleChange={(e) => handleFormFieldChange('target', e)}
          />
          <div className='flex flex-col gap-3'>
          <Popover>
          <p className='text-sm'>Target *</p>
      <PopoverTrigger asChild>
        <Button
          variant={"outline"}
          className={cn(
            "w-[330px]  text-[14px] h-[50px] py-[15px] sm:px-[25px] px-[15px] justify-start text-left font-normal border-[#3a3a43] bg-transparent hover:bg-transparent hover:text-white",
            !date && "text-muted-foreground"
          )}
        >
          <CalendarIcon className="w-4 h-4 mr-2" />
          {date ? format(date, "PPP") : <span>Pick a date</span>}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0">
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          initialFocus
          className=''
        />
      </PopoverContent>
           </Popover>
          </div>
           
        </div>

        <FormField 
            labelName="Campaign image *"
            placeholder="Place image URL of your campaign"
            inputType="url"
            value={form.image}
            handleChange={(e) => handleFormFieldChange('image', e)}
          />

          <div className="flex justify-center items-center mt-[40px]">
            <Button
              type="submit"
              className="bg-[#1dc071]">
              Submit new campaign</Button>
          </div>
      </form>
    </div>
  );
};

export default CampaignCreateForm;
