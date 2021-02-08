function Select(
  selectClass,
  // Имя селекта
  selectName = 'Выберите:',
  // Заменить селект? да : вставит после
  selectReplace = true,
  // Класс для оболочки выпадающего меню
  optionWrapClass = 'select__option-wrap',
  // Имя атрибута data-
  dataAttribute = 'data-value',
  // Тег для заголовка 'optgroup'
  groupTag = 'div',
  // Класс для заголовка 'optgroup'
  groupTitle = 'select__title',
) {
  const select = document.querySelector(selectClass)
  const optionS = document.querySelectorAll(`${selectClass} option`)
  const optionGroupS = document.querySelectorAll(`${selectClass} optgroup`)

  function setDefaultSelectValue(newSelect) {
    const selectValue = document.createElement('div')
    selectValue.classList.add('select__value')
    selectValue.innerText = selectName ? selectName : optionS[0].innerText
    newSelect.prepend(selectValue)
		toggleSelect(selectValue)
  }

  function toggleSelect(selectValue) {
		const selectWrap = document.querySelector(`.${optionWrapClass}`)
    selectValue.addEventListener('click', (e) => {
      selectWrap.classList.toggle('active')
    })
  }

  // Создание селекта
  function createSelect(select) {
    const newSelect = document.createElement('div')
    select.classList.forEach((el) => {
      if (el) {
        newSelect.classList.add('select')
      }
    })
    createOptionWrap(newSelect)
    replaceSelect(newSelect)
    setDefaultSelectValue(newSelect)
  }

  // Создание оболочки 'option'
  function createOptionWrap(newSelect) {
    const wrap = document.createElement('div')
    wrap.classList.add(optionWrapClass)
    newSelect.append(wrap)
    createOptgroup(wrap)
  }

  // Создание optgroup
  function createOptgroup(wrap) {
    if (optionGroupS.length > 0) {
      optionGroupS.forEach((el) => {
        const newGroup = document.createElement('div')
        // добавление класса группе
        el.classList.forEach((c) => {
          newGroup.classList.add('select__group')
        })
        // добавление имени группы
        const groupName = document.createElement(groupTag)
        groupName.textContent = el.label
        groupName.classList.add(groupTitle)
        newGroup.append(groupName)
        // Добавление 'option'
        addOptionInGroup(el.children, newGroup)
        // добавление группы в оболочку 'optionWrap'
        wrap.append(newGroup)
      })
    } else {
      createOption(wrap, optionS)
    }
  }

  // Добавление 'option' в группу
  function addOptionInGroup(arr, newGroup) {
    let m = []
    for (let i = 0; i < arr.length; i++) {
      m.push(arr[i])
    }
    createOption(newGroup, m)
  }

  // Создание "опции" селекта
  function createOption(wrap, array) {
    array.forEach((el) => {
      // добавление класса элементу
      const newOption = document.createElement('div')
      el.classList.forEach((c) => {
        if (c) {
          newOption.classList.add('select__option')
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

  // Создание селекта
  createSelect(select)

  // Замена/вставка стандартного селекта
  function replaceSelect(newSelect) {
    if (selectReplace) {
      select.replaceWith(newSelect)
    } else {
      select.after(newSelect)
    }
  }
}
// Пропустить параметры? undefined : иначе нельзя
const select = new Select('.form__select')
