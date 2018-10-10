import React from 'react';

import catalogueEvents from "./events";

import './formProduct.css';

class FormProduct extends React.Component{
    state = {
        buttonActive:true,
        valid:false
    };
    handleUpdateInfo = ()=>{
        let updateItem ={};
    };
    validForm = (e) =>{

    };
    handleCancel = () =>{
        catalogueEvents.emit('FormHidden', true);
    };
    render(){
        return(
            <div className="formProduct">
                {
                (this.props.type === "add")
                    ? <h2>Add new product</h2>
                    : <h2>Edit existing product</h2>
                }
                <p>Id:{this.props.id}</p>
                {(this.props.type === "add")
                    ? <form key={this.props.id} onChange={this.validForm}>
                        <label>Name</label>
                        <input type='text' />
                        <label>Price</label>
                        <input type='text'/>
                        <label>URL</label>
                        <input type='text'/>
                        <label>Quantity</label>
                        <input type='text'/>
                    </form>
                    :<form key={this.props.id} onChange={this.validForm}>
                        <label>Name</label>
                        <input type='text' defaultValue={this.props.edit.name}/>
                        <label>Price</label>
                        <input type='text' defaultValue={this.props.edit.price}/>
                        <label>URL</label>
                        <input type='text' defaultValue={this.props.edit.url}/>
                        <label>Quantity</label>
                        <input type='text' defaultValue={this.props.edit.quantity}/>
                    </form>
                }
                {(this.props.type === "add")
                    ? <input type="button" value="Add" disabled={this.state.buttonActive} onClick={this.handleUpdateInfo}/>
                    : <input type="button" value="Save" disabled={this.state.buttonActive} onClick={this.handleUpdateInfo}/>
                }
                <input type="button" value="Cancel" onClick={this.handleCancel}/>
            </div>
        )
    }
}
export  default FormProduct;