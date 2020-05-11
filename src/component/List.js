import React from 'react'
import { ProductConsumer } from './Context'

export default function List(props) {
   
    return (
        <ProductConsumer>
            {(value)=>{
                return(
                    <React.Fragment>
                        {value.items.map(item=>{
                            return(
                                <form key={item.key}>
 <input type="text" value={item.text} key={item.key} onChange={(e)=>{
     value.setUpdate(e.target.value,item.key)
 }}/>
 <button type="button" onClick={()=>{
     value.deleteButton(item.key)
 }}>delete</button>

                                </form>
                            )
                        })}
                    </React.Fragment>
                )
            }}
        </ProductConsumer>
    )
}
