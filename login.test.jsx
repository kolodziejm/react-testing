import React from 'react'
import {render, cleanup} from 'react-testing-library' // zamiennik enzyme
import {Login} from './login'

afterEach(cleanup)

test('calls onSubmit with username and password', () => {
const handleSubmit = jest.fn() // jest mock - poczytaj
const {getByLabelText, getByText} = render( // render zwraca wszystkie selektory do wykorzystania
<Login onSubmit={handleSubmit} />,
)
getByLabelText(/username/i).value = 'chuck' // podstawowy regexp
getByLabelText(/password/i).value = 'norris'
getByText(/submit/i).click()
expect(handleSubmit).toHaveBeenCalledTimes(1) // assortions
expect(handleSubmit).toHaveBeenCalledWith({
username: 'chuck',
password: 'norris',
})
})
