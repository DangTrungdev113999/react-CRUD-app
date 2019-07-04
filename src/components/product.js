import React, { Component } from 'react';

class Product extends Component {

    constructor(props) {
        super(props);
        this.addToCard = this.addToCard.bind(this);
    }

    addToCard() {
        console.log(this.props.children);
    }

    addToCard3() {
        console.log(this.props.children);
    }

    addToCard2 = () => {
        console.log(this.props.children);
    }



    render() {
        return (
            <div>
                <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                    <div className="thumbnail">
                        <img  alt={ this.props.children } src={ this.props.image }/>
                        <div className="caption">
                            <h3>{ this.props.children }</h3>
                            <p>
                                Price: { this.props.price } VNĐ
                            </p>
                            <p>
                                <a 
                                    href="#" 
                                    className="btn btn-primary"
                                    onClick={ this.addToCard }>
                                    Mua Ngay
                                </a>

                                <a 
                                    href="#" 
                                    className="btn btn-primary"
                                    onClick={ this.addToCard3.bind(this) }>
                                    Mua nóng hổi
                                </a>

                                <a 
                                    href="#" 
                                    className="btn btn-primary"
                                    onClick={ this.addToCard2 }>
                                    Mua Luôn
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Product;
