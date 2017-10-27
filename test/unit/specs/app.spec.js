import 'babel-polyfill'
import Vue from 'vue'
import Card from '../../../src/components/card/card.vue'

describe('src/pages/app.vue', () => {
  it('测试首页', () => {
    const Constructor = Vue.extend(Card)
    const vm = new Constructor().$mount()
    expect(vm.$el.querySelectorAll('li').length)
      .to.equal(1)
  })
})

