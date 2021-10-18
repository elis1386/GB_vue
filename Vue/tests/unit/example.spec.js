import { mount } from '@vue/test-utils'
import Calc from '@/components/Calc.vue'


describe('Calc.vue', () => {
  let wrapper

  const createComponent = () => {
    wrapper = mount(Calc)
  }
  const findButtonByText = (text) =>
    wrapper.findAll('button').wrappers.find(w => {
      return w.text() === text
    })
  const findLabelText = (text) => {
    return wrapper.findAll('label').wrappers.find(w => {
      return w.text() === text
    })
  }

it ('input data', () => {
  createComponent()
  const operand1 = wrapper.find('input[name=operand1]')
  operand1.setValue('10')
  expect(wrapper.vm.operand1).toBe(10)
})
// it ('delete symbol', async () => {
//   createComponent()
//   const operand1 = wrapper.find('input[name=operand1]')
//   await operand1.setValue('10')
//   await findButtonByText('&larr;').trigger('click')
//   expect(wrapper.vm.operand1).toBe('1')
// })
it('show keyboard', async () => {
  createComponent()
  expect(wrapper.vm.keyVisible).toBe(false)
})
it('hide keyboard', async () => {
  createComponent()
  await findLabelText('Отобразить экранную клавиатуру').trigger('click')
  expect(wrapper.vm.keyVisible).toBe(true)
})
it.each `
FirstNumber | SecondNumber | item | expectedResult
${'3'} | ${'2'} | ${'+'} | ${5}
${'7'} | ${'2'} | ${'-'} | ${5}
${'4'} | ${'2'} | ${'/'} | ${2}
${'8'} | ${'2'} | ${'*'} | ${16}
` ('check items',
  async ({ FirstNumber, SecondNumber, item, expectedResult }) => {
    createComponent()
    await findLabelText('First').trigger('click')
    await findButtonByText(FirstNumber).trigger('click')
    await findLabelText('Second').trigger('click')
    await findButtonByText(SecondNumber).trigger('click')
    await findButtonByText(item).trigger('click')
    expect(wrapper.vm.result).toBe(expectedResult)
  })
})