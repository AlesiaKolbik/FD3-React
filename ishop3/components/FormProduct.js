import React from 'react';

import catalogueEvents from "./events";

import './formProduct.css';

import ErrorText from './ErrorText.js';

class FormProduct extends React.Component{
    state = {
        buttonActive:true,
        valid:false,
        errorName:null
    };
    handleUpdateInfo = ()=>{
        let updateItem ={};
    };
    validForm = (e) =>{
        if(e.target.value.length < 2){
            let errorText = < ErrorText text={"Please, Fill the field.Value must be string."}/>;
            this.setState({errorName:errorText});
        }
        else{
            this.setState({errorName:null});
        }
    };
    handleCancel = () =>{
        catalogueEvents.emit('FormHidden', true);
    };
    render(){
        return(
            <div className="formProduct">
               <div className="headerForm"> {
                (this.props.type === "add")
                    ? <h2>Add new product</h2>
                    : <h2>Edit existing product</h2>
                }
                <p>Id:{this.props.id}</p>
               </div>
                {(this.props.type === "add")
                    ? <form key={this.props.id} onChange={this.validForm}>
                        <p><label>Name</label>
                        <input type='text' /></p>
                        <p><label>Price</label>
                        <input type='text'/></p>
                        <p><label>URL</label>
                        <input type='text'/></p>
                        <p><label>Quantity</label>
                        <input type='text'/></p>
                    </form>
                    :<form key={this.props.id} onChange={this.validForm}>
                        <p><label>Name</label>
                        <input type='text' defaultValue={this.props.edit.name}/>{this.state.errorName}</p>
                        <p><label>Price</label>
                        <input type='text' defaultValue={this.props.edit.price}/></p>
                        <p><label>URL</label>
                        <input type='text' defaultValue={this.props.edit.url}/></p>
                        <p><label>Quantity</label>
                        <input type='text' defaultValue={this.props.edit.quantity}/></p>
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