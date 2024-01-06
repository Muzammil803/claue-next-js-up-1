import React from 'react'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
const CurrencySelects = () => {
  return (
    <Select defaultValue='USD' className="w-[80px] bg-background-[#f6f6f8]">
    <SelectTrigger className="w-[80px]"  >
      <SelectValue  />
    </SelectTrigger>
    <SelectContent className="min-w-[80px]">
      <SelectItem value="USD">USD</SelectItem>
      <SelectItem value="EUR">EUR</SelectItem>
      <SelectItem value="SGD">SGD</SelectItem>
      <SelectItem value="AUD">AUD</SelectItem>
    </SelectContent>
  </Select>
  
  )
}

export default CurrencySelects