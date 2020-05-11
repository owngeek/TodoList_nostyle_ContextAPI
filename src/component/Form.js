import React from 'react'
import { ProductConsumer } from './Context'

export default function Form() {
    return (
        <ProductConsumer>
            {(value)=>{
                return (
                    <form onSubmit={value.addButton}>
                        <input type="text" value={value.currentItem.text} onChange={value.handleChange}/>
                        <button type="submit" disabled={value.handleDisable()}>Add</button>
                        </form>
                )
            }}
        </ProductConsumer>
    )
}
