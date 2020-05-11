import React, { Component } from 'react'
const ProductContext = React.createContext()
export default class ProductProvider extends Component {
state={
    items:[],
    currentItem:{
        text:"",key:""
    }
}
handleChange =(e)=>{
   this.setState({
       currentItem:{
           text:e.target.value,
           key:Date.now()
        }
    })
    
        }


addButton = (e) =>{
    e.preventDefault()
    const newItems = this.state.currentItem

if(newItems.text.length !== 0){
  
 const items = [...this.state.items,newItems]
this.setState({
    items:items,
    currentItem:{text:"",key:""}
})
}


}

 setUpdate =(text,key)=>{
this.state.items.map(item=>{
   if (item.key === key){
item.text = text
}

this.setState({
    text:text
 })
})
}

deleteButton=(key)=>{
const filterItem = this.state.items.filter(item=>(item.key !== key))
this.setState({
    items:filterItem
})
}

handleDisable = ()=>{
    return this.state.currentItem.text === ""
}

    render() {
        return (
            <ProductContext.Provider value={{
...this.state,
handleChange : this.handleChange,
addButton:this.addButton,
setUpdate:this.setUpdate,
deleteButton:this.deleteButton,
handleDisable:this.handleDisable



            }}>
                {this.props.children}
            </ProductContext.Provider>
        )
    }
}
const ProductConsumer = ProductContext.Consumer
export {ProductProvider,ProductConsumer}
