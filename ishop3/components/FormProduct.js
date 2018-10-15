import React from 'react';

import catalogueEvents from "./events";

import './formProduct.css';

import ErrorText from './ErrorText.js';

class FormProduct extends React.Component{
    state = {
        buttonActive:false,
        valid:false,
        errorName:null,
        errorUrl:null,
        errorPrice:null,
        errorQuantity:null
    };
    constructor(){
        super();
        this.newTextName = null;
        this.newTextPrice = null;
        this.newTextUrl = null;
        this.newTextQuantity = null;
    }
    setNewName =(ref)=>{
        this.newTextName = ref;
    };
    setNewPrice =(ref)=>{
        this.newTextPrice = ref;
    };
    setNewUrl =(ref)=>{
        this.newTextUrl = ref;
    };
    setNewQuantity =(ref)=>{
        this.newTextQuantity = ref;
    };
    handleUpdateInfo = ()=>{
        let counter = 0;
        if(this.newTextName && !this.updateName(this.newTextName.value)){
            counter++;
        }
        if(this.newTextPrice && !this.updatePrice(this.newTextPrice.value)){
            counter++;
        }
        if(this.newTextUrl && !this.updateUrl(this.newTextUrl.value)){
            counter++;
        }
        if(this.newTextQuantity && !this.updateQuantity(this.newTextQuantity.value)){
            counter++;
        }
        if(counter !== 0){
            this.setState({valid:false, buttonActive:false});
        }
        else{
            this.setState({valid:true, buttonActive:true});
        }
    };
    componentDidMount(){
        this.handleUpdateInfo();
    }
    handleSaveButton=()=>{
        let updateItem ={};
        if(this.state.valid){
            updateItem['id'] = this.props.id;
            updateItem['productName'] = this.newTextName.value;
            updateItem['price'] = parseInt(this.newTextPrice.value);
            updateItem['count'] = parseInt(this.newTextQuantity.value);
            updateItem['urlPictures'] = this.newTextUrl.value;
            updateItem['description'] = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.';
            catalogueEvents.emit('EUpdateProductList', updateItem);
        }
    };

    handleCancel = () =>{
        catalogueEvents.emit('EFormHidden', true);
    };
    updateName = (name)=>{
        if(!this.validName(name)){
            let errorText = < ErrorText text={"Please, Fill the field.Value must be string."}/>;
            this.setState({errorName:errorText});
            return false;
        }
        else{
            this.setState({errorName:null});
            return true;
        }
    };
    validName =(value) =>{
        if(value.length < 2){
            return false;
        }
            return true;
    };
    updatePrice = (price) =>{
        if(!this.validNumber(price)){
            let errorText = < ErrorText text={"Please, Fill the field.Value must be rational number great than 0."}/>;
            this.setState({errorPrice:errorText});
            return false;
        }
        else{
            this.setState({errorPrice:null});
            return true;
        }
    };
    validNumber = (value)=>{
        if(!value|| value <= 0){
            return false;
        }
        return true;
    };
    updateUrl = (url) =>{
        if(!this.validUrl(url)){
            let errorText = <ErrorText text={"Please, Fill the field.Value must be valid URL."}/>;
            this.setState({errorUrl:errorText});
            return false;
        }
        else{
            this.setState({errorUrl:null});
            return true;
        }
    };
    validUrl = (value)=>{
        let regExp = /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/;
        if(!regExp.test(value)){
            return false;
        }
        return true;
    };
    updateQuantity = (quantity) =>{
        if(!this.validNumber(quantity)){
            let errorText = <ErrorText text={"Please, Fill the field.Value must be positive integer."}/>;
            this.setState({errorQuantity:errorText});
            return false;
        }
        else{
            this.setState({errorQuantity:null});
            return true;
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
                    ? <form key={this.props.id} onChange={this.handleUpdateInfo}>
                            <p>
                                <label>Name</label>
                                <input type='text' ref={this.setNewName} />
                                {this.state.errorName}
                            </p>
                            <p>
                                <label>Price</label>
                                <input type='number' ref={this.setNewPrice}/>
                                {this.state.errorPrice}
                            </p>
                            <p>
                                <label>URL</label>
                                <input type='url' ref={this.setNewUrl}/>
                                {this.state.errorUrl}
                            </p>
                            <p>
                                <label>Quantity</label>
                            <input type='number' ref={this.setNewQuantity}/>
                                {this.state.errorQuantity}
                            </p>
                    </form>
                    :<form key={this.props.id} onChange={this.handleUpdateInfo}>
                            <p>
                                <label>Name</label>
                                <input type='text' defaultValue={this.props.edit.name} ref={this.setNewName}/>
                                {this.state.errorName}
                            </p>
                            <p>
                                <label>Price</label>
                                <input type='number' defaultValue={this.props.edit.price} ref={this.setNewPrice}/>
                                {this.state.errorPrice}
                            </p>
                            <p>
                                <label>URL</label>
                                <input type='url' defaultValue={this.props.edit.url} ref={this.setNewUrl}/>
                                {this.state.errorUrl}
                            </p>
                            <p>
                                <label>Quantity</label>
                                <input type='number' defaultValue={this.props.edit.quantity} ref={this.setNewQuantity}/>
                                {this.state.errorQuantity}
                             </p>
                    </form>
                }
                {(this.props.type === "add")
                    ? <input type="button" value="Add" disabled={!this.state.buttonActive} onClick={this.handleSaveButton}/>
                    : <input type="button" value="Save" disabled={!this.state.buttonActive} onClick={this.handleSaveButton}/>
                }
                <input type="button" value="Cancel" onClick={this.handleCancel}/>
            </div>
        )
    }
}
export  default FormProduct;