'use strict'
function Select(selectClass, dataAttribute, optionWrapClass) {
	const select = document.querySelector(selectClass)
  const optionS = document.querySelectorAll(`${selectClass} option`)
  // Дата атрибут для 'option'
  const data = dataAttribute
  // Класс для оболочки 'option'
  const optionWrap = optionWrapClass

  // Создание селекта
  function createSelect(select) {
    const newSelect = document.createElement('div')
    select.classList.forEach((el) => {
      if (el) {
        newSelect.classList.add(el)
      }
    })
    createOptionWrap(newSelect)
    replaceSelect(newSelect)
  }

  // Создание оболочки 'option'
  function createOptionWrap(newSelect) {
    const wrap = document.createElement('div')
    wrap.classList.add(optionWrap)
    newSelect.append(wrap)
    createOption(wrap)
  }

  // Создание "опции" селекта
  function createOption(wrap) {
    optionS.forEach((el) => {
      // добавление класса элементу
      const newOption = document.createElement('div')
      el.classList.forEach((c) => {
        if (c) {
          newOption.classList.add(c)
        }
      })
      // добавление 'value' элементу
      newOption.setAttribute(data, el.value)
      // добавление содержимого элементу
      newOption.innerText = el.innerText
      // добавление елемента в селект
      wrap.append(newOption)
    })
  }
  // Создание селекта
  createSelect(select)
  // Замена стандартного селекта
  function replaceSelect(newSelect) {
    select.replaceWith(newSelect)
  }
}

const select = new Select(
  '.form__select',
  'data-value',
  'form__option-wrap'
)
;