'use strict'
function Select() {
  const select = document.querySelector('._select')
  const optionS = document.querySelectorAll('._option')
	// Дата атрибут для 'option'
	const dataAttribute = 'data-value'
	// Класс для оболочки 'option'
	const optionWrapClass = 'form__option-wrap'
  createSelect(select)

  // Создание селекта
  function createSelect(select) {
    const newSelect = document.createElement('div')
    select.classList.forEach((el) => {
      if (el !== '_select') {
        newSelect.classList.add(el)
      }
    })
		createOptionWrap(newSelect)
    replaceSelect(newSelect)
  }

	function createOptionWrap(newSelect) {
		const wrap = document.createElement('div')
		wrap.classList.add(optionWrapClass)
		newSelect.append(wrap)
		createOption(wrap)
	}

  // Создание "опции" селекта
  function createOption(wrap) {
    optionS.forEach((el) => {
			// добавление класса элементу
      const newOption = document.createElement('div')
      el.classList.forEach((c) => {
        if (c !== '_option') {
          newOption.classList.add(c)
        }
      })
			// добавление 'value' элементу
			newOption.setAttribute(dataAttribute, el.value)
			// добавление содержимого элементу
			newOption.innerText = el.innerText
			// добавление елемента в селект
      wrap.append(newOption)
    })
  }

  // Замена стандартного селекта
  function replaceSelect(newSelect) {
    select.replaceWith(newSelect)
  }
}

const select = new Select()
;