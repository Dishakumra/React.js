import React from 'react';
import './Think.css';
class Prodcatrow extends React.Component{
  render(){

      const category = this.props.category;
  return (
    <tr>
      <th colSpan="2">
        {category}
      </th>
    </tr>
  );

  }
}
class Prodrow extends React.Component{
  render(){
    const product = this.props.product;
  const name = product.stocked ?
    product.name :
    <span style={{color: 'red'}}>
      {product.name}
    </span>;

  return (
    <tr>
      <td>{name}</td>
      <td>{product.price}</td>
    </tr>
  );
  }
}
class ProductTable extends React.Component{
  render(){

      const row=[];
      let lastcat=null;
      this.props.products.forEach((product)=>{
        if (product.name.indexOf(this.props.search) === -1) {
  return;
}
if (this.props.valueof && !product.stocked) {
  return;
}
        if(product.category!==lastcat)
        {
          row.push(
            <Prodcatrow category={product.category} key={product.category}/>
          );
        }
        row.push(
          <Prodrow product={product} key={product.name} valueof={this.props.valueof}/>
        );
        lastcat=product.category;
      });
      return (
   <table>
     <thead>
       <tr>
         <th>Name</th>
         <th>Price</th>
       </tr>
     </thead>
     <tbody>{row}</tbody>
   </table>
 );

  }
}
class Search extends React.Component{
  constructor(props) {
   super(props);
   this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
   this.handleInStockChange = this.handleInStockChange.bind(this);
 }
  handleFilterTextChange=e=>{
    this.props.onFilterTextChange(e.target.value);


  }
  handleInStockChange=e=>{
    console.log(e.target.value);
    this.props.onInStockChange(e.target.checked);


  }
  render(){
    //console.log("jfd");
    return(
      <form>
      <input type="text" placeholder="search" onChange={this.  handleFilterTextChange}/>
      <p>
      <input type="checkbox"  checked={this.props.valueof} onChange={this.handleInStockChange}/>
      {" "}
      only show product in stock
      </p>
      </form>
    );
  }
}
class Think extends React.Component{
  state={
    search:"",
    valueof:false
  }
  constructor(props) {
  super(props);


  this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
  this.handleInStockChange = this.handleInStockChange.bind(this);
}
  handleFilterTextChange(filter){
      this.setState({search:filter})
  }
  handleInStockChange(inStockOnly) {
   this.setState({
     valueof: inStockOnly
   })
 }
  render(){
    console.log(this.props.products);
    return(
      <div>

      <Search search={this.state.search} valueof={this.state.valueof} onFilterTextChange={this.handleFilterTextChange}
          onInStockChange={this.handleInStockChange}/>
      <ProductTable products={this.props.products} search={this.state.search} valueof={this.state.valueof}/>
      </div>
    )
  }
}
export default Think;
