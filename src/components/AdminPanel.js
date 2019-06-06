import React, { Component } from 'react';

class AdminPanel extends Component {
    constructor() {
        super();

        this.state = {
            name: '',
            author: '',
            description: '',
            onStock: true,
            image: '',
        }
    }

    handleChange = e => {
        const target = e.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        })
    }

    render() {
        return (
            <div className='adminPanel col-xs-4'>
                <form>
                    <div className='form-group'>
                        <input
                            id='name'
                            name='name'
                            type='text'
                            value={this.state.name}
                            onChange={this.handleChange}
                            placeholder='Book name'
                            className='form-control'
                        />
                    </div>
                    <div className='form-group'>
                        <input
                            id='author'
                            name='author'
                            type='text'
                            value={this.state.author}
                            onChange={this.handleChange}
                            placeholder='Book author'
                            className='form-control'
                        />
                    </div>
                    <div className='form-group'>
                        <textarea
                            id='description'
                            name='description'
                            value={this.state.description}
                            onChange={this.handleChange}
                            placeholder='Book description'
                            className='form-control'
                        />
                    </div>
                    <div className='form-group'>
                        <input
                            id='onStock'
                            name='onStock'
                            type='checkbox'
                            checked={this.state.onStock}
                            onChange={this.handleChange}
                            className='form-check-input'
                        />
                        <label
                            htmlFor='onStock'
                            className='form-check-label'>
                            On stock
                        </label>
                    </div>
                    <div className='form-group'>
                        <input
                            id='image'
                            name='image'
                            type='text'
                            value={this.state.image}
                            onChange={this.handleChange}
                            placeholder='Book image'
                            className='form-control'
                        />
                    </div>
                    <button type='submit' className='btn btn-primary'>Add</button>
                </form>
            </div>
        )
    }
}

export default AdminPanel;