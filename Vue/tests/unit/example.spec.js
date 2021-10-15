import { mount } from '@vue/test-utils'
import Calc from '@/components/Calc.vue'

// describe('Calc.vue', () => {
//   it('get sum', () => {
//     const wrapper = mount(Calc)
//     const operand1 = wrapper.find('input[name=operand1]')
//     operand1.setValue('10')
//     const operand2 = wrapper.find('input[name=operand2]')
//     operand2.setValue('20')
//     const btn = wrapper.find('button[name=btn]')
//     btn.trigger('click')

//     expect(wrapper.vm.result).toBe(30)
//   })
// })


describe('Calc.vue', () => {
  it('get all result', () => {
    const wrapper = mount(Calc)
    const actions = wrapper.find('button[name=btn]')
    const operand1 = wrapper.find('input[name=operand2]')
    const operand2 = wrapper.find('input[name=operand2]')
    if(actions.name = '+',operand1.setValue('10') && operand2.setValue('20')) {
      actions.wrapper.find('button[name=btn]')
      actions.trigger('click')
    }
    expect(wrapper.vm.result).toBe(30)
  })
})
