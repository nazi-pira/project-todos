import React from 'react'
import { useDispatch } from 'react-redux'
import { tasks } from 'reducers/tasks'

export const CheckBox = (props) => {
  const dispatch = useDispatch()

  const handleCheckboxClick = (id) => {
    dispatch(tasks.actions.toggleCheckbox(id))
  }

  return (
    <label className="checkbox-label">
      <input
        type="checkbox"
        checked={props.task.complete}
        onChange={() => { handleCheckboxClick(props.task.id) }} />
      <span className="checkmark" role="checkbox" aria-checked="false" aria-label="checkbox" tabIndex="0" />
    </label>

  )
}