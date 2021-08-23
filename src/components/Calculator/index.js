import React, { useState } from 'react'
import RangeSlider from '@/components/RangeSlider'
import TextInput from '@/components/TextInput'
import SavingsResults from './SavingsResults'

const formatNumber = (number, limit) => {
  if(!number || isNaN(number)) return null
  const shortenNumber = number.toString().slice(0,limit)
  if (shortenNumber[shortenNumber.length - 1] === '.') return number.toString().slice(0,limit - 1)
  return shortenNumber
}

const Calculator = () => {
  const MAX_INGREDIENT_SPENDING = 100
  const MAX_EMPLOYEES_AMOUNT = 10

  const [ingredientSpending, setIngredientSpending] = useState(10)
  const [employeesAmount, setEmployeesAmount] = useState(1)
  const foodSavingText = 'Estimated cost food savings'
  const anualSavingText = 'Your estimated annual savings'
  const foodCostSaving = formatNumber(Number(ingredientSpending) * 0.3, 6)
  const anualSavings = formatNumber(Number(employeesAmount) * 1337 + foodCostSaving, 7)

  const handleOnChangeIngredient = e => {
    const regex = /^[0-9]*\.?[0-9]*$/;
    const value = e.currentTarget.value
    if (value === '' || regex.test(value) && value <= MAX_INGREDIENT_SPENDING) {
      setIngredientSpending(value)
    }
  }

  const handleOnChangeEmployees = e => {
    const regex = /^[0-9]*$/;
    const value = e.currentTarget.value
    if (value === '' || regex.test(value) && value <= MAX_EMPLOYEES_AMOUNT) {
      setEmployeesAmount(value)
    }
  }

  const onChangeIngredientSlider = (e, value) => {
    if (value) setIngredientSpending(value)
  }

  const onChangeEmployeeSlider = (e, value) => {
    if (value) setEmployeesAmount(value)
  }

  return (
    <div>
      <div className="grid grid-cols-2">
        <div className="w-7/12">
          <p>{'Monthly ingredient spending'}</p>
        </div>
        <div className="flex justify-end">
          <div className="w-48">
            <TextInput
              isMoney
              currentValue={ingredientSpending}
              onChange={handleOnChangeIngredient}
            />
          </div>
        </div>
      </div>
      <div className="mt-6">
        <RangeSlider
          minValue={10}
          maxValue={MAX_INGREDIENT_SPENDING}
          value={ingredientSpending}
          onChange={onChangeIngredientSlider}/>
      </div>
      <div className="mt-20 grid grid-cols-2">
        <div className="w-7/12">
          <p>{'Full-time employees that process invoices'}</p>
        </div>
        <div className="flex justify-end">
          <div className="w-20">
            <TextInput
              currentValue={employeesAmount}
              onChange={handleOnChangeEmployees}
            />
          </div>
        </div>
      </div>
      <div className="mt-6">
        <RangeSlider
          minValue={1}
          maxValue={MAX_EMPLOYEES_AMOUNT}
          value={employeesAmount}
          onChange={onChangeEmployeeSlider}/>
      </div>
      <div className="mt-20 grid grid-cols-2">
        <SavingsResults
          value={foodCostSaving}
          description={foodSavingText}/>
        <SavingsResults
          value={anualSavings}
          description={anualSavingText}/>
      </div>
    </div>
  )
}

export default Calculator
