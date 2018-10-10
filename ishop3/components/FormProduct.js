import React from 'react';

import catalogueEvents from "./events";

import './formProduct.css';

import ErrorText from './ErrorText.js';

class FormProduct extends React.Component{
    state = {
        buttonActive:true,
        valid:false,
        errorName:null,
        errorUrl:null,
        errorPrice:null,
        errorQuantity:null
    };
    handleUpdateInfo = ()=>{
        let updateItem ={};
        console.log('update item');
    };
    handleCancel = () =>{
        catalogueEvents.emit('FormHidden', true);
    };
    updateName = (e)=>{
        if(!this.validName(e.target.value)){
            let errorText = < ErrorText text={"Please, Fill the field.Value must be string."}/>;
            this.setState({errorName:errorText})
        }
        else{
            this.setState({errorName:null});
        }
    };
    validName =(value) =>{
        if(value.length < 2){
            return false;
        }
            return true;
    };
    updatePrice = (e) =>{
        if(!this.validNumber(e.target.value)){
            let errorText = < ErrorText text={"Please, Fill the field.Value must be rational number great than 0."}/>;
            this.setState({errorPrice:errorText})
        }
        else{
            this.setState({errorPrice:null});
        }
    };
    validNumber = (value)=>{
        if(!value|| value <= 0){
            return false;
        }
        return true;
    };
    updateUrl = (e) =>{
        if(!this.validUrl(e.target.value)){
            let errorText = < ErrorText text={"Please, Fill the field.Value must be valid URL."}/>;
            this.setState({errorUrl:errorText})
        }
        else{
            this.setState({errorUrl:null});
        }
    };
    validUrl = (value)=>{
        let regExp = /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/;
        if(!regExp.test(value)){
            return false;
        }
        return true;
    };
    updateQuantity = (e) =>{
        if(!this.validNumber(e.target.value)){
            let errorText = < ErrorText text={"Please, Fill the field.Value must be positive integer."}/>;
            this.setState({errorQuantity:errorText})
        }
        else{
            this.setState({errorQuantity:null});
        }
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
                    ? <form key={this.props.id}>
                        <p><label>Name</label>
                        <input type='text' onChange={this.updateName} /></p>
                        <p><label>Price</label>
                        <input type='number' onChange={this.updatePrice} /></p>
                        <p><label>URL</label>
                        <input type='url' onChange={this.updateUrl}/></p>
                        <p><label>Quantity</label>
                        <input type='number' onChange={this.updateQuantity} /></p>
                    </form>
                    :<form key={this.props.id}>
                        <p><label>Name</label>
                        <input type='text' onChange={this.updateName} defaultValue={this.props.edit.name}/>{this.state.errorName}</p>
                        <p><label>Price</label>
                        <input type='number' onChange={this.updatePrice} defaultValue={this.props.edit.price}/>{this.state.errorPrice}</p>
                        <p><label>URL</label>
                        <input type='url' onChange={this.updateUrl} defaultValue={this.props.edit.url}/>{this.state.errorUrl}</p>
                        <p><label>Quantity</label>
                        <input type='number' onChange={this.updateQuantity} defaultValue={this.props.edit.quantity}/>{this.state.errorQuantity}</p>
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